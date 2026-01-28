import ContactSection from "@/sections/home/ContactSection";
import MobileHero from "@/sections/services/MobileHero";
import MobileProcess from "@/sections/services/MobileProcess";
import MobileSolutions from "@/sections/services/MobileSolutions";

export const metadata = {
    title: "MobileDevelopment | Technodha",
};

export default function MobileDevelopmentPage() {
    return <div>
        <MobileHero/>
        <MobileSolutions/>
        <MobileProcess/>
        <ContactSection/>
    </div>;
}
