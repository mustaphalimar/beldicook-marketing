import Image from "next/image";
import React from "react";
import TabsProduct from "../../modules/Product/TabsProduct";
import Product from "../../modules/Product/Product";
import BrushSVG from "../../svg/BrushSVG";
import Ramen1 from "@/public/products/ramen/ramen-shoyu.avif";
import Ramen2 from "@/public/products/ramen/ramen-miso.avif";
import ZigzagSVG from "@/components/svg/ZigzagSVG";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";

const products = [
  {
    id: 1,
    price: 38,
    category: "ramen",
    imgScr: Ramen1,
    title: "Shoyu Ramen",
    description: "Soy sauce-based broth, chicken, nori, menma, scallions",
  },
  {
    id: 2,
    price: 42,
    category: "ramen",
    imgScr: Ramen1,
    title: "Tonkotsu  ramen",
    description:
      "Rich pork broth, pork belly, soft-boiled egg, bamboo shoots, green onions",
  },
  {
    id: 3,
    price: 44,
    category: "ramen",
    imgScr: Ramen2,
    title: "Miso Ramen",
    description:
      "Miso-based broth, ground pork, corn, butter, bean sprouts, chives",
  },
  {
    id: 4,
    price: 48,
    category: "ramen",
    imgScr: Ramen2,
    title: "Spicy Seafood Ramen",
    description: "Spicy broth, mixed seafood, mushrooms, bok choy, red ginger",
  },
];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function ProductsFeatured({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="ProductsFeatured"
      className={clsx("bg-neutral-900", paddingTop[pt], paddingBot[pb])}
    >
      <div className="container container--sm">
        <div className="mx-auto">
          <h1 className="relative mb-4 heading-second text-neutral-200">
            <span className="relative z-10">Featured</span>
          </h1>
          <ZigzagSVG />

          {/* TODO - change to slider */}
          <section className="mt-8 space-y-8 lg:mt-12">
            {products.map(({ id, price, imgScr, title, description }) => {
              return (
                <Product
                  key={id}
                  price={price}
                  imgSrc={imgScr}
                  title={title}
                  description={description}
                />
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}
