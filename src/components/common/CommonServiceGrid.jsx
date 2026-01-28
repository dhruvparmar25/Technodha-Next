import Image from "next/image";

export default function CommonSolutionsGrid({
  eyebrow,
  heading,
  description,
  items = [],
}) {
  return (
    <section className="px-6 xl:px-30 mt-[76px]">

      {/* Header */}
      <div className="text-center">

        {eyebrow && (
          <div className="section-title">
            {eyebrow}
          </div>
        )}

        {heading}

        {description && (
          <p className="text-support mt-4 max-w-[792px] mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[76px] place-items-center">

        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-[12px] border border-[var(--light-color-border)]
              w-full max-w-[384px]
              min-h-[361px]
              px-[20px] sm:px-[25px]
              flex flex-col items-center justify-around
              hover:shadow-lg transition
            "
          >
            {/* Image */}
            <div className="
              w-full max-w-[330px]
              h-[200px] sm:h-[260px] lg:h-[290px]
              flex items-center justify-center
            ">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center max-w-[335px] mb-[35px]">
              <h4 className="text-[18px] sm:text-[20px] font-medium text-[#1A1A1F]  mb-2">
                {item.title}
              </h4>

              <p className="text-[12px] sm:text-[13px] text-[#5F5F6B] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
