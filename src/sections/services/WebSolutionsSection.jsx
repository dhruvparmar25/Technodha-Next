import Image from "next/image";

// Icons / Illustrations
import Business from "@/assets/images/sections/services/business.png";
import Landing from "@/assets/images/sections/services/landing.png";
import Webapps from "@/assets/images/sections/services/webapps.png";
import Admin from "@/assets/images/sections/services/admin.png";
import Ecommerce from "@/assets/images/sections/services/ecommerce.png";
import Api from "@/assets/images/sections/services/api.png";

const solutions = [
  {
    title: "Business Websites",
    desc: "Modern, responsive websites built to communicate trust, clarity, and your brand story.",
    image: Business,
  },
  {
    title: "Landing Pages",
    desc: "High-performance landing pages optimized for conversions, speed, and mobile-first experience.",
    image: Landing,
  },
  {
    title: "Web Apps & Dashboards",
    desc: "Scalable web applications with clean UI, smooth workflows, and real-time data visibility.",
    image: Webapps,
  },
  {
    title: "Admin Panels",
    desc: "Powerful admin systems to manage users, content, roles, and operations with ease.",
    image: Admin,
  },
  {
    title: "E-commerce",
    desc: "Storefronts built for usability, secure checkout, product management, and scalable growth.",
    image: Ecommerce,
  },
  {
    title: "API Integrations",
    desc: "Seamless integration with third-party tools, payment gateways, CRMs, and custom APIs.",
    image: Api,
  },
];

export default function WebSolutionsSection() {
  return (
    <section className="px-6 xl:px-30  mt-[76px]">

      {/* Header */}
      <div className="text-center ">

        <div className="section-title">
          WHAT WE BUILD
        </div>

        <div className="heading-primary">
         <span className="italic text-(--light-color-primary) mx-1"> Web solutions </span>designed to
          <span className="italic text-(--light-color-secondary) mx-1">
            perform
          </span>
            and 
          <span className="italic text-(--light-text-primary) mx-1">
            scale
          </span>
        </div>

        <p className="text-support mt-4 max-w-[792px] m-auto">
          From high-converting websites to full web platforms, we build
          experiences that stay fast, stable, and easy to maintain as your
          product grows.
        </p>
      </div>

   {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[76px] place-items-center">

  {solutions.map((item, index) => (
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

      {/* Image Wrapper */}
      <div className="
        w-full max-w-[330px]
        h-[200px] sm:h-[260px] lg:h-[290px]
        flex items-center justify-center
      ">
        <Image
          src={item.image}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-center max-w-[335px] mb-[35px]">
        <h4 className="text-[18px] sm:text-[20px] font-medium text-[#1A1A1F] -mt-2 mb-2">
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
