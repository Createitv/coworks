import { ReactNode } from "react";

type BodyContent = string | ReactNode;

interface Section {
  heading: string;
  body: BodyContent[];
}

interface SimplePageProps {
  title: string;
  description: ReactNode;
  sections: Section[];
  cta?: ReactNode;
}

export function SimplePage({ title, description, sections, cta }: SimplePageProps) {
  return (
    <div className="min-h-screen bg-[#f7f7f0] text-[#0f0f0f] dark:bg-[#050505] dark:text-white">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
            Claude Cowork
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
          <div className="text-lg text-black/70 dark:text-white/70">{description}</div>
        </div>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 text-left dark:border-white/10 dark:bg-white/5"
            >
              <h2 className="text-2xl font-semibold text-[#0b0b0b] dark:text-white">{section.heading}</h2>
              <div className="mt-4 space-y-3 text-base text-black/70 dark:text-white/70">
                {section.body.map((content, idx) =>
                  typeof content === "string" ? (
                    <p key={idx}>{content}</p>
                  ) : (
                    <div key={idx} className="[&_a]:text-[#c28d39] [&_a]:underline">
                      {content}
                    </div>
                  )
                )}
              </div>
            </section>
          ))}
        </div>

        {cta && <div className="mt-10 rounded-3xl border border-dashed border-black/20 p-6 dark:border-white/20">{cta}</div>}
      </div>
    </div>
  );
}
