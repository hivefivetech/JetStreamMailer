"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Img1 from "../assets/images/img5.png";
import Img2 from "../assets/images/img2.jpeg";
import Img3 from "../assets/images/img3.jpeg";
import Img4 from "../assets/images/img4.jpeg";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4 font-bold")}>
                            {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Gmail API Tabs",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    <strong>Boost your email campaigns</strong> with JetStream Mailer's smooth Gmail API. Create and manage <strong>7 tabs</strong> to handle multiple accounts and maximize your sending capabilities. <span className="text-green-500 font-semibold">Achieve 90% inboxing success</span> with every email you send.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Unlock full flexibility to send various formats, including <strong>PDF, BMP, HEIC, JPEG, PNG, TIFF, GIF, DOCX</strong>, and more. Inline HTML emails come alive with supported image formats like <strong>PNG, JPG, and JPEG</strong>, delivering captivating messages every time.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Customize advanced headers such as <code>mgr</code>, <code>html</code>, <code>inline-html</code>, <code>priority</code>, <code>unsub</code>, and more to tailor your emails to perfection. With JetStream Mailer, sending professional, personalized emails has never been easier.
                </p>
            </>
        ),
        badge: "Gmail API",
        image: Img1,
    },
    {
        title: "SMTP Tabs",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Experience seamless email delivery with <strong>multiple SMTP tabs</strong> in JetStream Mailer. Easily configure sending servers, whether it's <strong>Google, Yahoo, ICloud, GMX or a custom server</strong>, and manage them all in one place. <span className="text-green-500 font-semibold">Achieve 90% inboxing success</span> with every email you send.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Enjoy full support for attachments like <strong>PDF, BMP, HEIC, JPEG, PNG, TIFF, GIF, DOCX</strong>, and more. Inline HTML support ensures that your emails are not just functional but visually stunning, with images in <strong>PNG, JPG, and JPEG</strong> formats.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Take control of your emails with customizable headers like <code>mgr</code>, <code>html</code>, <code>inline-html</code>, <code>priority</code>, <code>unsub</code>, and many others. With JetStream Mailer's SMTP tabs, sending personalized and high-quality emails is effortless and efficient.
                </p>
            </>
        ),
        badge: "SMTP",
        image: Img2,
    },
    {
        title: "Gmail Credential & App Password Generator",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Simplify your email setup with JetStream Mailer's <strong>Gmail Credential and App Password Generator</strong>. Upload an <strong>Excel</strong> or <strong>CSV file</strong>, and let the tool handle the process effortlessly.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Generate app passwords and Gmail credentials in bulk with just a few clicks. This is a much easier and simpler process which saves your time and money by generating app password or Gmail credentials automatically.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Now you can generate <strong>thousands of Gmail APIs, app passwords, or tokens</strong> without any limit or restriction. Say goodbye to OTP or 2FA hassles and streamline your workflow effortlessly.
                </p>
            </>
        ),
        badge: "Gmail & App Passwords",
        image: Img3,
    },
    {
        title: "HTML Generator",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Create stunning HTML email templates (content) with JetStream Mailer's <strong>HTML Generator</strong>. Simply provide a <strong>prompt</strong> and select an image to generate beautifully designed HTML for your email campaigns.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    This intuitive tool ensures that your emails are both visually appealing and professional. Customize headers, layouts, and inline images to match your branding and messaging needs.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Ideal for marketers and designers, the HTML Generator saves time and simplifies the design process. With JetStream Mailer, unleash your creativity and craft impactful emails in seconds.
                </p>
            </>
        ),
        badge: "HTML Design",
        image: Img4,
    },
];
