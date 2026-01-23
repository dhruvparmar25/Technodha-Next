"use client";

export default function GradientButton({
    text,
    onClick,
    className = "",
    children,
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2.5 w-59 h-13 px-7 rounded-xl
        bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)]
        text-white font-poppins font-medium text-[14px] leading-7
        transition-all duration-300 hover:opacity-90 active:scale-[0.98]
        ${className}`}
        >
            {text}
            {children}
        </button>
    );
}
