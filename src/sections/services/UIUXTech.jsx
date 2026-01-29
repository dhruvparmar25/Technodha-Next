import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/uiux-tech.png";

export default function UIUXTools() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="TOOLS WE DESIGN WITH"
      heading={
        <div className="heading-primary">
        <span className="italic text-(--light-color-primary)">Designed</span>with <span className="italic text-(--light-color-secondary)">industry</span> standards
        </div>
      }
      description="We use a focused set of tools to keep every screen clean and consistent. From wireframes to final UI, everything stays structured and easy to manage. Our files are organized for quick feedback and smooth collaboration, helping developers get a clear handoff and faster implementation."
    />
  );
}
