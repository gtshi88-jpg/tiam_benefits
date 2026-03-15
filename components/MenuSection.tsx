import { menu } from "@/lib/copy";

export function MenuSection() {
  return (
    <section
      id="menu"
      className="scroll-mt-20 bg-[var(--section-bg)] py-16 md:py-24"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2
          id="menu-heading"
          className="text-2xl font-bold text-gray-900 md:text-3xl"
        >
          Treatment Menu
        </h2>
        <p className="mt-4 text-lg font-bold text-gray-800">{menu.title}</p>
        <p className="mt-2 leading-relaxed text-gray-700">{menu.lead}</p>
        <div className="mt-12 space-y-16">
          {menu.categories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                {cat.name}
              </h3>
              {"specialty" in cat && cat.specialty && (
                <p className="mt-4 rounded-lg bg-white p-4 text-gray-700 shadow-sm">
                  {cat.specialty}
                </p>
              )}
              <ul className="mt-6 grid gap-6 sm:grid-cols-2" role="list">
                {cat.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="rounded-xl bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      {"menuDetail" in item && item.menuDetail && (
                        <span className="text-xs text-gray-500">
                          MENU: {item.menuDetail}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
