import React from "react";

type Props = {
  price: string;
  title: string;
  description: string;
  arabTitle: string;
  arabDescription: string;
};

export default function MenuItem({
  price,
  title,
  description,
  arabTitle,
  arabDescription,
}: Props) {
  return (
    <div className="flex items-center justify-between w-full gap-16 py-8 border-b text-neutral-900 border-b-neutral-300">
      <div className="basis-[60%]">
        <h3 className="mb-2 lg:text-xl font-medium">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <p className="basis-[33%]">
        <span className="self-center lg:text-xl font-medium">{price}</span>
      </p>
      <div className="basis-[33%] font-cairo" dir="rtl">
        <h3 className="mb-2 text-xl font-medium ">{arabTitle}</h3>
        <p className="text-sm">{arabDescription}</p>
      </div>
    </div>
  );
}
