import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/uiux-process.png";

import Journey from "@/assets/icons/journey.svg";
import Components from "@/assets/icons/components.svg";
import Retention from "@/assets/icons/retention.svg";
import Speed from "@/assets/icons/dev-speed.svg";

const items = [
  { title: "Clear user journeys", icon: Journey },
  { title: "Consistent UI components", icon: Components },
  { title: "Better usability & retention", icon: Retention },
  { title: "Faster development handoff", icon: Speed },
];

export default function UIUXProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="WHY IT MATTERS"
      heading={
        <div className="heading-primary">
          Design outcomes that <span className="italic text-(--light-color-primary)">improve</span> the product
        </div>
      }
      description="Great UI is more than visuals—it reduces confusion, improves usability, and helps teams move faster with confidence."
      items={items}
      reverse={true}   // 👈 image on right like screenshot
    />
  );
}
