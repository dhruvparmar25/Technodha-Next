import Image from "next/image";

// Assets
import HeroIllustration from "@/assets/images/sections/services/web-hero.png";
import GradientButton from "@/components/common/GradientButton";

export default function WebDevelopmentHero() {
  return (
    <section data-theme="light" className="relative overflow-hidden bg-[#000000] ">

      {/* Background Image */}
      {/* <Image
        src={HeroBg}
        alt=""
        fill
        priority
        className="object-cover"
      /> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      <div className="relative px-6 xl:px-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-[134px]  ">

          {/* Left */}
          <div className="">
            <div className="section-title ">
              WEB DEVELOPMENT
            </div>

<h1 className="heading-primary-dark text-[32px]!">
              <span className="italic text-primary">
                Web platforms
              </span>{" "}
              engineered for performance,{" "}
              <span className="italic text-secondary">
                scale
              </span>
              , and reliability
            </h1>

            <p className="text-support text-[#CFCFD6]!">
              We build secure and scalable websites and web applications with
              clean architecture, fast performance, and long-term maintainability.
            </p>
<GradientButton text={"Start a Project With Us"} className="mt-6"/>
           
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={HeroIllustration}
              alt="Web Development"
              priority
            />
          </div>

        </div>
      </div>

    </section>
  );
}
