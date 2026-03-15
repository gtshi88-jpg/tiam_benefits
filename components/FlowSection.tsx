import { flow } from "@/lib/copy";

export function FlowSection() {
  return (
    <section
      id="flow"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="flow-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="flow-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {flow.title}
        </h2>
        <p className="mt-4 text-gray-700">{flow.lead}</p>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {flow.steps.map((step, i) => (
            <li key={i} className="relative flex flex-col items-center text-center">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
              {i < flow.steps.length - 1 && (
                <span
                  className="absolute left-[calc(50%+28px)] top-6 hidden h-0.5 w-[calc(100%-56px)] bg-[var(--primary)]/30 md:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
