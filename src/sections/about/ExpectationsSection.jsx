import Image from "next/image";

import Timeline from "@/assets/images/sections/about/expectations/timeline-icon.png";
import Chat from "@/assets/images/sections/about/expectations/chat-icon.png";
import Deploy from "@/assets/images/sections/about/expectations/deploy-icon.png";

const expectations = [
  {
    title: "Real timelines, realistic commitments",
    desc: "We provide honest estimates and deliver on time without cutting corners.",
    icon: Timeline,
  },
  {
    title: "Strong communication, clear scope",
    desc: "We keep you in the loop and ensure alignment at every project milestone.",
    icon: Chat,
  },
  {
    title: "Production-ready output, not demos",
    desc: "We deliver fully tested, deployable solutions that are ready for real-world use.",
    icon: Deploy,
  },
];

export default function ExpectationsSection() {
  return (
    <section className="px-6 xl:px-32 py-20">

      {/* Header */}
      <div className="">
        <div className="section-title">
          WHAT YOU CAN EXPECT
        </div>

        <div className="heading-primary">
          Reliable{" "}
          <span className="italic text-(--light-color-secondary)">
            delivery
          </span>
          , built on{" "}
          <span className="italic text-(--light-color-primary)">
            trust
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[42px]" >

        {expectations.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-[12px] py-[22px] px-[14px]  text-center"
          >
            <div className="flex justify-center">
              <Image
                src={item.icon}
                alt=""
                width={40}
                height={40}
              />
            </div>

            <h4 className="text-[18px] font-medium text-[#2C2C2C] mt-2 ">
              {item.title}
            </h4>

            <p className="text-[14px] text-[#2C2C2C]   mt-2 ">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
