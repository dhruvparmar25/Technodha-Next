import Image from "next/image";

import Arcticons from "@/assets/images/sections/about/collaboration/arcticons-icon.png";
import Communication from "@/assets/images/sections/about/collaboration/communication-icon.png";
import Handshake from "@/assets/images/sections/about/collaboration/handshake-icon.png";
import Imageone from "@/assets/images/sections/about/collaboration/image-one.png";
import Imagetwo from "@/assets/images/sections/about/collaboration/image-two.png";

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
  return (
    <section className="min-h-[383px] px-6 xl:px-30 py-[44px] gap-10 flex flex-col md:flex-row items-center md:items-start ">

      {/* Left Content */}
      <div className="w-full lg:w-1/2">
        <div className="section-title">
          HOW WE COLLABORATE
        </div>

        <div className="heading-primary">
          A{" "}
          <span className="italic text-(--light-color-primary)">
            smooth
          </span>{" "}
          experience for your{" "}
          <span className="italic text-(--light-color-secondary)">
            team
          </span>
        </div>

        <div className="mt-8">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 items-start mt-6">

              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
              />

              <div>
                <h4 className="text-[14px] font-medium text-[#1A1A1F]">
                  {item.title}
                </h4>

                <p className="text-[13px]  text-[#5F5F6B]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Images */}
      <div className="w-full lg:w-1/2 relative">

        <Image
          src={Imageone}
          className="rounded-2xl object-cover w-[483px] h-[207px] "
      
        />

        <Image
          src={Imagetwo}
          className="absolute -bottom-10 -left-10  rounded-xl shadow-lg hidden md:block"
          cla
        />

      </div>

    </section>
  );
}
