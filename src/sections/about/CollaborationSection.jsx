"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Arcticons from "@/assets/images/sections/about/collaboration/arcticons-icon.png";
import Communication from "@/assets/images/sections/about/collaboration/communication-icon.png";
import Handshake from "@/assets/images/sections/about/collaboration/handshake-icon.png";
import ImageOne from "@/assets/images/sections/about/collaboration/image-one.png";
import ImageTwo from "@/assets/images/sections/about/collaboration/image-two.png";
import ImageOneAlt from "@/assets/images/sections/about/collaboration/image-one-alt.jpg";
import ImageTwoAlt from "@/assets/images/sections/about/collaboration/image-two-alt.jpg";

const features = [
  {
    title: "Transparent updates",
    desc: "Clear progress at every step. No surprises—just smooth communication.",
    icon: Communication,
  },
  {
    title: "Flexible engagement",
    desc: "From MVP to long-term support, we grow with your business.",
    icon: Handshake,
  },
  {
    title: "Quality mindset",
    desc: "We don’t rush—we craft clean work that stands strong.",
    icon: Arcticons,
  },
];

export default function CollaborationSection() {
  const [swap, setSwap] = useState(false);

  // swap images every loop middle
  useEffect(() => {
    const interval = setInterval(() => {
      setSwap((prev) => !prev);
    }, 4000); // must match animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[383px] px-6 xl:px-30 py-[44px] gap-10 flex flex-col md:flex-row items-center md:items-start overflow-hidden">
      {/* LEFT */}
      <div className="w-full lg:w-1/2">
        <div className="section-title">HOW WE COLLABORATE</div>

        <div className="heading-primary">
          A <span className="italic text-(--light-color-primary)">smooth</span>{" "}
          experience for your{" "}
          <span className="italic text-(--light-color-secondary)">team</span>
        </div>

        <div className="mt-8">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 items-start mt-6">
              <Image src={item.icon} alt={item.title} width={24} height={24} />

              <div>
                <h4 className="text-[14px] font-medium text-[#1A1A1F]">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#5F5F6B]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT (animated) */}
      <div className="w-full lg:w-1/2 relative overflow-hidden h-[260px]">

        {/* BIG IMAGE */}
        <motion.div
          animate={{
            top: ["0%", "40%", "0%"],
            right: ["0%", "40%", "0%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          <Image
            src={swap ? ImageOneAlt : ImageOne}
            alt=""
            className="rounded-2xl object-cover w-[483px] h-[207px]"
          />
        </motion.div>

        {/* SMALL IMAGE */}
        <motion.div
          animate={{
            bottom: ["0%", "40%", "0%"],
            left: ["0%", "40%", "0%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute hidden md:block"
        >
          <Image
            src={swap ? ImageTwoAlt : ImageTwo}
            alt=""
            className="rounded-xl shadow-lg w-[260px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
