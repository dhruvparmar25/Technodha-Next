import Image from "next/image";

// Left illustration (replace with your actual asset)
import Illustration from "@/assets/images/sections/services/web-gif.png";

const steps = [
  {
    id: "01",
    title: "Project kickoff & scope freeze",
    desc: "We align on goals and timelines to keep execution clear from day one.",
  },
  {
    id: "02",
    title: "System architecture & planning",
    desc: "We plan the tech approach, modules, and integrations for stable scalability.",
  },
  {
    id: "03",
    title: "UI integration & frontend build",
    desc: "We create responsive screens with reusable components and smooth interactions.",
  },
  {
    id: "04",
    title: "Backend + API development",
    desc: "We develop secure APIs, databases, and integrations for full product functionality.",
  },
  {
    id: "05",
    title: "Testing, deployment & monitoring",
    desc: "We test, deploy, and monitor performance to ensure a stable launch.",
  },
];

export default function HowWeBuildSection() {
  return (
    <section className="px-6 xl:px-30 py-6 xl:py-30">
      <div className=" grid lg:grid-cols-2 gap-[54px] items-center">

        {/* Left Illustration */}
        <div className="flex justify-center">
          <Image
            src={Illustration}
            alt="Workflow illustration"
            className="w-full "
          />
        </div>

        {/* Right Content */}
        <div>
          <div className="section-title">
            HOW WE BUILD
          </div>

          <div className="heading-primary">
            How
            <span className="italic text-(--light-color-secondary)">
              web development
            </span>
            works with<span className="italic text-(--light-color-primary)">us</span>
          </div>

          <p className="text-support">
            A clear, engineering-focused workflow that keeps projects structured,
            predictable, and production-ready.
          </p>

          {/* Steps */}
          <div className="space-y-4 mt-6">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4 items-start">

                {/* Number */}
                <span className="text-(--light-color-primary) font-extrabold  text-[24px]">
                  {step.id}
                </span>

                <div>
                  <h4 className="text-[16px] font-medium text-[#1A1A1F]">
                    {step.title}
                  </h4>

                  <p className="text-[12px] text-[#5F5F6B] ">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
