"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import bg from "@/public/food/pastilla.jpg";
import bg2 from "@/public/food/pastilla-2.jpg";
import Link from "next/link";
import LogoSVG from "../svg/LogoSVG";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import SocialLink from "../ui/SocialLink";
import Animated from "./Animated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded, animationControls]);

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section
      id="Hero"
      className="relative w-full h-screen bg-right bg-no-repeat bg-cover bg-neutral-900"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 z-10 w-full h-full",
          isMobile
            ? "bg-gradient-to-r from-neutral-900 to-neutral-900/40"
            : "bg-gradient-to-r from-neutral-900"
        )}
      ></div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        {(!isMobile || isMobile === undefined) && (
          <Image
            className="absolute top-0 left-0 object-cover w-full transition z-1"
            src={bg}
            fill
            onLoad={() => setLoaded(true)}
            priority
            placeholder="blur"
            alt="Lorem ipsum dolor"
          />
        )}
        {(isMobile || isMobile === undefined) && (
          <Image
            className="absolute top-0 left-0 object-cover object-left w-full transition z-1"
            src={bg2}
            fill
            onLoad={() => setLoaded(true)}
            priority
            alt="Lorem ipsum dolor"
          />
        )}
      </motion.div>
      <div className="container z-10 w-full h-full mx-auto">
        <div className="grid w-full h-full max-w-full mx-auto md:grid-cols-2">
          <div className="z-10 flex flex-col self-center justify-between h-full max-w-xs py-8 sm:max-w-sm md:max-w-xl">
            <div></div>
            <div>
              <Animated
                type="spring"
                delay={1.0}
                duration={0.8}
                variant={"top-sm"}
              >
                {/* <LogoSVG width={150} height={150} /> */}
                <div className="bg-white w-[120px] h-[120px] rounded-full my-2">
                  <Image
                    src="/logos/beldi_cook_blue.png"
                    width={120}
                    height={120}
                    alt="beldi_cook_blue"
                  />
                </div>
              </Animated>
              <Animated
                as="h1"
                delay={0.4}
                variant={"top-sm"}
                className="mb-4 heading-first text-neutral-200"
              >
                Your <span className="text-primary-500">#Hunger</span>
                <br />
                is
                <span className="text-yellow-400"> #under </span>
                control
              </Animated>
              <Animated as="p" delay={0.6} variant="top-sm">
                Embarquez pour un voyage culinaire au cœur du Maroc avec nos
                authentiques plats beldi. Savourez les fines couches de la
                Pastilla, la douceur réconfortante de la Seffa, le croustillant
                doré des Briouates et les saveurs réchauffantes des soupes
                marocaines traditionnelles. Chaque bouchée est un hommage aux
                recettes ancestrales et à l&apos;essence de l&apos;hospitalité
                marocaine.
              </Animated>
              <Animated delay={0.9} className="flex flex-row gap-8 mt-8">
                <Link href="/menu#menu">
                  <Button variant="primary">Explorer le menu</Button>
                </Link>
                {/* <Button variant="outlined">Secondary</Button> */}
              </Animated>
            </div>
            <div className="flex flex-row items-center gap-8 left-40 bottom-20">
              <Animated
                type="spring"
                delay={1.35}
                duration={0.5}
                variant="top-sm"
              >
                <SocialLink
                  variant="instagram"
                  url="https://www.instagram.com/beldicook.agadir/"
                />
              </Animated>

              <Animated
                variant="left"
                delay={1.4}
                className="w-80 h-[1px] bg-neutral-500"
              ></Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
