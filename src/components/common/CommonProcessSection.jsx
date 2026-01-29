import Image from "next/image";

export default function CommonProcessSection({
  illustration,
  eyebrow,
  heading,
  description,
  items = [],
  reverse = false,
}) {
  return (
    <section className="px-6 xl:px-30 py-16">
      <div className={`grid lg:grid-cols-2 gap-[54px] items-center`}>

        {/* Illustration */}
        <div className={`flex justify-center ${reverse ? "lg:order-2" : ""}`}>
          <Image
            src={illustration}
            alt=""
            priority
          />
        </div>

        {/* Content */}
        <div className={`${reverse ? "lg:order-1" : ""}`}>
          {eyebrow && <div className="section-title">{eyebrow}</div>}

          {heading}

          {description && <p className="text-support">{description}</p>}

          {/* Items */}
          <div className="space-y-4 mt-6">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">

                {/* LEFT SIDE: NUMBER OR ICON */}
                {item.id ? (
                  <span className="text-(--light-color-primary) font-extrabold text-[24px]">
                    {item.id}
                  </span>
                ) : item.icon ? (
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="mt-1 shrink-0"
                  />
                ) : null}

                <div>
                  <h4 className="text-[16px] font-medium text-[#1A1A1F]">
                    {item.title}
                  </h4>

                  {item.desc && (
                    <p className="text-[12px] text-[#5F5F6B]">
                      {item.desc}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
