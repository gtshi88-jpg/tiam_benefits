import { about } from "@/lib/copy";

export function AboutSection() {
  return (
    <section
      id="cost-comparison"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="about-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
          {about.title}
        </h2>
        <p className="mt-2 text-lg font-bold text-gray-800">{about.subTitle}</p>
        <p className="mt-6 leading-relaxed text-gray-700 md:text-lg">
          {about.description}
        </p>
        <p className="mt-6 leading-relaxed text-gray-700">{about.subDescription}</p>
        <ul className="mt-8 space-y-3" role="list">
          {about.challenges.map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
