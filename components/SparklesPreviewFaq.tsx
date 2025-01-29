"use client";
import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

export function SparklesPreviewFaq() {
    const faqs = [
        {
            question: "Does JetStream Mailer support API to send mails?",
            answer: "Yes, JetStream Mailer supports Gmail API for sending emails"
        },
        {
            question: "Does JetStream Mailer support SMTP to send mails?",
            answer: "Yes, JetStream Mailer supports any third-party SMTP (Eg: Gmail SMTP, ICloud, GMX, Yahoo SMTP, etc.) for sending emails"
        },
        {
            question: "Does JetStream Mailer supports multiple API or SMTP?",
            answer: "Yes, we have multiple tabs for GMAIL API and SMTP to send mails in bulk."
        },
        {
            question: "What types of attachments are supported for sending emails with JetStream Mailer?",
            answer: "You can attach various file types, including HTML, PDF, and image formats such as JPG, PNG, and JPEG. JetStream Mailer allows direct uploads for these file types."
        },
        {
            question: "Does JetStream Mailer supports dynamic tags?",
            answer: "Yes, JetStream Mailer supports hundreds of dynamic tags for personalized and dynamic email content."
        },
        {
            question: "Does JetStream Mailer generates lead through emails?",
            answer: "Yes, JetStream Mailer's primary function is to ensure that emails land in the inbox. Lead generation, however, depends on factors such as data quality, content, and strategy. If these elements are well-executed, JetStream Mailer can support effective lead generation."
        },
        {
            question: "Can I send emails internationally with JetStream Mailer?",
            answer: "Yes, JetStream Mailer allows you to send emails to any country without restrictions, enabling you to target a global audience."
        },
        {
            question: "Is there any per day limit to send emails with JetStream Mailer?",
            answer: "No, there is no limit. You can send unlimited emails with JetStream Mailer. The only limitations depend on your SMTP or API provider, as JetStream Mailer imposes no restrictions."
        },
        {
            question: "What makes JetStream Mailer unique compared to other mailers?",
            answer: "JetStream Mailer offers exclusive features such as an inbuilt automatic HTML generator, API generator, token generator, app password generator, and multiple tabs for sending bulk emails simultaneously with no restriction or limit."
        },
        {
            question: "Does JetStream Mailer have an in-built email validator?",
            answer: "JetStream Mailer includes basic data validation that removes duplicate emails and verifies email addresses based on their DNS to ensure accuracy."
        },
        {
            question: "JetStream Mailer free trial?",
            answer: "No, we do not offer a free or paid trial. However, we provide a live demo to check the inboxing ratio. You can contact us on Telegram at ZPlusMan for more details."
        },
        {
            question: "Is there any support or training in JetStream Mailer?",
            answer: "Yes, we offer 24/7 support for our users convenience. Additionally, we provide a comprehensive live training session via AnyDesk by our expert team after purchase."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
            <div className="mt-28 sm:mt-40 z-10 w-full max-w-5xl px-6 lg:px-8 mb-20 space-y-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-black text-gray-800 md:text-6xl lg:text-7xl mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Have questions? We’ve got answers. Here are the most common questions about JetStream Mailer and their answers.
                    </p>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="space-y-6"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer border border-gray-200"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    className="text-gray-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 text-gray-600"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
