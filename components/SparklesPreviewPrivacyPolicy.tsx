"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import ShieldIcon from "../assets/images/shield.png";
import Image from "next/image";

export function SparklesPreviewPrivacyPolicy() {
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
            <div className="mt-28 sm:mt-40 z-10 w-full max-w-7xl px-6 lg:px-10 mb-12 space-y-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl lg:text-6xl mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        At JetStream Mailer, your privacy is our priority. Explore how we collect, use, and secure your data while ensuring transparency and trust.
                    </p>
                </motion.div>

                {/* Policy Overview Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="flex w-full justify-center items-center"
                >
                    <motion.div
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: -1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="w-[100px]"
                    >
                        <Image
                            src={ShieldIcon}
                            alt="Shield Icon Illustration"
                            className="w-full rounded-lg"
                            width={200}
                            height={200}
                            priority
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className=""
                >
                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">Information we collect</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        <br />
                        <br />
                        If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        <br />
                        <br />
                        When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">How we use your information</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        We use the information we collect in various ways, including to:
                        <br />
                        <br />
                        ◎ Provide, operate, and maintain our website
                        <br />
                        ◎ Improve, personalize, and expand our website
                        <br />
                        ◎ Understand and analyze how you use our website
                        <br />
                        ◎ Develop new products, services, features, and functionality
                        <br />
                        ◎ Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                        <br />
                        ◎ Send you emails
                        <br />
                        ◎ Find and prevent fraud
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">Log Files</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        JetStream Mailer follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">Cookies and Web Beacons</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        Like any other website, JetStream Mailer uses <b>'cookies'</b>. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">Advertising Partners Privacy Policies</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        You may consult this list to find the Privacy Policy for each of the advertising partners of JetStream Mailer.
                        <br />
                        <br />
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on JetStream Mailer, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        <br />
                        <br />
                        <i>Note that JetStream Mailer has no access to or control over these cookies that are used by third-party advertisers.</i>
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">Third Party Privacy Policies</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        JetStream Mailer Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        <br />
                        <br />
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        Under the CCPA, among other rights, California consumers have the right to:
                        <br />
                        <br />
                        ▷ Request that a business that collects a consumers personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                        <br />
                        <br />
                        ▷ Request that a business delete any personal data about the consumer that a business has collected.
                        <br />
                        <br />
                        ▷ Request that a business that sells a consumers personal data, not sell the consumers personal data.
                        <br />
                        <br />
                        ▷ If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">GDPR Data Protection Rights</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                        <br />
                        <br />
                        ➜ The right to access - You have the right to request copies of your personal data. We may charge you a small fee for this service.
                        <br />
                        <br />
                        ➜ The right to rectification - You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                        <br />
                        <br />
                        ➜ The right to erasure - You have the right to request that we erase your personal data, under certain conditions.
                        <br />
                        <br />
                        ➜ The right to restrict processing - You have the right to request that we restrict the processing of your personal data, under certain conditions.
                        <br />
                        <br />
                        ➜ The right to object to processing - You have the right to object to our processing of your personal data, under certain conditions.
                        <br />
                        <br />
                        ➜ The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                        <br />
                        <br />
                        ➜ If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </p>

                    <h2 className="font-bold text-black text-xl md:text-3xl mb-5">Childrens Information</h2>

                    <p className="font-normal text-gray-600 text-lg md:text-xl mb-10">
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                        <br />
                        <br />
                        JetStream Mailer does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                </motion.div>

                {/* Contact Us Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="bg-gray-100 p-8 rounded-xl shadow-lg text-center"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Have Questions or Concerns?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We're here to help. If you have any questions about your data, privacy, or our policies, feel free to reach out to us.
                    </p>
                    <a
                        href="https://t.me/ZplusMan"
                        target="_blank"
                        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition-all"
                    >
                        Contact Support
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
