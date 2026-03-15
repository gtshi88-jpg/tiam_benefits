import { reasons } from "@/lib/copy";

export function ReasonsSection() {
  return (
    <section
      id="reasons"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="reasons-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="reasons-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {reasons.title}
        </h2>
        <p className="mt-4 text-gray-700">{reasons.lead}</p>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.items.map((item, i) => (
            <li key={i} className="rounded-xl bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
