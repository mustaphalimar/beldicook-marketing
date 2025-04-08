"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";
import Image from "next/image";

const menu = {
  poulet_au_daghmira: [
    {
      id: 1,
      title: "1/4 De Poulet - 1/4 Chicken",
      price: "40 DHS",
      category: "poulet_au_daghmira",
      description: "",
      arabTitle: "دجاجة 1/4",
      arabDescription: "",
    },
    {
      id: 2,
      title: "1/2 De Poulet - 1/2 Chicken",
      price: "75 DHS",
      category: "poulet_au_daghmira",
      description: "",
      arabTitle: "دجاجة 1/2",
      arabDescription: "",
    },
    {
      id: 3,
      title: "Poulet Entier - Whole Chicken",
      price: "140 DHS",
      category: "poulet_au_daghmira",
      description: "",
      arabTitle: "دجاجة كاملة",
      arabDescription: "",
    },
  ],
  pastilla: [
    {
      id: 1,
      title: "Pastilla au Poulet - Chicken Pastilla",
      price: "42 DHS",
      category: "pastilla",
      description: "",
      arabTitle: "بسطيلة دجاج",
      arabDescription: "",
    },
    {
      id: 2,
      price: "48 DHS",
      title: "Pastilla au Poisson - Fish Pastilla",
      category: "pastilla",
      description: "",
      arabTitle: "بسطيلة سمك",
      arabDescription: "",
    },
  ],
  sefa: [
    {
      id: 1,
      title: "Sefa",
      price: "20 DHS",
      category: "sefa",
      description: "",
      arabTitle: "سفة",
      arabDescription: "",
    },
  ],
  cigare: [
    {
      id: 1,
      title: "Cigare au Poulet - Chicken Cigare",
      price: "15 DHS",
      category: "cigare",
      description: "",
      arabTitle: "سيجار دجاج",
      arabDescription: "",
    },
    {
      id: 2,
      title: "Cigare au Poisson - Fish Cigare",
      price: "17 DHS",
      category: "cigare",
      description: "",
      arabTitle: "سيجار سمك",
      arabDescription: "",
    },
  ],
  briouate: [
    {
      id: 1,
      title: "Poulet - Chicken",
      price: "13 DHS",
      category: "briouate",
      description: "Grand",
      arabTitle: "بريوات بالدجاج",
      arabDescription: "كبيرة",
    },
    {
      id: 2,
      title: "Poisson - Fish",
      price: "15 DHS",
      category: "briouate",
      description: "Grand",
      arabTitle: "بريوات بالسمك",
      arabDescription: "كبيرة",
    },
    {
      id: 3,
      title: "Viande Hachée - Minced Meat",
      price: "08 DHS",
      category: "briouate",
      description: "Mini",
      arabTitle: "بريوات بالكفتة",
      arabDescription: "صغيرة",
    },
    {
      id: 4,
      title: "Fromage - Cheese",
      price: "07 DHS",
      category: "briouate",
      description: "Mini",
      arabTitle: "بريوات بالجبن",
      arabDescription: "صغيرة",
    },
    {
      id: 5,
      title: "Legumes - Vegetables",
      price: "06 DHS",
      category: "briouate",
      description: "Mini",
      arabTitle: "بسطيلة بالخضر",
      arabDescription: "صغيرة",
    },
  ],
  boissons: [
    {
      id: 1,
      title: "Jus Naturel - Natural Juice",
      price: "12 DHS",
      category: "boissons",
      description: "BETTERAVE, CAROTTE, ORANGE, CONCOMBRE, CITRON",
      arabTitle: "عصير طبيعي",
      arabDescription: "باربا - جزر - برتقال - خيار - الحامض",
    },
    {
      id: 2,
      title: "Boisson Gazeuses - Soft Drink",
      price: "08 DHS",
      category: "boissons",
      description: "Grand",
      arabTitle: "مشروبات غازية",
      arabDescription: "",
    },
    {
      id: 3,
      title: "Eau - Water 50 cl",
      price: "07 DHS",
      category: "boissons",
      description: "Mini",
      arabTitle: "ماء 50 سل",
      arabDescription: "",
    },
    {
      id: 4,
      title: "Eau - Water 30 cl",
      price: "04 DHS",
      category: "boissons",
      description: "Mini",
      arabTitle: "ماء 30 سل",
      arabDescription: "",
    },
  ],
  soupe_marocaine: [
    {
      id: 1,
      title: "Harira",
      price: "13 DHS",
      category: "soupe_marocaine",
      description: "Datte - Oeuf - Chebakia",
      arabTitle: "حريرة",
      arabDescription: "تمر - بيض - شباكية",
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
        <div className="mx-auto flex items-center justify-center gap-4">
          <div className="w-[150px] h-[150px] flex flex-col items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/images/menu.png"
              width={200}
              height={200}
              className="object-cover rounded-full border border-black scale-125"
              alt="menu"
            />
          </div>
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Notre Menu</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.poulet_au_daghmira?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
        {tab == 1 &&
          menu.pastilla?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
        {tab == 2 &&
          menu.sefa?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
        {tab == 3 &&
          menu.cigare?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
        {tab == 4 &&
          menu.briouate?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
        {tab == 5 &&
          menu.boissons?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
        {tab == 6 &&
          menu.soupe_marocaine?.map(
            ({ id, price, title, description, arabTitle, arabDescription }) => (
              <MenuItem
                key={id}
                title={title}
                description={description}
                price={price}
                arabTitle={arabTitle}
                arabDescription={arabDescription}
              />
            )
          )}
      </div>
    </section>
  );
}
