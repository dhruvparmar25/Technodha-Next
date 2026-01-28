import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";
import HeroBg from "@/assets/images/sections/services/web-bg.jpg";


export default function CommonHeroSection({
  theme = "light",

  illustration,
  sectionTitle,
  heading,
  description,
  buttonText,
}) {
  return (
    <section
      data-theme={theme}
      className="relative overflow-hidden bg-black"
    >
      
        <Image
          src={HeroBg}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
      

      {/* Overlay */}
      <div className="absolute inset-0" />

      <div className="relative px-6 xl:px-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-[134px]">

          {/* LEFT */}
          <div>
            {sectionTitle && (
              <div className="section-title">
                {sectionTitle}
              </div>
            )}

            {heading}

            {description && (
              <p className="text-support text-[#CFCFD6]!">
                {description}
              </p>
            )}

            {buttonText && (
              <GradientButton text={buttonText} className="mt-6" />
            )}
          </div>

          {/* RIGHT */}
          {illustration && (
            <div className="flex justify-center lg:justify-end">
              <Image
                src={illustration}
                alt="Hero illustration"
                priority
                className="w-[260px] sm:w-[320px] lg:w-[420px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
