import { benefits } from "@/lib/copy";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="benefits-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {benefits.title}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-[var(--section-bg)] p-6 shadow-sm md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/20 text-lg font-bold text-[var(--primary-dark)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                {item.description}
              </p>
              {item.note && (
                <p className="mt-3 text-sm text-gray-500">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
