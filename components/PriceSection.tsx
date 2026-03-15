import { price, contact, nav } from "@/lib/copy";

export function PriceSection() {
  return (
    <section
      id="price"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="price-heading"
    >
      <div className="mx-auto max-w-2xl px-4 md:px-6 text-center">
        <h2
          id="price-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {price.title}
        </h2>
        <p className="mt-8 text-sm font-bold text-gray-600">{price.monthlyLabel}</p>
        <p className="mt-2 text-4xl font-bold text-[var(--primary-dark)] md:text-5xl">
          {price.monthlyValue}
          <span className="ml-1 text-2xl font-normal text-gray-700 md:text-3xl">
            {price.monthlyUnit}
          </span>
        </p>
        <ul className="mt-8 space-y-3 text-left">
          {price.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-gray-700"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
              {point}
            </li>
          ))}
        </ul>
        <a
          href={contact.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block w-full max-w-sm rounded-full bg-[var(--primary)] px-8 py-4 text-center font-bold text-white transition hover:opacity-90"
        >
          {nav.ctaIntroduce}
        </a>
      </div>
    </section>
  );
}
