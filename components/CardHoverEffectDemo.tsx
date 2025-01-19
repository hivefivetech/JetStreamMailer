import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Unlimited Email Sending",
        description:
            "Send infinite emails to unlimited addresses with seamless performance and reliability.",
        link: "/downloadProducts",
    },
    {
        title: "Gmail API Integration",
        description:
            "Utilize 5 Gmail API tabs for advanced email management and automation.",
        link: "/downloadProducts",
    },
    {
        title: "App Password and Token Generator",
        description:
            "Generate app passwords and tokens effortlessly to enhance security and accessibility.",
        link: "/downloadProducts",
    },
    {
        title: "HTML Email Generator",
        description:
            "Create visually stunning HTML emails in seconds with built-in design tools.",
        link: "/downloadProducts",
    },
    {
        title: "Multiple Email Sending Options",
        description:
            "Choose from a variety of email-sending methods to meet your marketing needs.",
        link: "/downloadProducts",
    },
    {
        title: "Advanced Tracking and Logs",
        description:
            "Monitor your campaigns with real-time tracking and detailed logs for performance insights.",
        link: "/downloadProducts",
    },
];
