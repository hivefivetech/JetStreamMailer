"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import ToolOne from "@/app/downloadProducts/components/ToolOne";
import ToolTwo from "@/app/downloadProducts/components/ToolTwo";
import ToolThree from "@/app/downloadProducts/components/ToolThree";

export function SparklesPreviewDownloadProduct() {

    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200">
            {/* Particle Background */}
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

            {/* Page Content */}
            <div className="mt-28 sm:mt-40 z-10 w-full max-w-7xl px-6 lg:px-10 mb-12">
                {/* Header */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-16">
                    Download Our Products
                </h1>

                <ToolOne />
                <ToolTwo />
                <ToolThree />

                {/* Notice Section */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-sm">
                        Note: Updates are automatically applied to downloads. For inquiries,{" "}
                        <a
                            href="https://t.me/ZplusMan"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            contact us.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
