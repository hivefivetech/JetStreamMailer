"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothProductTwo() {
    const words = [
        {
            text: "Best",
        },
        {
            text: "App",
        },
        {
            text: "Password",
        },
        {
            text: "Generator!",
            className: "text-[#00bbff] dark:text-[#00bbff]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
