import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/cloud-process.png";

import Infra from "@/assets/icons/infrastructure.svg";
import Shield from "@/assets/icons/security.svg";
import Backup from "@/assets/icons/backup.svg";
import Deploy from "@/assets/icons/deploy.svg";

const items = [
  { title: "Scalable infrastructure", desc: "Stays stable as traffic grows.", icon: Infra },
  { title: "Strong security practices", desc: "Protect apps and data.", icon: Shield },
  { title: "Reliable uptime & backups", desc: "Recovery systems for continuity.", icon: Backup },
  { title: "Faster deployments & updates", desc: "Smooth production releases.", icon: Deploy },
];

export default function CloudProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="WHY IT MATTERS"
      heading={
        <div className="heading-primary">
          Cloud built for long-term <span className="italic text-(--light-color-primary)">reliability</span>
        </div>
      }
      description="Cloud isn’t just hosting—it’s the foundation that keeps your product secure, scalable, and stable as usage grows."
      items={items}
      reverse={false}
    />
  );
}
