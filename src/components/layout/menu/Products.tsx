"use client";
import React from "react";
import Product from "../../modules/Product/Product";
import PastillaImg from "@/public/food/pastilla-2.jpg";
import BriouateImg from "@/public/food/briouate-1.jpg";
import SefaImg from "@/public/food/sefa.jpg";
import CigareImg from "@/public/food/cigare.jpg";
import ScrollAnimated from "../ScrollAnimated";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";

const products = [
  {
    id: 1,
    price: "42",
    category: "pastilla",
    imgScr: PastillaImg,
    title: "Pastilla",
    description: "Poulet/Poisson - Chicken/Fish",
  },
  {
    id: 2,
    price: "06 - 15",
    category: "briouate",
    imgScr: BriouateImg,
    title: "Briouate",
    description: "Poulet/Poisson - Chicken/Fish, viande hachée - minced meat",
  },
  {
    id: 3,
    price: 20,
    category: "sefa",
    imgScr: SefaImg,
    title: "Sefa",
    description: "",
  },
  {
    id: 4,
    price: "15 - 17",
    category: "cigare",
    imgScr: CigareImg,
    title: "Cigare",
    description: "Poulet/Poisson - Chicken/Fish",
  },
];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Products({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="Products"
      className={clsx(
        "bg-neutral-900 featured-section",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <ScrollAnimated className="container container--sm">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-center heading-second text-neutral-200">
            <span className="relative z-10">Featured</span>
          </h2>
          <div className="flex items-center justify-center w-full">
            <svg
              className="self-center"
              width="150"
              height="15"
              viewBox="0 0 230 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.21704 1.23157L29.617 21.2316L57.9171 1.23157L86.317 21.2316L114.717 1.23157L143.017 21.2316L171.417 1.23157L199.817 21.2316L228.217 1.23157"
                stroke="#f00"
                className="stroke-yellow-400"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <section className="mt-8 space-y-8 lg:mt-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
            >
              {products.map(({ id, price, imgScr, title, description }) => {
                return (
                  <SwiperSlide key={id}>
                    <Product
                      price={price}
                      imgSrc={imgScr}
                      title={title}
                      description={description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </div>
      </ScrollAnimated>
    </section>
  );
}
