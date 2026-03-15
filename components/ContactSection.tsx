import { contactSection, contact, nav } from "@/lib/copy";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2
          id="contact-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {contactSection.title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-gray-500">
              {contactSection.salaryUp.label}
            </p>
            <p className="mt-2 text-gray-700">{contactSection.salaryUp.company}</p>
            <p className="mt-1 text-gray-700">{contactSection.salaryUp.employee}</p>
          </div>
          <div className="relative rounded-xl border-2 border-[var(--primary)] bg-white p-6 shadow-sm">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-3 py-0.5 text-xs font-bold text-white">
              {contactSection.benefit.recommend}
            </span>
            <p className="text-sm font-bold text-gray-500">
              {contactSection.benefit.label}
            </p>
            <p className="mt-2 text-gray-700">{contactSection.benefit.company}</p>
            <p className="mt-1 font-bold text-[var(--primary-dark)]">
              {contactSection.benefit.employee}
            </p>
          </div>
        </div>
        <p className="mt-8 leading-relaxed text-gray-700">
          {contactSection.cta}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contact.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs rounded-full bg-[var(--primary)] px-8 py-4 text-center font-bold text-white transition hover:opacity-90 sm:w-auto"
          >
            {nav.ctaIntroduce}
          </a>
          <a
            href={`tel:${contact.tel}`}
            className="w-full max-w-xs rounded-full border-2 border-[var(--primary-dark)] bg-white px-8 py-4 text-center font-bold text-[var(--primary-dark)] transition hover:bg-[var(--primary-dark)] hover:text-white sm:w-auto"
          >
            {nav.ctaContact}（{contact.telDisplay}）
          </a>
        </div>
      </div>
    </section>
  );
}
