import Image from "next/image";
import Image2 from "@/public/bento/bento-2.jpg";
import Image6 from "@/public/bento/bento-6.jpg";

export default function AboutExtended() {
  return (
    <>
      <section id="AboutExtended" className="bg-light-ivory py-section">
        <div className="container container--xs">
          <div className="grid gap-4 md:grid-cols-2">
            <Image
              className="self-end w-full h-fit justify-self-end rounded-custom--lg"
              width={384}
              height={256}
              src={Image6}
              loading="lazy"
              alt=""
            />

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Our
                <br />
                History
              </h2>
              <div className="space-y-4 text-neutral-600 ">
                <p>
                  Over ten years ago, our journey began with a simple yet
                  profound ambition: to craft a haven for lovers of Japanese
                  cuisine. It was from this passion and dedication that our
                  restaurant was born, quickly growing from a dream into a
                  beloved destination for those seeking a genuine taste of
                  Japan.
                </p>

                <p>
                  Over the years, Asian Food has grown from a small, family-run
                  eatery into a cornerstone of the community. Each dish we serve
                  carries the legacy of our humble beginnings - crafted with
                  care, seasoned with history, and served with a warm smile.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                About us
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Our chefs, masters of their craft, meticulously blend
                  traditional techniques with modern flair to bring you a menu
                  that&apos;s both authentic and innovative. From the vibrant colors
                  of our sushi to the aromatic broths of our ramen, each
                  ingredient is handpicked, each recipe is time-honored, and
                  each meal is a testament to the spirit of Japanese cuisine.
                </p>
                <p>
                  We invite you to step into our world, to explore the richness
                  of Japanese culture, and to savor a culinary adventure that&apos;s
                  been a decade in the making. Welcome to Asian Food,
                  where every meal is a journey, and every journey is a story
                  waiting to be told.
                </p>
              </div>
            </div>
            <Image
              className="self-start w-full h-fit justify-self-start rounded-custom--lg"
              width={384}
              height={256}
              src={Image2}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
