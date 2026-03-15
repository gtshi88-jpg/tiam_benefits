import Image from "next/image";
import { director } from "@/lib/copy";

export function DirectorSection() {
  return (
    <section
      id="director"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="director-heading"
    >
      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <div className="pr-0 md:pr-52">
          <h2
            id="director-heading"
            className="text-2xl font-bold text-gray-900 md:text-3xl"
          >
            Director Message
          </h2>
          <p className="mt-6 text-lg font-bold text-gray-800 md:text-xl">
            {director.title}
          </p>
          <p className="mt-6 leading-relaxed text-gray-700">{director.message1}</p>
          <p className="mt-6 leading-relaxed text-gray-700">{director.message2}</p>
          <div className="mt-10 flex flex-col items-start gap-2 border-t border-gray-200 pt-10">
            <p className="font-bold text-gray-900">{director.name}</p>
            <p className="text-sm text-gray-600">{director.role}</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600" role="list">
              {director.credentials.map((c) => (
                <li key={c}>・{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 院長写真（右下） */}
        <div className="mt-8 flex justify-end md:absolute md:bottom-6 md:right-6 md:mt-0 lg:right-8">
          <div className="relative h-56 w-44 shrink-0 overflow-hidden rounded-lg shadow-lg md:h-64 md:w-48">
            <Image
              src="/images/dr.taniguchi_LP_P.jpg"
              alt={`${director.name} 院長`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 176px, 192px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
