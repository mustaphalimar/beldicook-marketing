"use client";
import Image from "next/image";
import Image1 from "@/public/food/insta-pastilla.jpg";
import Image2 from "@/public/bento/bento-2.jpg";
import HariraImg from "@/public/food/insta-harira.jpg";
import Image6 from "@/public/food/insta-poulet.jpg";
import OnigiriImg from "@/public/food/insta-briouate.jpg";
import MochiImg from "@/public/food/insta-sefa.jpg";
import RamenSVG from "@/public/bento/ramen.svg";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";
import ScrollAnimated from "./ScrollAnimated";
import { motion } from "framer-motion";
import CategoryTile from "../ui/CategoryTile";
import Link from "next/link";
import useMenuTabsStore from "../../stores/useMenuTabsStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Button from "../ui/Button";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const { setTab } = useMenuTabsStore();
  const isMobile = useMediaQuery(`(max-width: 1280px)`);

  return (
    <section
      id="Categories"
      className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimated
        className={clsx(
          "flex flex-col items-center",
          !isMobile && "container container--sm "
        )}
      >
        <div className="grid gap-2 sm:gap-6 md:gap-2 lg:gap-6 bento">
          <CategoryTile
            tabId={1}
            title={"Pastilla"}
            imgSrc={Image1}
            width={384}
            height={384}
          />
          <CategoryTile
            tabId={4}
            span={2}
            title={"Briouate"}
            imgSrc={OnigiriImg}
            width={384}
            height={400}
          />
          <CategoryTile
            tabId={0}
            title={"Poulet au Daghmira"}
            imgSrc={Image6}
            width={384}
            height={256}
          />
          <CategoryTile
            tabId={2}
            title={"Sefa"}
            imgSrc={MochiImg}
            width={384}
            height={256}
          />
          <CategoryTile
            tabId={6}
            title={"Harira"}
            imgSrc={HariraImg}
            width={384}
            height={256}
          />
          {/* <div className="relative w-full h-full bg-primary-500 text-neutral-100">
            <div className="flex flex-col justify-center h-full mx-auto text-base font-medium sm:text-lg w-fit sm:mx-0 sm:px-4 lg:px-8 xl:px-16 sm:gap-2 md:gap-0 xl:gap-2 xl:text-2xl">
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(0)}>Poulet au Daghmira</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(1)}>Pastilla</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(2)}>Briouate</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(3)}>Cigare</span>
              </Link>
            </div>
            <Image
              className="hidden sm:block w-3/4 h-3/4 lg:w-[180px] lg:h-[180px] xl:w-[250px] lg:h-[250px] absolute right-2 bottom-0 md:right-12 md:bottom-0"
              width={250}
              height={250}
              src={RamenSVG}
              loading="lazy"
              alt=""
            />
          </div> */}
        </div>
        <Link href="/menu#menu" className="mt-6 ">
          <Button
            variant="outlined"
            className="hover:bg-yellow-400 hover:text-black"
          >
            Voir le menu
          </Button>
        </Link>
      </ScrollAnimated>
    </section>
  );
}
