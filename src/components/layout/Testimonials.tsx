import Image from "next/image";
import React from "react";
import CardTestimonial from "../modules/CardTestimonial";

const testimonials = [
  {
    id: 0,
    name: "Emily Johnson",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "It was an exquisite experience. The flavors were authentic and rich, truly capturing the essence of Asian cuisine. The staff was attentive and the ambiance, perfect. I can't wait to return",
  },
  {
    id: 1,
    name: "Jessica Lee",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "The cuisine was absolutely authentic, bursting with rich flavors. The attentive staff and cozy ambiance just added to the remarkable dining experience. Eagerly looking forward to my next visit!",
  },
  {
    id: 2,
    name: "Michael Smith",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "The meal was delightful, with each dish presenting genuine and well-crafted flavors that spoke to the heart of Asian culinary tradition. The service was thoughtful and efficient, complementing the comfortable and inviting ambiance. I'm definitely planning to come back.",
  },
];

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="bg-light-ivory py-section">
      <div className="container container--sm">
        <h2 className="mb-8 text-2xl font-semibold text-center capitalize font-brush lg:mb-12 text-neutral-800 lg:text-3xl">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map(({ id, content, name, avatarUrl }) => {
            return (
              <CardTestimonial
                key={id}
                content={content}
                name={name}
                avatarUrl={avatarUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
