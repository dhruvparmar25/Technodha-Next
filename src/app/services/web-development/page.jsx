import ContactSection from "@/sections/home/ContactSection";
import TechStackSection from "@/sections/home/TechStackSection";
import HowWeBuildSection from "@/sections/services/HowWeBuildSection";
import WebDevelopmentHero from "@/sections/services/WebDevelopmentHero";
import WebSolutionsSection from "@/sections/services/WebSolutionsSection";

export const metadata = {
    title: "WebDevelopment | Technodha",
};

export default function WebDevelopmentPage() {
    return <div>
        <WebDevelopmentHero/>
        <WebSolutionsSection/>
        <HowWeBuildSection/>
        <TechStackSection/>
        <ContactSection/>
    </div>;
}
