export const videoSections = [
  { id: "start", label: "Start with Cowork", description: "See what Cowork does and set up a first task you can review." },
  { id: "automate", label: "Delegate and automate", description: "Turn a multi-step task into a repeatable workflow." },
] as const;

type VideoGuide = {
  slug: string;
  title: string;
  originalTitle: string;
  id: string;
  publisher: "Anthropic" | "Claude";
  published: string;
  section: (typeof videoSections)[number]["id"];
  description: string;
  takeaways: readonly string[];
  exercise: string;
  docs: readonly { label: string; href: string }[];
};

export const videoGuides: readonly VideoGuide[] = [
  {
    slug: "introducing-claude-cowork",
    title: "What Claude Cowork does: Anthropic’s introduction",
    originalTitle: "Introducing Cowork: Claude Code for the rest of your work",
    id: "UAmKyyZ-b9E",
    publisher: "Anthropic",
    published: "2026-01-12",
    section: "start",
    description: "See how Cowork turns a task brief and source files into finished documents, spreadsheets, and presentations.",
    takeaways: [
      "Notice the difference between asking for advice in chat and specifying a deliverable Cowork can produce.",
      "Look at the inputs as well as the outputs: a useful task names the source material and the finished file.",
      "This launch video shows the original interface. For current access and setup, use the written guide below.",
    ],
    exercise: "Put three sample notes in a test folder and ask for a one-page brief that cites each source by file name. Open the brief and verify each citation before using it.",
    docs: [{ label: "What is Claude Cowork?", href: "/docs/introduction" }, { label: "How Cowork works", href: "/docs/how-it-works" }],
  },
  {
    slug: "getting-started-with-claude-cowork",
    title: "How to get started with Claude Cowork",
    originalTitle: "Getting started with Claude Cowork",
    id: "Lbml7IuGJYw",
    publisher: "Claude",
    published: "2026-05-08",
    section: "start",
    description: "Watch the official walkthrough for opening Cowork and giving it a first task using your files and connected tools.",
    takeaways: [
      "Start with a bounded task that has a clear input, output, and finish line.",
      "Use a sample folder for your first run. Decide which inputs Cowork should be able to read before granting access.",
      "Read the plan before accepting changes and inspect the delivered file against your original brief.",
    ],
    exercise: "Give Cowork a folder of sample receipts. Ask it for a table with date, merchant, amount, and a flag for missing fields. Compare three rows with the originals.",
    docs: [{ label: "Cowork setup and access guide", href: "/docs/setup" }, { label: "Receipt audit with sample data", href: "/docs/receipt-audit" }],
  },
  {
    slug: "delegate-tasks-in-claude-cowork",
    title: "How to delegate a multi-step task in Claude Cowork",
    originalTitle: "Delegate and schedule tasks in Claude Cowork",
    id: "tYOI-WoLS_o",
    publisher: "Claude",
    published: "2026-06-21",
    section: "automate",
    description: "Follow a meeting-prep example that brings context from calendars, email, team chat, and previous notes into one brief.",
    takeaways: [
      "Define the decision or meeting the brief should help with before listing sources.",
      "Have Cowork point to the original message or note for material claims so you can check context quickly.",
      "Run the brief once by hand and review the result before deciding whether the same task should run again.",
    ],
    exercise: "Use a test calendar event and two sample notes. Ask for agenda items, unresolved questions, and a link or file reference for each item.",
    docs: [{ label: "Check connector access", href: "/docs/connector-checklist" }, { label: "Copy a meeting-notes template", href: "/docs/templates" }],
  },
  {
    slug: "claude-cowork-scheduled-tasks",
    title: "How to set up scheduled tasks in Claude Cowork",
    originalTitle: "Scheduled Tasks in Cowork: Set it once, Claude handles the rest",
    id: "b-ntWZqHF78",
    publisher: "Claude",
    published: "2026-03-18",
    section: "automate",
    description: "See how to schedule recurring work in Cowork, then use the checklist below to verify the first run and its output.",
    takeaways: [
      "Choose a cadence and time zone that match when someone will read the output.",
      "Write down the date window and what to do when a source is unavailable or has no updates.",
      "Check run history and open the deliverable. A completed run still needs a check for missing sources or wrong dates.",
    ],
    exercise: "Schedule a test weekly digest from a low-risk source. After the first run, compare the stated reporting window, source links, and run time with the schedule.",
    docs: [{ label: "Scheduled tasks guide and checks", href: "/docs/scheduled-tasks" }, { label: "Reusable workspace instructions", href: "/docs/workspace-instructions" }],
  },
];

export const videoPath = (video: VideoGuide) => `/videos/${video.slug}`;
export const videoThumbnail = (video: VideoGuide) => `https://i.ytimg.com/vi_webp/${video.id}/hqdefault.webp`;
export const videoPlayer = (video: VideoGuide) => `https://www.youtube-nocookie.com/embed/${video.id}`;
export const videoSource = (video: VideoGuide) => `https://www.youtube.com/watch?v=${video.id}`;
