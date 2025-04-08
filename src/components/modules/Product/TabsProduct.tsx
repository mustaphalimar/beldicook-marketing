import clsx from "clsx";
import React from "react";

interface Props {
  tab: number;
  setTab: (tab: number) => void;
}

const tabs = [
  { id: 0, title: "Poulet au Daghmira", value: 0 },
  { id: 1, title: "Pastilla", value: 1 },
  { id: 2, title: "Sefa", value: 2 },
  { id: 3, title: "Cigare", value: 3 },
  { id: 4, title: "Briouate", value: 4 },
  { id: 5, title: "Boissons", value: 5 },
  { id: 6, title: "Soupe Marocaine", value: 6 },
];

export default function TabsProduct({ tab, setTab }: Props) {
  return (
    <div className="flex flex-col gap-4 py-4 mt-4 overflow-x-auto overflow-y-hidden md:flex-row md:justify-center border-neutral-700">
      {tabs.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => setTab(item.value)}
            className={clsx(
              "h-12 px-6 py-2 -mb-px text-sm text-center transition bg-transparent border-b-2  sm:text-base whitespace-nowrap focus:outline-none",
              item.value === tab
                ? "text-primary-500 border-primary-500"
                : "text-neutral-500 hover:text-neutral-900 border-neutral-500 hover:border-neutral-900"
            )}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}
