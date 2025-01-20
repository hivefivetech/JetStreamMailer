import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoProdTwo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "NO OTP REQUIRED",
        description: "JetStream's advanced App Password tool bypasses OTPs, enabling you to generate secure Gmail app passwords effortlessly. Simplify access without the hassle of additional verifications.",
        link: "/downloadProducts",
    },
    {
        title: "NO 2FA REQUIRED",
        description: "JetStream's powerful tool bypasses 2FA challenges, allowing you to generate multiple Gmail app passwords in bulk with ease. Streamline your workflow without interruptions or additional verifications.",
        link: "/downloadProducts",
    },
    {
        title: "FAST APP PASSWORD CREATION",
        description: "Generate Gmail app passwords in under 50 seconds with JetStream. Save time and boost productivity with this lightning-fast tool for seamless email integration.",
        link: "/downloadProducts",
    },
    {
        title: "UNLIMITED APP PASSWORD CREATION",
        description: "Create unlimited Gmail app passwords with JetStream App Password Generator. There is no daily limit in creating App Passwords.",
        link: "/downloadProducts",
    },
    {
        title: "REGULAR UPDATES",
        description:
            "JetStream App Password Generator is consistently updated so we can provide you bug free solution for your app password generation.",
        link: "/downloadProducts",
    },
];
