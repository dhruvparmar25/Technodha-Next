"use client";

import Image from "next/image";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

import Arcticons from "@/assets/images/sections/about/collaboration/arcticons-icon.png";
import Communication from "@/assets/images/sections/about/collaboration/communication-icon.png";
import Handshake from "@/assets/images/sections/about/collaboration/handshake-icon.png";
import ImageOne from "@/assets/images/sections/about/collaboration/image-one.png";
import ImageTwo from "@/assets/images/sections/about/collaboration/image-two.png";
import ImageOneAlt from "@/assets/images/sections/about/collaboration/image-one-alt.jpg";
import ImageTwoAlt from "@/assets/images/sections/about/collaboration/image-two-alt.jpg";

/* -------------------------------------------------------------------------- */

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

const ANIMATION_DURATION = 16;
const SWAP_THRESHOLD = -40;
const SWAP_DELAY = 400;
const PULSE_DURATION = 1400;

/* -------------------------------------------------------------------------- */

export default function CollaborationSection() {
  const [swap, setSwap] = useState(false);
  const [centerPulse, setCenterPulse] = useState(false);

  const x = useMotionValue(0);
  const lastX = useRef(0);

  const triggerPulse = () => {
    setCenterPulse(true);
    setTimeout(() => setCenterPulse(false), PULSE_DURATION);
  };

  useMotionValueEvent(x, "change", (currentX) => {
    const prevX = lastX.current;

    if (prevX > currentX && currentX < SWAP_THRESHOLD && !swap) {
      triggerPulse();
      setTimeout(() => setSwap(true), SWAP_DELAY);
    }

    if (prevX < currentX && currentX > SWAP_THRESHOLD && swap) {
      triggerPulse();
      setTimeout(() => setSwap(false), SWAP_DELAY);
    }

    lastX.current = currentX;
  });

  return (
    <section className="min-h-96 px-6 xl:px-30 py-16 gap-10 flex flex-col md:flex-row items-center md:items-start overflow-hidden">
      {/* LEFT */}
      <div className="w-full lg:w-1/2">
        <div className="section-title">HOW WE COLLABORATE</div>

        <div className="heading-primary">
          A <span className="italic text-(--light-color-primary)">smooth</span>{" "}
          experience for your{" "}
          <span className="italic text-(--light-color-secondary)">team</span>
        </div>

        <div className="mt-8">
          {features.map((item) => (
            <div key={item.title} className="flex gap-2 items-start mt-6">
              <Image src={item.icon} alt={item.title} width={24} height={24} />

              <div>
                <h4 className="text-sm font-medium text-[#1A1A1F]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5F5F6B]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 relative overflow-hidden h-64 md:h-72">
        {/* BIG IMAGE */}
        <motion.div
          style={{ x }}
          animate={{
            x: [0, -95, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: ANIMATION_DURATION,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.5, 1],
          }}
          className="relative md:absolute md:top-0 md:right-0 w-full flex items-center justify-center"
        >
          <motion.div
            className="relative w-full md:w-auto"
            animate={{ opacity: centerPulse ? 0.6 : 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ opacity: swap ? 0 : 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={ImageOne}
                alt="Team collaborating in workspace"
                className="rounded-2xl object-cover w-full md:w-120 h-52"
                sizes="100vw"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{ opacity: swap ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={ImageOneAlt}
                alt="Alternate collaboration scene"
                className="rounded-2xl object-cover w-full md:w-120 h-52"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SMALL IMAGE (DESKTOP ONLY) */}
        <motion.div
          animate={{ x: [0, 300, 0], y: [0, -75, 0] }}
          transition={{
            duration: ANIMATION_DURATION,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.5, 1],
          }}
          className="absolute bottom-0 left-0 hidden md:block"
        >
          <motion.div
            className="relative"
            animate={{ opacity: centerPulse ? 0.6 : 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ opacity: swap ? 0 : 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={ImageTwo}
                alt="Team discussion"
                className="rounded-xl shadow-lg w-64"
                sizes="256px"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{ opacity: swap ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={ImageTwoAlt}
                alt="Alternate team discussion"
                className="rounded-xl shadow-lg w-64"
                sizes="256px"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
