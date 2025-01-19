import Image from "next/image";
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
                        Follow this step-by-step guide to install and configure Jet Stream Mailer. Learn how to set up the Gmail API, integrate SMTP services, and automate your email workflows for seamless marketing.
                        <br />
                        Watch the video demo for a detailed walkthrough on optimizing your campaigns and improving outreach efficiency in just a few clicks.
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
                        Use Jet Stream Mailer's automated template generation to quickly design professional HTML emails. Easily set up templates that fit your brand, engage your audience, and save time on email design.
                        <br />
                        Watch the video demo to see how simple it is to create, customize, and deploy effective email templates that make your marketing stand out.
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
                        Effortlessly generate multiple app passwords for Gmail accounts.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Quickly create and manage app passwords in bulk with Jet Stream Mailer's automated system. Ideal for managing multiple Gmail accounts securely, this feature streamlines your workflow and boosts efficiency.
                        <br />
                        Watch the video demo to see how easy it is to set up, create, and organize Gmail app passwords at scale, saving time and simplifying account management.
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
                        Effortlessly create multiple Gmail APIs for seamless integration.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Use Jet Stream Mailer's bulk API creation feature to set up multiple Gmail API configurations in just a few steps. Perfect for managing high-volume email needs, this tool simplifies the process and saves time.
                        <br />
                        Watch the video demo to learn how to streamline API creation, optimize your email delivery, and boost your outreach efficiency with ease.
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
                        Streamline your email marketing with Jet Stream Mailer's bulk sending feature. Easily manage and send high volumes of emails, ensuring fast, secure, and reliable delivery to your entire audience.
                        <br />
                        Watch the video demo to see how to set up bulk email campaigns and maximize outreach without hassle, all while maintaining high deliverability rates.
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
                        Leverage Jet Stream Mailer's direct JSON integration with Gmail API for bulk email sending
                        without token complexities. Simplify your email outreach process and maximize delivery
                        efficiency.
                        <br />
                        Watch the video demo for a quick guide on setting up bulk sending with Gmail API,
                        streamlining your campaigns, and ensuring high deliverability.
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
                        Generate Gmail API tokens seamlessly with Jet Stream Mailer.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Effortlessly create and manage Gmail API tokens for secure and efficient email integration.
                        Automate the token generation process to streamline authentication across multiple Gmail accounts.
                        <br />
                        Watch the video demo to see how to set up API tokens quickly, ensuring secure and consistent
                        access for your automated email workflows.
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
                        Efficiently send bulk emails using SMTP with secure app passwords.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Utilize Jet Stream Mailer's SMTP integration with app passwords for secure and reliable bulk
                        email sending. Perfect for managing high-volume outreach without compromising on security.
                        <br />
                        Watch the video demo to see how easy it is to configure SMTP with app passwords, streamline
                        bulk mailing, and enhance your email marketing effectiveness.
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
                        Personalize your bulk emails with unique subjects, bodies, and
                        recipient names for each message.
                    </p>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Jet Stream Mailer's flexible bulk mailing feature allows you to tailor each email with
                        individual subjects, message bodies, and recipient names, enhancing personalization and
                        engagement.
                        <br />
                        Watch the video demo to see how easy it is to set up customized bulk campaigns and deliver
                        impactful, targeted messages to your audience effortlessly.
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
