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
        title: "UNLIMITED EMAILS",
        description:
            "Send unlimited emails with no daily limits or restrictions across multiple tabs, and all the mails will land in inbox, powered by JetStream Mailer.",
        link: "/downloadProducts",
    },
    {
        title: "ADVANCED 2025 ENCRYPTION",
        description:
            "Ensure 2025 top-tier email security with JetStream's advanced encryption, safeguarding sensitive data and delivering secure SMTP connections for seamless, worry-free bulk email campaigns.",
        link: "/downloadProducts",
    },
    {
        title: "DYNAMIC TAGS IN MAILS",
        description:
            "Boost inbox placement with dynamic tags that personalize email content and HTML files, automatically replacing values to enhance engagement and ensure your campaigns reach the right audience.",
        link: "/downloadProducts",
    },
    {
        title: "INBOX DELIVERABILITY",
        description:
            "Guarantee up to 90% inbox placement with JetStream's advanced deliverability tools. Ensure every email reaches your audience's inbox, driving engagement and maximizing campaign success with unparalleled precision.",
        link: "/downloadProducts",
    },
    {
        title: "AUTO API & APP PASSWORD GENERATION",
        description:
            "Effortlessly generate Gmail APIs, app passwords, and tokens with JetStream's automated tools. Simplify integration, enhance security, and streamline email sending without manual effort.",
        link: "/downloadProducts",
    },
    {
        title: "AUTOMATIC EMAIL HTML CONTENT GENERATION",
        description:
            "Effortlessly generate dynamic HTML email content with JetStream Mailer, complete with images, custom tags, and advanced formatting. Design professional, engaging emails in seconds to boost inbox placement and audience engagement.",
        link: "/downloadProducts",
    },
    {
        title: "PROXY FOR IP ROTATION",
        description:
            "Enhance email deliverability and maintain anonymity with JetStream's IP rotation feature, utilizing rotating or static proxies. Dynamically change your IP address for secure, efficient, and robust email sending campaigns.",
        link: "/downloadProducts",
    },
    {
        title: "SEND MAIL WITH SMTP AND API",
        description:
            "JetStream unites Gmail API, SMTPs or any third-party SMTP generation into a single platform. Send emails seamlessly through any provider, ensuring 90% inbox placement and streamlined campaign success.",
        link: "/downloadProducts",
    },
    {
        title: "EMAIL VALIDATOR",
        description:
            "JetStream Mailer automatically validates emails for you, ensuring accurate data with features like duplicate removal, DNS checks, and other basic email validations.",
        link: "/downloadProducts",
    },
    {
        title: "EMAIL SENDING LOGS AVAILABLE",
        description:
            "See detailed email logs with JetStream Mailer. Access detailed sending logs to monitor email delivery status.",
        link: "/downloadProducts",
    },
    {
        title: "MULTIPLE GMAIL API AND SMTP TABS TO SEND LARGE VOLUME OF DATA",
        description:
            "JetStream allows you to run up to 7 Gmail API tabs and 5 SMTP (Any SMTP) app password tabs simultaneously. Send large volumes of emails efficiently and manage multiple connections at the same time.",
        link: "/downloadProducts",
    },
    {
        title: "REGULAR UPDATES",
        description:
            "JetStream is consistently updated to align with the latest changes from Google, Yahoo, iCloud, GMX, Hotmail, Outlook, AOL, private mail services, and other email providers, ensuring optimal performance. Stay ahead with features designed to maximize inbox placement and maintain seamless email sending.",
        link: "/downloadProducts",
    },
    {
        title: "TRAINING & SUPPORT",
        description:
            "JetStream offers comprehensive training sessions and continuous support to ensure you make the most of our platform. Our dedicated team is here to guide you every step of the way, ensuring a smooth experience and complete satisfaction for all users. Stay confident with reliable assistance whenever you need it.",
        link: "/downloadProducts",
    },
];
