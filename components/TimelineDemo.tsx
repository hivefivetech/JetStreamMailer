import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Setup & Installation of Jet Stream Mailer",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        A quick and easy guide to getting started with Jet Stream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Follow this step-by-step guide to install and configure Jet Stream Mailer. Learn how to set up the JetStream Mailer and automate your email workflows for seamless marketing.
                        <br />
                        Watch the video demo for a detailed information.
                    </p>
                    <a href="https://www.youtube.com/embed/uGbLiMadwlE?si=GcI93i4JBjHjSlDw" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Automatic HTML Email Template Generation",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Create stunning HTML templates effortlessly with JetStream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Use Jet Stream Mailer's automated template generation to quickly design professional HTML content.
                        <br />
                        Watch the video to learn how to generate HTML content using JetStream Mailer.
                    </p>
                    <a href="https://www.youtube.com/embed/DHpvkd3qxSM?si=RwU8D-zkEnB2poiG" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Bulk Gmail App Password Creator",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Automatically generate multiple SMTP app passwords for Gmail accounts.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Automatically create Gmail SMTP app passwords in bulk with JetStream Mailer without OTP and 2-factor authentication. Now you can save your money on SMTP app password purchase.
                        <br />
                        Watch the video to see how to automatically generate Gmail SMTP app passwords.
                    </p>
                    <a href="https://www.youtube.com/embed/-lM9eHIfpYE?si=wY-z8v15yVhNS8CC" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Gmail Bulk API Creation",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Automatically create multiple Gmail APIs (.JSON) with JetStream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Now you dont need to worry about making Gmail Api (.JSON) manually as JetStream Mailer will automatically create Gmail Api for you.
                        <br />
                        Watch the video to learn how to automatically create multiple Gmail APIs (.JSON) with JetStream Mailer
                    </p>
                    <a href="https://www.youtube.com/embed/9-Frc3dgZFc?si=5qBet2MTpFb9o3t7" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Bulk Email Sending",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Send thousands of emails effortlessly with Jet Stream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Watch this video to learn how to send mails in bulk with JetStream Mailer
                    </p>
                    <a href="https://www.youtube.com/embed/6Q3YXYni6Pc?si=gcpzg4-lAbKzayYJ" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Bulk Mail Sending with Gmail API Non-Token (JSON) Direct",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Send large volumes of emails directly using Gmail API without token setup.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Watch the video now and learn how send mails in bulk with Gmail API without the need for token setup with JetStream Mailer
                    </p>
                    <a href="https://www.youtube.com/embed/hUOTtr54DM8?si=nvgcgqq_5gPbk4Ej" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Auto Gmail API Token Creator",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Create Gmail API Tokens easily now with JetStream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Watch the video now to learn how easily create Gmail API tokens with JetStream Mailer.
                    </p>
                    <a href="https://www.youtube.com/embed/Y7kW7lwGNOk?si=PoxGCfPZ4vdsCLoh" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Bulk Mailing with SMTP App Password",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Send bulk emails with any third party SMTP with secure app password using JetStream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Watch the video now and learn how to send emails in bulk with any third party SMTP with secure app password using JetStream Mailer.
                    </p>
                    <a href="https://www.youtube.com/embed/lhMAP9ydsxI?si=MvYMY4rWdHkFEGDZ" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        {
            title: "Customizable Bulk Mailing with Multiple Subjects and Messages",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-4">
                        Send customizable mails in bulk with multiple subjects and messages now with JetStream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Watch the video now and learn how to send customizable mails in bulk with JetStream Mailer.
                    </p>
                    <a href="https://www.youtube.com/embed/RNnRjfuBJa8?si=bXM6FJl-f2zKcsou" target="_blank" className="font-bold">Click Here To Watch</a>
                </div>
            ),
        },
        // {
        //     title: "Early 2023",
        //     content: (
        //         <div>
        //             <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
        //                 I usually run out of copy, but when I see content this big, I try to
        //                 integrate lorem ipsum.
        //             </p>
        //             <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
        //                 Lorem ipsum is for people who are too lazy to write copy. But we are
        //                 not. Here are some more example of beautiful designs I built.
        //             </p>
        //             <div className="grid grid-cols-2 gap-4">
        //                 <Image
        //                     src="https://assets.aceternity.com/pro/hero-sections.png"
        //                     alt="hero template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //                 <Image
        //                     src="https://assets.aceternity.com/features-section.png"
        //                     alt="feature template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //                 <Image
        //                     src="https://assets.aceternity.com/pro/bento-grids.png"
        //                     alt="bento template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //                 <Image
        //                     src="https://assets.aceternity.com/cards.png"
        //                     alt="cards template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //             </div>
        //         </div>
        //     ),
        // },
        // {
        //     title: "Changelog",
        //     content: (
        //         <div>
        //             <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
        //                 Deployed 5 new components on Aceternity today
        //             </p>
        //             <div className="mb-8">
        //                 <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
        //                     ✅ Card grid component
        //                 </div>
        //                 <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
        //                     ✅ Startup template Aceternity
        //                 </div>
        //                 <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
        //                     ✅ Random file upload lol
        //                 </div>
        //                 <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
        //                     ✅ Himesh Reshammiya Music CD
        //                 </div>
        //                 <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
        //                     ✅ Salman Bhai Fan Club registrations open
        //                 </div>
        //             </div>
        //             <div className="grid grid-cols-2 gap-4">
        //                 <Image
        //                     src="https://assets.aceternity.com/pro/hero-sections.png"
        //                     alt="hero template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //                 <Image
        //                     src="https://assets.aceternity.com/features-section.png"
        //                     alt="feature template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //                 <Image
        //                     src="https://assets.aceternity.com/pro/bento-grids.png"
        //                     alt="bento template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //                 <Image
        //                     src="https://assets.aceternity.com/cards.png"
        //                     alt="cards template"
        //                     width={500}
        //                     height={500}
        //                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        //                 />
        //             </div>
        //         </div>
        //     ),
        // },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
