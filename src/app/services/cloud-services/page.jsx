import ContactSection from "@/sections/home/ContactSection";
import CloudHero from "@/sections/services/CloudHero";
import CloudProcess from "@/sections/services/CloudProcess";
import CloudSolutions from "@/sections/services/CloudSolutions";

export const metadata = {
    title: "CloudComputing | Technodha",
};

export default function CloudComputingPage() {
    return <div>
        <CloudHero/>
        <CloudSolutions/>
        <CloudProcess/>
        <ContactSection/>
    </div>;
}
