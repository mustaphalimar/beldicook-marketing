'use client'
import Image, { StaticImageData } from "next/image";
import React from "react";
import Team1 from "@/public/team/team-1.avif";
import Team2 from "@/public/team/team-2.avif";
import Team3 from "@/public/team/team-3.avif";
import Team4 from "@/public/team/team-4.avif";
import Team5 from "@/public/team/team-5.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: StaticImageData | string;
}

const teamMembers: (TeamMember | undefined)[] = [
  {
    id: 0,
    name: "Kenji Sato",
    role: "Executive Chef",
    imageUrl: Team3,
  },
  {
    id: 1,
    name: "Hiroshi Tanaka",
    role: "Head Chef",
    imageUrl: Team4,
  },
  {
    id: 2,
    name: "Steve Ben",
    role: "Chef",
    imageUrl: Team2,
  },
  {
    id: 3,
    name: "Patterson Johnson",
    role: "Chef",
    imageUrl: Team1,
  },
  ,
  {
    id: 4,
    name: "John Petterson",
    role: "Waiter",
    imageUrl: Team5,
  },
];

export default function Team() {
  return (
    <section id="Team" className="relative bg-neutral-900 py-section team-section">
      <div id="staff" className="absolute -top-20"></div>
      <div className="container">
        <div>
          <h2 className="mb-8 text-center text-neutral-200 heading-second">
            Our Team
          </h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="!pb-16"
              breakpoints={{
                319: {
                  slidesPerView: 1,
                },
                639: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                1023: {
                  slidesPerView: 3,
                },
                1535: {
                  slidesPerView: 4,
                },
              }}
            >
              {teamMembers.map(({ id, name, imageUrl, role }: any) => (
                <SwiperSlide key={id}>
                  <section
                    className="flex flex-col items-center justify-center w-full max-w-full gap-2 text-center lg:max-w-xs aspect-square"
                  >
                    <Image
                      width={320}
                      height={320}
                      className="object-cover object-center w-full h-full mx-auto rounded-lg"
                      src={imageUrl}
                      alt={name}
                    />
                    <div className="w-2/6 mt-2 sm:w-full">
                      <h3 className="text-lg font-medium text-neutral-100">
                        {name}
                      </h3>
                      <span className="mt-1 text-neutral-400">{role}</span>
                    </div>
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
