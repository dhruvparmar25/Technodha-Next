import AboutCompany from "@/sections/about/AboutCompany";
import AboutHero from "@/sections/about/AboutHero";

export const metadata = {
    title: "About Us | Technodha",
};

export default function AboutPage() {
    return <div>
        <AboutHero />
        <AboutCompany />
    </div>;
}
