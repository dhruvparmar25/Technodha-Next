import React from "react";
import Image from "next/image";
import Eyeicon from "@/assets/images/sections/about/exist/eye-icon.png";
import Rocket from "@/assets/images/sections/about/exist/rocket-icon.png";
import Diamound from "@/assets/images/sections/about/exist/diamound-icon.png";

const cards = [
  {
    icon: Eyeicon,
    title: "Vision Ahead",
    desc: "To build digital experiences that help businesses grow smarter and faster.",
  },
  {
    icon: Rocket,
    title: "Mission in Action",
    desc: "We turn ideas into digital products with a strong team culture and modern tech",
  },
  {
    icon: Diamound,
    title: "Built on Strong Values",
    desc: "Quality-driven solutions that earn trust and create long-term impact.",
  },
];

function AboutExist() {
  return (
    <section className="px-4 sm:px-6 xl:px-[120px]">
      <div className="section-title mb-3 text-center md:text-left">
        ABOUT TECHNODHA
      </div>

      <div className="heading-primary text-center md:text-left">
        Driven by
        <span className="italic text-(--light-color-secondary) mx-2">purpose</span>,
        not hype
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-6 text-center mt-16 md:mt-24 mb-16 md:mb-[75px]">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white flex-1 pt-14 pb-8 px-4 sm:px-[15px] rounded-xl relative"
          >
            {/* Icon */}
            <div className="w-[70px] h-[70px] md:w-[87px] md:h-[87px] bg-(--light-color-border) rounded-full absolute left-1/2 md:left-6 -top-[35px] md:-top-[45px] -translate-x-1/2 md:translate-x-0 flex items-center justify-center p-3">
              <Image src={item.icon} alt={item.title} />
            </div>

            <h1 className="text-(--light-color-text-primary) text-[16px] md:text-[18px] font-semibold mb-2">
              {item.title}
            </h1>

            <p className="text-[13px] md:text-[14px] text-(--light-color-text-secondary)">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutExist;
