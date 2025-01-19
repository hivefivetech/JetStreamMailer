"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesHeadProductThree() {

    const maxSize = typeof window !== "undefined" && window.innerWidth < 640 ? 1.5 : 3;

    return (
        <div className="w-full bg-[#fff] flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-black relative z-20">
                JetStream Api Generator
            </h1>
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent  via-sky-800 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent  via-sky-800 to-transparent h-px w-3/4" />
                {/* <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-800 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-800 to-transparent h-px w-1/4" /> */}

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.2}
                    maxSize={maxSize}
                    particleDensity={70}
                    className="w-full h-full"
                    particleColor="#04428a"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-[#fff] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
