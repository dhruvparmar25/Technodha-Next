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
    <section className="px-6 xl:px-30 py-16">
      <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
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
            className="max-w-115 max-h-102.5"
            priority
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
