import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseSection from "@/sections/home/WhyChooseSection";
import TechStackSection from "@/sections/home/TechStackSection";
import WorkflowSection from "@/sections/home/WorkflowSection";
import ContactSection from "@/sections/home/ContactSection";
import ServicesSection from "@/sections/home/ServicesSection";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <WhyChooseSection />
            <ServicesSection />
            <TechStackSection />
            <WorkflowSection />
            <ContactSection />
        </main>
    );
}
