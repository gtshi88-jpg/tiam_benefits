import { quality } from "@/lib/copy";

export function QualitySection() {
  return (
    <section
      id="quality"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="quality-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="quality-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          Our Quality
        </h2>
        <p className="mt-4 text-lg font-bold text-gray-800">{quality.title}</p>
        <p className="mt-2 leading-relaxed text-gray-700">{quality.lead}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {quality.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-[var(--section-bg)] p-6 shadow-sm md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                {item.role}
              </p>
              <h3 className="mt-3 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
