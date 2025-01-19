"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import ToolOne from "@/app/downloadProducts/components/ToolOne";
import ToolTwo from "@/app/downloadProducts/components/ToolTwo";
import ToolThree from "@/app/downloadProducts/components/ToolThree";

export function SparklesPreviewDownloadProduct() {
    const products = [
        {
            title: "JetStream Mailer",
            description:
                "The ultimate email marketing tool with infinite sending, HTML generator, and more.",
            buttonText: "Download Now",
        },
        {
            title: "App Password Tool",
            description:
                "Generate secure app passwords effortlessly with advanced encryption.",
            buttonText: "Download Now",
        },
        {
            title: "API Generator",
            description:
                "Effortlessly generate APIs with customizable configurations.",
            buttonText: "Download Now",
        },
    ];

    const updates = [
        "Added support for custom SMTP servers.",
        "Enhanced HTML email generator with new templates.",
        "Improved performance for Gmail API integrations.",
    ];

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

                {/* Product Cards */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                        >
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg">
                                {index + 1}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                {product.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-6">
                                {product.description}
                            </p>
                            <button
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md hover:opacity-90 transition-opacity"
                            >
                                {product.buttonText}
                            </button>
                        </div>
                    ))}
                </div> */}

                {/* Feature Updates */}
                {/* <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-3xl shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Recent Updates
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700 text-base max-w-3xl mx-auto">
                        {updates.map((update, index) => (
                            <li key={index} className="leading-relaxed">
                                {update}
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Notice Section */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-sm">
                        Note: Updates are automatically applied to downloads. For inquiries,{" "}
                        <a
                            href="#contact"
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
