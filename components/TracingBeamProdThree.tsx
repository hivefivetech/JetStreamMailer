"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Img1 from "../assets/images/ImgCredApi1.jpeg";
import Img2 from "../assets/images/ImgCredApi2.jpeg";

export function TracingBeamProdThree() {
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
        title: "Highly Secured Login",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    JetStream Mailer provides a <strong>highly secure login</strong> process for managing app passwords. Users are authenticated, and unique app passwords are generated and securely enabled from the backend.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    This robust system ensures that your credentials are protected with advanced encryption and backend validation. Enjoy peace of mind knowing that your login process is safeguarded at every step.
                </p>
            </>
        ),
        badge: "Secure Login",
        image: Img1,
    },
    {
        title: "App Password and Token Generation",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Easily generate app passwords and tokens with JetStream Mailer's intuitive tool. Users can upload a file containing Gmail accounts (in <strong>Excel</strong> or <strong>CSV</strong> format) and select an option to generate app passwords, tokens, or both.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Once selected, the process begins automatically, and the generated credentials are saved in the same directory path as the uploaded file. This feature ensures seamless and efficient credential management for your email operations.
                </p>
            </>
        ),
        badge: "App Passwords & Tokens",
        image: Img2,
    },
];
