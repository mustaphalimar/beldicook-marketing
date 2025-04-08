import Image from "next/image";
import Image2 from "@/public/food/pastilla.jpg";
import Image6 from "@/public/food/sefa-2.jpg";

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
                Notre
                <br />
                Histoire
              </h2>
              <div className="space-y-4 text-neutral-600 ">
                <p>
                  Notre aventure est née d&apos;une ambition simple mais
                  profonde : créer un lieu dédié aux amoureux de la cuisine
                  marocaine beldi. C&apos;est de cette passion et de cette
                  volonté qu&apos;est né Beldi Cook, devenu au fil du temps une
                  destination prisée pour celles et ceux en quête de saveurs
                  marocaines authentiques.
                </p>

                <p>
                  Au fil du temps, Beldi Cook est passé d&apos;un petit
                  établissement familial à une véritable référence au sein de la
                  communauté. Chaque plat que nous servons porte l&apos;héritage
                  de nos débuts modestes — préparé avec soin, imprégné
                  d&apos;histoire et toujours accompagné d&apos;un sourire
                  chaleureux.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                À propos de nous
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Nos chefs, véritables maîtres dans leur art, marient avec
                  précision les techniques traditionnelles à une touche de
                  modernité pour vous offrir une carte à la fois authentique et
                  inventive. Des couleurs envoûtantes de nos pastillas aux
                  arômes délicats de nos soupes beldi, chaque ingrédient est
                  soigneusement sélectionné, chaque recette est héritée du
                  temps, et chaque plat rend hommage à l&apos;âme de la cuisine
                  marocaine.
                </p>
                <p>
                  Nous vous invitons à entrer dans notre univers, à découvrir la
                  richesse de la culture marocaine et à savourer une aventure
                  culinaire empreinte de tradition et de passion. Bienvenue chez
                  Beldi Cook, où chaque repas est un voyage, et chaque voyage
                  une histoire qui ne demande qu&apos;à être racontée.
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
