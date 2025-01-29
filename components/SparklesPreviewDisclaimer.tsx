"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

export function SparklesPreviewDisclaimer() {
    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200">
            {/* Particle Background */}
            <div className="w-full absolute inset-0 min-h-screen bg-gray-50 bg-opacity-60">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.3}
                    maxSize={0.9}
                    particleDensity={10}
                    className="w-full h-full"
                    particleColor={"#1d4ed8"}
                />
            </div>

            {/* Page Content */}
            <div className="mt-28 sm:mt-40 z-10 w-full max-w-5xl px-6 lg:px-8 mb-12 space-y-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-black text-gray-800 md:text-6xl lg:text-7xl mb-6">
                        Disclaimer
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        If you require any more information or have any questions about our sites disclaimer, please feel free to contact us by email at <a href="mailto:jetstreammailer@gmail.com" className="text-blue-500 duration-300 hover:text-blue-700 hover:-translate-y-3">jetstreammailer@gmail.com</a>.
                    </p>
                </motion.div>

                {/* Disclaimer Sections */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className=""
                >
                    <h2 className="font-bold text-black text-xl md:text-3xl mb-8">Disclaimers for JetStream Mailer</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl">
                        All the information on this website <b>- https://jetstreammailer.in/ -</b> is published in good faith and for general information purpose only. JetStream Mailer does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (JetStream Mailer), is strictly at your own risk. JetStream Mailer  will not be liable for any losses and/or damages in connection with the use of our website.
                        <br />
                        <br />
                        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone <b>'bad'</b>.
                        <br />
                        <br />
                        Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their <b>“Terms of Service”</b> before engaging in any business or uploading any information.
                    </p>

                    <p className="text-center font-normal text-gray-600 text-lg md:text-xl mt-12 mb-10">
                        <b>
                            <i>
                                Jetstream Mailer is not responsible for any content you send out using your Gmail API or any other SMTP, and also JetStream Mailer is not responsible for Lead Generation.
                            </i>
                        </b>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

/* Divider Component */
const Divider = () => (
    <div className="w-full border-t border-gray-300"></div>
);
