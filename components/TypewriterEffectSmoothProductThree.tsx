"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothProductThree() {
    const words = [
        {
            text: "Best",
        },
        {
            text: "Gmail API",
        },
        {
            text: "Generator",
        },
        {
            text: "Bot!",
            className: "text-[#00bbff] dark:text-[#00bbff]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
