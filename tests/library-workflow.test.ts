import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import path from "node:path";
import test from "node:test";

function workflow() {
  const file = path.join(process.cwd(), ".github/workflows/library-sync.yml");
  const script = "require 'yaml'; require 'json'; puts JSON.generate(YAML.safe_load(File.read(ARGV[0]), [], [], true))";
  return JSON.parse(execFileSync("ruby", ["-e", script, file], { encoding: "utf8", env: { ...process.env, GEM_HOME: "/System/Library/Ruby/Gems/2.6.0", GEM_PATH: "" } }));
}

test("runs reviewed library synchronization on a schedule or manually", () => {
  const value = workflow();
  const triggers = value.on ?? value.true;
  assert.ok(triggers.schedule);
  assert.ok(triggers.workflow_dispatch !== undefined);
});

test("uses least privilege and opens a review PR after validation", () => {
  const value = workflow();
  assert.deepEqual(value.permissions, { contents: "write", "pull-requests": "write" });
  const steps = value.jobs.sync.steps as { name?: string; run?: string; uses?: string }[];
  const testIndex = steps.findIndex((step) => step.run?.includes("pnpm test"));
  const prIndex = steps.findIndex((step) => step.uses?.includes("create-pull-request"));
  assert.ok(testIndex >= 0 && prIndex > testIndex);
  assert.ok(steps.some((step) => step.run?.includes("pnpm library:sync")));
  assert.ok(steps.some((step) => step.run?.includes("pnpm library:publish")));
});

test("does not deploy, expose secrets, or push directly to main", () => {
  const text = JSON.stringify(workflow()).toLowerCase();
  assert.doesNotMatch(text, /vercel|deploy|password|private.key|git push/);
  assert.match(text, /create-pull-request/);
});
