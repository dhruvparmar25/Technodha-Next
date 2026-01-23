import Image from "next/image";
import Aboutgif from "@/assets/images/sections/about/company/technodha-gif.gif";

export default function AboutCompany() {
    return (
        <section
            className="
                px-4 pt-4 sm:px-6 lg:mt-0 xl:px-30
                flex flex-col lg:flex-row
                justify-between items-center
                lg:gap-16.25
            "
        >
            {/* ================= TEXT SECTION ================= */}
            <div
                className="
                    company-contain
                    w-full lg:w-1/2
                    text-center lg:text-left
                "
            >
                <div className="section-title mb-3">
                    ABOUT TECHNODHA
                </div>

                <div
                    className="
                        heading-primary
                        text-xl sm:text-2xl lg:text-3xl
                        leading-tight
                    "
                >
                    We build{" "}
                    <span className="italic text-(--light-color-primary)">digital</span>{" "}
                    products with{" "}
                    <span className="italic text-(--light-color-secondary)">clarity</span>,{" "}
                    <span className="text-(--light-color-text-secondary)">scale</span>,{" "}
                    and long-term value
                </div>

                <div
                    className="
                        text-support
                        mt-4
                        text-sm sm:text-base
                    "
                >
                    Technodha is a product-driven team that partners with startups and
                    growing businesses to design and build high-performing websites,
                    mobile apps, and scalable digital systems—focused on real users,
                    smooth experiences, and long-term business growth.
                </div>
            </div>

            {/* ================= IMAGE SECTION ================= */}
            <div
                className="
                    company-gif
                    w-full lg:w-1/2
                    flex justify-center
                "
            >
                <Image
                    src={Aboutgif}
                    alt="Technodha illustration"
                    className="max-w-full sm:max-w-[80%] lg:max-w-full"
                    priority
                />
            </div>
        </section>
    );
}
