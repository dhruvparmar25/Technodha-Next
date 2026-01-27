import ContactSection from "@/sections/home/ContactSection";
import TechStackSection from "@/sections/home/TechStackSection";
import HowWeBuildSection from "@/sections/services/HowWeBuildSection";
import WebHero from "@/sections/services/web-hero";

export const metadata = {
    title: "WebDevelopment | Technodha",
};

export default function WebDevelopmentPage() {
    return <div>
        <WebHero/>
        <HowWeBuildSection/>
        <TechStackSection/>
        <ContactSection/>
    </div>;
}
