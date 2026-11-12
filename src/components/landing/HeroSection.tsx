import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="overview" aria-labelledby="home-title" className="grid items-center gap-7 rounded-[2rem] border border-black/10 bg-[#fffaf0] p-5 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:p-10 dark:border-white/10 dark:bg-[#17110b]">
      <div>
        <p className="text-sm font-medium text-[#7d4a30] dark:text-[#e6b98b]">The independent Cowork guide</p>
        <h1 id="home-title" className="mt-3 max-w-[15ch] text-[clamp(2.25rem,5.7vw,4rem)] font-semibold leading-[1.07] tracking-[-0.04em]">
          How to open and use Claude Cowork
        </h1>
        <p className="mt-4 max-w-[53ch] text-base leading-relaxed text-black/75 sm:text-lg dark:text-white/75">
          Start a task in Claude with an eligible plan. Use Claude Desktop when the task needs local files. Our guides show you how to set up a first workflow and check what comes back.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/docs/setup" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f7d793] px-5 py-2.5 font-semibold text-[#231c18] hover:bg-[#edc575] focus-visible:outline-2 focus-visible:outline-offset-4">
            Follow the setup guide <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a href="https://claude.ai/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-current/25 px-5 py-2.5 font-semibold hover:border-current focus-visible:outline-2 focus-visible:outline-offset-4">
            Open Claude <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="overflow-hidden rounded-2xl border border-black/10 bg-[#fff3dd] dark:border-white/15 dark:bg-[#251b12]">
        <Image
          src="/docs/illustrations/how-it-works.webp"
          alt="A task brief and source files go into Cowork, and a person reviews the draft it produces."
          width={1200}
          height={800}
          sizes="(min-width: 1152px) 440px, (min-width: 1024px) 40vw, (min-width: 640px) 86vw, 86vw"
          preload
          className="h-auto w-full"
        />
        <figcaption className="border-t border-black/10 px-4 py-3 text-sm leading-relaxed text-[#5b4230] dark:border-white/15 dark:text-[#eed4ac]">
          Give Cowork a brief and approved sources. Review the deliverable before you use it.
        </figcaption>
      </figure>
    </section>
  );
}
