import { SectionEyebrow } from "@/components/services/SectionEyebrow";

const steps = [
  {
    title: "Understand",
    description:
      "Your business, audience, market, and how your brand is perceived today.",
  },
  {
    title: "Position",
    description:
      "What you should be known for, who you serve, and what sets you apart.",
  },
  {
    title: "Communicate",
    description:
      "What your brand says and how it says it, from key messages to tone of voice.",
  },
  {
    title: "Experience",
    description:
      "How people encounter your brand, online, in person, and through your service.",
  },
  {
    title: "Express",
    description:
      "A visual identity shaped by the strategy, from typography to colour and imagery.",
  },
  {
    title: "Systemize",
    description:
      "Guidelines, templates, and tools that keep the brand consistent as you grow.",
  },
];

export const Approach = () => {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-24 bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionEyebrow className="mb-4 block">How we work</SectionEyebrow>
            <h2
              id="approach-heading"
              className="font-heading mt-3 max-w-[14ch] text-3xl font-semibold leading-[1.2] tracking-tight text-balance text-slate-900 md:text-4xl xl:text-[2.75rem]"
            >
              Build the brand your business actually needs.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600 md:text-base">
              We start by understanding your business and how it is perceived.
              That guides what needs to change, from positioning and messaging to
              identity and the systems that keep it consistent.
            </p>
            <div className="mt-8 max-w-sm border-l-2 border-blue-accent pl-4 lg:mt-12">
              <p className="text-sm font-medium leading-6 text-slate-900">
                The scope follows the need.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Not every business needs every part.
              </p>
            </div>
          </div>

          <ol
            aria-label="The BE brand-building method"
            className="border-t border-dark-accent/15 lg:col-span-7"
          >
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[1.75rem_1fr] gap-x-3 border-b border-dark-accent/15 py-6 sm:grid-cols-[1.75rem_8.5rem_1fr] sm:gap-x-4 sm:py-7"
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-xs leading-5 font-medium text-slate-500 tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="col-start-2 mt-2 max-w-md text-sm leading-7 text-slate-600 sm:col-start-auto sm:mt-0">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
