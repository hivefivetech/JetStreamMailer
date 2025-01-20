"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Img1 from "../assets/images/ImgAppPass1.jpeg";
import Img2 from "../assets/images/ImgAppPass2.jpeg";

export function TracingBeamProdTwo() {
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
    // {
    //     title: "Highly Secured Login",
    //     description: (
    //         <>
    //             <p className="mb-4 text-lg font-medium text-gray-700">
    //                 JetStream Mailer provides a <strong>highly secure login</strong> process for managing app passwords. Users are authenticated, and unique app passwords are generated and securely enabled from the backend.
    //             </p>
    //             <p className="mb-4 text-lg font-medium text-gray-700">
    //                 This robust system ensures that your credentials are protected with advanced encryption and backend validation. Enjoy peace of mind knowing that your login process is safeguarded at every step.
    //             </p>
    //         </>
    //     ),
    //     badge: "Secure Login",
    //     image: Img1,
    // },
    {
        title: "App Password Generation",
        description: (
            <>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    Easily generate app passwords with JetStream App Password Generator. Users can upload a file containing Gmail accounts (in <strong>Excel</strong> or <strong>CSV</strong> format) to streamline the process.
                </p>
                <p className="mb-4 text-lg font-medium text-gray-700">
                    The generated passwords are automatically saved in the same directory path as the uploaded file, ensuring a smooth workflow. JetStream Mailer simplifies app password management for efficient email operations.
                </p>
            </>
        ),
        badge: "App Passwords",
        image: Img2,
    },
];
