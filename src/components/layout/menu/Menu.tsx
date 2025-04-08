"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";

const menu = {
  poulet_au_daghmira: [
    {
      id: 1,
      title: "1/4 De Poulet - 1/4 Chicken",
      price: "40 DHS",
      category: "poulet_au_daghmira",
      description: "",
    },
    {
      id: 2,
      title: "1/2 De Poulet - 1/2 Chicken",
      price: "75 DHS",
      category: "poulet_au_daghmira",
      description: "",
    },
    {
      id: 3,
      title: "Poulet Entier - Whole Chicken",
      price: "140 DHS",
      category: "poulet_au_daghmira",
      description: "",
    },
  ],
  pastilla: [
    {
      id: 1,
      title: "Pastilla au Poulet - Chicken Pastilla",
      price: "42 DHS",
      category: "pastilla",
      description: "",
    },
    {
      id: 2,
      price: "48 DHS",
      title: "Pastilla au Poisson - Fish Pastilla",
      category: "pastilla",
      description: "",
    },
  ],
  sefa: [
    {
      id: 1,
      title: "Sefa",
      price: "20 DHS",
      category: "sefa",
      description: "",
    },
  ],
  cigare: [
    {
      id: 1,
      title: "Cigare au Poulet - Chicken Cigare",
      price: "15 DHS",
      category: "cigare",
      description: "",
    },
    {
      id: 2,
      title: "Cigare au Poisson - Fish Cigare",
      price: "17 DHS",
      category: "cigare",
      description: "",
    },
  ],
  briouate: [
    {
      id: 1,
      title: "Poulet - Chicken",
      price: "13 DHS",
      category: "briouate",
      description: "Grand",
    },
    {
      id: 2,
      title: "Poisson - Fish",
      price: "15 DHS",
      category: "briouate",
      description: "Grand",
    },
    {
      id: 3,
      title: "Viande Hachée - Minced Meat",
      price: "08 DHS",
      category: "briouate",
      description: "Mini",
    },
    {
      id: 4,
      title: "Fromage - Cheese",
      price: "07 DHS",
      category: "briouate",
      description: "Mini",
    },
    {
      id: 5,
      title: "Legumes - Vegetables",
      price: "06 DHS",
      category: "briouate",
      description: "Mini",
    },
  ],
  boissons: [
    {
      id: 1,
      title: "Jus Naturel - Natural Juice",
      price: "12 DHS",
      category: "boissons",
      description: "BETTERAVE, CAROTTE, ORANGE, CONCOMBRE, CITRON",
    },
    {
      id: 2,
      title: "Boisson Gazeuses - Soft Drink",
      price: "08 DHS",
      category: "boissons",
      description: "Grand",
    },
    {
      id: 3,
      title: "Eau - Water 50 cl",
      price: "07 DHS",
      category: "boissons",
      description: "Mini",
    },
    {
      id: 4,
      title: "Eau - Water 30 cl",
      price: "04 DHS",
      category: "boissons",
      description: "Mini",
    },
  ],
  soupe_marocaine: [
    {
      id: 1,
      title: "Harira",
      price: "13 DHS",
      category: "soupe_marocaine",
      description: "Datte - Oeuf - Chebakia",
    },
  ],
};

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const { tab, setTab } = useMenuTabsStore();

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Notre Menu</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.poulet_au_daghmira?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 1 &&
          menu.pastilla?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 2 &&
          menu.sefa?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 3 &&
          menu.cigare?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 4 &&
          menu.briouate?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 5 &&
          menu.boissons?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 6 &&
          menu.soupe_marocaine?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
      </div>
    </section>
  );
}
