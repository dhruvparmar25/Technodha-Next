import Image from "next/image";

export default function CommonTechSection({
  illustration,
  eyebrow,
  heading,
  description,
  items = [],
  reverse = false,
}) {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-6 lg:py-16">
      <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
        {/* Illustration */}
     {/* Illustration */}
<div
  className={`p-5 flex justify-center overflow-hidden
  animate-[pulseScale_4s_ease-in-out_infinite]
  transform-gpu will-change-transform
  ${reverse ? "lg:order-2" : ""}`}
>
  <Image
    src={illustration}
    alt=""
    priority
    className="
      w-[220px]
      sm:w-[280px]
      md:w-[340px]
      lg:w-[400px]
      xl:w-[460px]
      h-auto
    "
  />
</div>


        {/* Content */}
        <div className={`${reverse ? "lg:order-1" : ""}`}>
          {eyebrow && <div className="section-title">{eyebrow}</div>}

          {heading}

          {description && <p className="text-support">{description}</p>}

     
        </div>
      </div>
    </section>
  );
}
