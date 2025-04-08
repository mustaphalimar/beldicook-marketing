import Image from "next/image";
import Image1 from "@/public/about/about-1.avif";
import Image2 from "@/public/about/about-2.jpg";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";

export default function About() {
  return (
    <>
      <section id="About" className="bg-light-ivory py-section">
        <ScrollAnimated variant="left" className="container container--sm">
          <div className="flex flex-col items-center gap-16 md:grid md:grid-cols-2">
            <ScrollAnimated
              variant="right"
              className="font-light text-neutral-800 sm:text-lg"
            >
              <h2 className="relative mb-4 heading-second text-neutral-900">
                <span className="relative z-10">À propos de nous</span>
                {/* <span className="absolute -left-2 -bottom-4 z-1">
                  <BrushSVG width={200} height={50} />
                </span> */}
              </h2>

              <p className="mb-2 text-lg font-bold">
                Un voyage de goût et de tradition.
              </p>
              <p className="text-base">
                Beldi Cook est un lieu dédié à la véritable cuisine marocaine
                depuis maintenant dix ans. Tout a commencé avec une passion pour
                les saveurs authentiques du beldi et l&apos;envie de les
                partager avec le plus grand nombre. Nos chefs, reconnus pour
                leur savoir-faire minutieux et leur profond respect des
                traditions, préparent des plats qui reflètent pleinement
                l&apos;âme du patrimoine culinaire marocain.
              </p>
              <div className="flex flex-row gap-4 mt-6">
                <Link href="/about">
                  <Button variant="primary">Apprendre plus</Button>
                </Link>
                {/* <Link href="/about#staff">
                  <Button variant="outlined">Our Staff</Button>
                </Link> */}
              </div>
            </ScrollAnimated>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full mb-8 rounded-lg">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={
                    "https://images.unsplash.com/photo-1564632302631-c3670e71f579?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="Chef working on a dish"
                />
              </div>
              <div className="relative w-full mt-4 rounded-lg lg:mt-10">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={
                    "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </section>
    </>
  );
}
