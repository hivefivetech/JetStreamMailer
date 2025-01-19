"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmoothProductThree } from "./TypewriterEffectSmoothProductThree";
import { SparklesHeadProductThree } from "./SparklesHeadProductThree";
import { CardHoverEffectDemoProdThree } from "./CardHoverEffectDemoProdThree";
import { TracingBeamProdThree } from "./TracingBeamProdThree";

export function SparklesPreviewProductThree() {

    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-start overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 min-h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.3}
                    maxSize={0.9}
                    particleDensity={10}
                    className="w-full h-full"
                    particleColor={"#000"}
                />
            </div>
            <div className="px-12 sm:px-20 mt-28 sm:mt-40 z-10">
                <TypewriterEffectSmoothProductThree />
            </div>
            <div className="z-10">
                <SparklesHeadProductThree />
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 z-10">
                {/* Purchase Now Button */}
                <a
                    href="https://t.me/ZplusMan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    Purchase Now
                </a>

                {/* Download Now Button */}
                <a
                    href="/downloadProducts"
                    className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-950 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    Download Now
                </a>
            </div>

            <div className="px-0 sm:px-20 mt-0 sm:mt-6 z-10">
                <CardHoverEffectDemoProdThree />
            </div>

            <div className="z-10">
                <TracingBeamProdThree />
            </div>
        </div>
    );
}
