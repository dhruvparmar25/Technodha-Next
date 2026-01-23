import Image from "next/image";
import aboutbg from "@/assets/images/sections/about/hero/about-bg.jpg";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function AboutHero() {
    return (
        <section className="relative w-full h-83.25 overflow-hidden">
            {/* Background Image */}
            <Image
                src={aboutbg}
                alt="About background"
                fill
                priority
                className="object-cover"
                style={{ opacity: 0.93 }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <h1
                    className="
                        text-center font-poppins font-medium leading-none
                        text-[48px] mb-4 
                    "
                >
                    About <span className="text-gradient-primary">Technodha</span>
                </h1>

                <Breadcrumbs />
            </div>
        </section>
    );
}
