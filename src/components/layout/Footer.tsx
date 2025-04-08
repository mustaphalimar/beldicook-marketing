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
          <div className="flex  flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-white">
            {links.map(({ id, title, path }) => {
              return (
                <Link key={id} className="hover:underline " href={path}>
                  {title}
                </Link>
              );
            })}
          </div>

          <address className="flex justify-center items-center gap-4 lg:items-start lg:items-left lg:mt-8">
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <Link
                className="truncate text-neutral-400"
                href={"tel:+212684700065"}
              >
                +212 6 84700065
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <Link
                className="truncate w-fit text-neutral-400"
                href={"mailto:contact@beldicook.com"}
              >
                contact@beldicook.com
              </Link>
            </div>
          </address>

          {/* <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
            Created by{" "}
            <Link
              className="hover:underline"
              href={"https://github.com/brozinsky"}
            >
              brozinsky
            </Link>{" "}
            © 2024 All Rights Reserved.
          </span> */}
        </div>
      </div>
    </footer>
  );
}
