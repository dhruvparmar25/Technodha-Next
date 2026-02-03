"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";

import Laptop from "@/assets/images/sections/home/hero/laptop-main.png";
import LaptopTop from "@/assets/images/sections/home/hero/laptop-top.png";
import LaptopBottom from "@/assets/images/sections/home/hero/laptop-bottom.png";

function HeroSection() {
    const heroImageRef = useRef(null);
    const topRef = useRef(null);
    const centerRef = useRef(null);
    const bottomRef = useRef(null);

    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const buttonRef = useRef(null);

    /* ================= TEXT ANIMATION ================= */
    useEffect(() => {
        const tlText = gsap.timeline();

        tlText.fromTo(
            headingRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, ease: "power4.out" }
        );

        tlText.fromTo(
            paraRef.current,
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
            "-=1.2"
        );

        tlText.fromTo(
            buttonRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" },
            "-=1.1"
        );
    }, []);

    /* ================= IMAGE ANIMATION ================= */
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: "(max-width: 639px)",
                isTablet: "(min-width: 640px) and (max-width: 1023px)",
                isDesktop: "(min-width: 1024px)",
            },
            (context) => {
                const { isMobile, isTablet } = context.conditions;

                const topMove = isMobile
  ? { x: 0, y: -110 }          // straight up
  : isTablet
    ? { x: 80, y: -130 }
    : { x: 180, y: -220 };

const bottomMove = isMobile
  ? { x: 0, y: 70 }          // straight down
  : isTablet
    ? { x: -150, y: 70 }
    : { x: -255, y: 120 };


                const tlImg = gsap.timeline({
                    repeat: -1,
                    repeatDelay: 1.2,
                    defaults: { duration: 1.2, ease: "back.out(1.6)" },
                });

                tlImg.add("topMove");

                tlImg.fromTo(
                    topRef.current,
                    { x: 0, y: 0, zIndex: 0 },
                    { ...topMove, zIndex: 20 },
                    "topMove"
                );

                tlImg
                    .to(centerRef.current, { y: -6, duration: 0.25 }, "topMove")
                    .to(centerRef.current, { y: 0, duration: 0.35 });

                tlImg.add("bottomMove");

                tlImg.fromTo(
                    bottomRef.current,
                    { x: 0, y: 0, zIndex: 0 },
                    { ...bottomMove, zIndex: 20 },
                    "bottomMove"
                );

                tlImg
                    .to(centerRef.current, { y: -6, duration: 0.25 }, "bottomMove")
                    .to(centerRef.current, { y: 0, duration: 0.35 });

                tlImg.add("reset");

                tlImg.to(
                    [topRef.current, bottomRef.current],
                    { x: 0, y: 0, zIndex: 0, ease: "power3.inOut" },
                    "reset"
                );

                return () => tlImg.kill();
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <section
            className="relative w-full min-h-screen bg-bg  "
            style={{
                backgroundImage: "url('/background.png')",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-[1220px] px-[15px] m-auto min-h-screen flex flex-col md:flex-row items-center justify-evenly sm:justify-around lg:justify-between lg:gap-12">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 text-left sm:mt-5 ">
                    <h1
                        ref={headingRef}
                        className="lg:font-light lg:italic lg:text-[50px] lg:leading-14 lg:tracking-[0em]"
                    >
                        <span className="mr-3 inline-block whitespace-nowrap text-[28px] leading-10 sm:text-[34px] sm:leading-11 lg:text-[50px] lg:leading-14 lg:font-light lg:italic lg:tracking-[0em]">
                            Scalable
                        </span>

                        <span className="mr-3 inline-block whitespace-nowrap text-[26px] sm:text-[32px] lg:font-medium lg:text-[50px] lg:leading-14 lg:tracking-[0em]">
                            by
                        </span>

                        <span className="mr-3 inline-block whitespace-nowrap text-[24px] sm:text-[30px] lg:font-semibold lg:text-[50px] lg:leading-14 lg:tracking-[0em] text-primary">
                            Design.
                        </span>

                        <br />

                        <span className="mr-3 inline-block whitespace-nowrap text-[24px] sm:text-[30px] lg:font-medium lg:text-[45px] lg:leading-14 lg:tracking-[0em]">
                            Digital
                        </span>

                        <span className="mr-3 inline-block whitespace-nowrap text-[26px] sm:text-[32px] lg:font-medium lg:text-[50px] lg:leading-14 lg:tracking-[0em]">
                            by
                        </span>

                        <span className="mr-3 inline-block whitespace-nowrap text-[26px] sm:text-[32px] lg:font-medium lg:italic lg:text-[50px] lg:leading-14 lg:tracking-[0em]">
                            Nature.
                        </span>
                    </h1>

                    <p
                        ref={paraRef}
                        className="mt-4  text-sm  sm:text-base lg:font-medium lg:text-[14px] lg:leading-7 lg:tracking-[0em] text-text-secondary  lg:mx-0 lg:w-126 sm:w-100  lg:px-0"
                    >
                        We build scalable digital solutions that help businesses move faster
                        and smarter.
                    </p>

                    <div ref={buttonRef} className="mt-6 flex  justify-start">
                        <GradientButton text="Let’s Build What’s Next" />
                    </div>
                </div>


                {/* RIGHT IMAGES */}
                <div
                    ref={heroImageRef}
                    className="w-full lg:w-1/2 relative flex justify-center"
                >
                    <div ref={topRef} className="absolute inset-0 flex items-center justify-center z-0">
                        <Image src={LaptopTop} alt="" className="w-40 sm:w-50 lg:w-60" />
                    </div>

                    <div ref={bottomRef} className="absolute inset-0 flex items-center justify-center z-0">
                        <Image src={LaptopBottom} alt="" className="w-40 sm:w-50 lg:w-64" />
                    </div>

                    {/* CENTER IMAGE (responsive control without changing classes) */}
                    <div ref={centerRef} className="relative z-10">
                        <Image
                            src={Laptop}
                            alt="Laptop"
                            className="w-65 sm:w-65 lg:w-116"
                            priority
                            sizes="
                (max-width: 639px) 240px,
                (max-width: 1023px) 260px,
                464px
              "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
