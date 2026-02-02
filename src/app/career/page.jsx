import CareerHero from "@/sections/career/CareerHero";
import CareerApplicationSection from "@/sections/career/CareerApplicationSection";

export const metadata = {
  title: "Career | Technodha",
};

export default function CareerPage() {
  return (
    <div>
      <CareerHero />
      <CareerApplicationSection />
    </div>
  );
}
