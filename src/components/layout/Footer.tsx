import Link from "next/link";
import React from "react";
import LogoSVG from "../svg/LogoSVG";
import Image from "next/image";

const links = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "Menu", path: "/menu" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer id="Footer" className="py-6 bg-neutral-900">
      <div className="container container--sm">
        <div className="max-w-screen-xl mx-auto text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-2xl font-semibold text-neutral-100"
          >
            <div className="bg-white w-[50px] h-[50px] rounded-full my-2">
              <Image
                src="/logos/beldi_cook_blue.png"
                width={50}
                height={50}
                alt="beldi_cook_blue"
              />
            </div>
            <span className="flex gap-1">
              <span className="text-white font-brush">Beldi</span>
              <span className="text-primary-500 font-brush">Cook</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-neutral-900 dark:text-white">
            {links.map(({ id, title, path }) => {
              return (
                <Link key={id} className="hover:underline" href={path}>
                  {title}
                </Link>
              );
            })}
          </div>
          {/* <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
            Created by{" "}
            <Link
              className="hover:underline"
              href={"https://github.com/brozinsky"}
            >
              brozinsky
            </Link>
            {" "}© 2024 All Rights Reserved.
          </span> */}
        </div>
      </div>
    </footer>
  );
}
