"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLaptopCode } from "react-icons/fa";
import {
    TbDeviceMobileCode,
    TbAlignBoxTopCenter,
    TbCloudComputing,
} from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Logo from "@/assets/images/common/logo.png";
import Uiux from "@/assets/images/sections/home/services/uiux-icon.png";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const pathname = usePathname();

    const serviceRoutes = [
        "/services/web-development",
        "/services/mobile-apps",
        "/services/ui-ux",
        "/services/cloud-services",
    ];

    const isServicesActive = serviceRoutes.some((route) =>
        pathname.startsWith(route)
    );

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinkClass = (path) =>
        `nav-link ${pathname === path ? "active" : ""}`;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300  ${scrolled ? "bg-bg shadow-md" : "bg-transparent"
                }`}
        >
            {/* TOP BAR */}
            <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between xl:px-30">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Company Logo"
                        className="w-11.75 h-10.75 object-contain select-none"
                        priority
                    />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-8 text-white">
                    <Link href="/" className={navLinkClass("/")}>
                        Home
                    </Link>

                    <Link href="/about" className={navLinkClass("/about")}>
                        About
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    <div className="relative group">
                        <button
                            type="button"
                            className={`nav-link ${isServicesActive ? "active" : ""}`}
                        >
                            Services
                        </button>

                        <div
                            className="
                absolute left-0 top-full mt-4 w-64
                bg-[#16161C] rounded-lg shadow-lg
                opacity-0 invisible translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all duration-300
              "
                        >
                            <ul className="p-4 space-y-3">
                                <Link
                                    href="/services/web-development"
                                    className="dropdown-item flex gap-3 items-center"
                                >
                                    <FaLaptopCode size={20} /> Web Development
                                </Link>

                                <Link
                                    href="/services/mobile-apps"
                                    className="dropdown-item flex gap-3 items-center"
                                >
                                    <TbDeviceMobileCode size={20} /> Mobile Apps
                                </Link>

                                <Link
                                    href="/services/ui-ux"
                                    className="dropdown-item flex gap-3 items-center"
                                >
                                    <Image src={Uiux} alt="" className="w-5 h-5" />UI/UX Design
                                </Link>

                                <Link
                                    href="/services/cloud-services"
                                    className="dropdown-item flex gap-3 items-center"
                                >
                                    <TbCloudComputing size={20} /> Cloud Services
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <Link href="/contact" className={navLinkClass("/contact")}>
                        Contact
                    </Link>

                    <Link href="/career" className={navLinkClass("/career")}>
                        Career
                    </Link>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden bg-[#16161C] overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col px-6 py-6 gap-4 text-white">
                    <Link
                        href="/"
                        className="dropdown-item"
                        onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="dropdown-item"
                        onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
                    >
                        About
                    </Link>

                    {/* MOBILE SERVICES DROPDOWN */}
                    <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`dropdown-item flex justify-between items-center ${isServicesActive || servicesOpen ? "text-[#FB6557]" : ""
                            }`}
                    >
                        Services
                        <span
                            className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {servicesOpen && (
                        <div className="ml-4 flex flex-col gap-3">
                            <Link
                                href="/services/web-development"
                                className="dropdown-item"
                                onClick={() => {
                                    setMenuOpen(false);
                                    setServicesOpen(false);
                                }}
                            >
                                Web Development
                            </Link>

                            <Link
                                href="/services/mobile-apps"
                                className="dropdown-item"
                                onClick={() => {
                                    setMenuOpen(false);
                                    setServicesOpen(false);
                                }}
                            >
                                Mobile Apps
                            </Link>

                            <Link
                                href="/services/ui-ux"
                                className="dropdown-item"
                                onClick={() => {
                                    setMenuOpen(false);
                                    setServicesOpen(false);
                                }}
                            >
                                UI / UX Design
                            </Link>
                        </div>
                    )}

                    <Link
                        href="/contact"
                        className="dropdown-item"
                        onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/career"
                        className="dropdown-item"
                        onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
                    >
                        Career
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
