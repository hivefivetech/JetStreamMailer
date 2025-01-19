"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothHero() {
    const words = [
        {
            text: "Best",
        },
        {
            text: "Email",
        },
        {
            text: "Deliverability",
        },
        {
            text: "Tool!",
            className: "text-[#00bbff] dark:text-[#00bbff]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
