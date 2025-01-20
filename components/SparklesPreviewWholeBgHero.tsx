"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import { HeroScrollDemo } from "./HeroScrollDemo";
import { TimelineDemo } from "./TimelineDemo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function SparklesPreviewWholeBgHero() {

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
            {/* <div className="px-12 sm:px-20 mt-28 sm:mt-40 z-10">
                <TypewriterEffectSmoothHero />
            </div>
            <div className="z-10">
                <SparklesPreviewHero />
            </div> */}
            <div className="z-10 mt-2 sm:mt-6">
                <HeroParallaxDemo />
            </div>

            <div className="px-12 sm:px-20 z-10 mt-12" id="features">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-black font-semibold text-xl lg:text-3xl text-center"
                >
                    Features of JetStream Mailer
                </motion.h2>
            </div>
            <div className="px-12 sm:px-24 lg:px-40 z-10">
                {/* <TextGenerateEffect words={fullDescription} className="font-normal text-sm sm:text-md text-center" /> */}
                <p className="font-normal text-sm sm:text-lg text-center mt-2">
                    Simplify your email marketing with advanced Gmail API and SMTP integration, automatic HTML creation, and real-time email logs. Enjoy seamless multi-tab support, easy app password generation, and comprehensive tracking to optimize your campaigns effortlessly. Experience reliable performance without the need for constant logins or manual authorizations.
                </p>
            </div>
            <div className="px-4 sm:px-20 mt-0 sm:mt-6 z-10">
                <FeaturesSectionDemo />
            </div>

            <div className="z-10">
                <HeroScrollDemo />
            </div>

            <div className="z-10" id="guide">
                <TimelineDemo />
            </div>

            <div className="px-12 sm:px-20 mt-10 z-10" id="testimonials">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-black font-semibold text-xl lg:text-3xl text-center"
                >
                    What Our Users Say About JetStream Mailer
                </motion.h2>
            </div>
            <div className="px-12 sm:px-24 lg:px-40 z-10">
                <p className="font-normal text-sm sm:text-lg text-center mt-2">
                    See how JetStream Mailer is revolutionizing email marketing. From seamless campaigns to outstanding deliverability, hear the success stories from our community!
                </p>
            </div>

            <div className="px-0 sm:px-20 z-10">
                <InfiniteMovingCardsDemo />
            </div>
        </div>
    );
}
