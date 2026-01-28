import ContactSection from "@/sections/home/ContactSection";
import CloudHero from "@/sections/services/CloudHero";
import CloudSolutions from "@/sections/services/CloudSolutions";

export const metadata = {
    title: "CloudComputing | Technodha",
};

export default function CloudComputingPage() {
    return <div>
        <CloudHero/>
        <CloudSolutions/>
        <ContactSection/>
    </div>;
}
