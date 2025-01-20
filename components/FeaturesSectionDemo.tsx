import { cn } from "@/lib/utils";
import {
    IconBrandCtemplar,
    IconMailCheck,
    IconMailAi,
    IconMailDown,
    IconAutomaticGearbox,
    IconFileTypeHtml,
    IconServerBolt,
    IconMessageUser,
    IconRefresh
} from "@tabler/icons-react";
import { RiMailSendFill } from "react-icons/ri";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "UNLIMITED EMAILS",
            description:
                "Send unlimited emails with no daily limits or restrictions across multiple tabs, and all the mails will land in inbox, powered by JetStream Mailer.",
            icon: <IconMailCheck />,
        },
        {
            title: "2025 ADVANCED ENCRYPTION",
            description:
                "Ensure 2025 top-tier email security with JetStream's advanced encryption, safeguarding sensitive data and delivering secure SMTP connections for seamless, worry-free bulk email campaigns.",
            icon: <IconBrandCtemplar />,
        },
        {
            title: "DYNAMIC TAGS IN MAILS",
            description:
                "Boost inbox placement with dynamic tags that personalize email content and HTML files, automatically replacing values to enhance engagement and ensure your campaigns reach the right audience.",
            icon: <IconMailAi />,
        },
        {
            title: "INBOX DELIVERABILITY",
            description: "Guarantee up to 90% inbox placement with JetStream's advanced deliverability tools. Ensure every email reaches your audience's inbox, driving engagement and maximizing campaign success with unparalleled precision.",
            icon: <IconMailDown />,
        },
        {
            title: "AUTO API & APP PASSWORD GENERATION",
            description:
                "Effortlessly generate Gmail APIs, app passwords, and tokens with JetStream's automated tools. Simplify integration, enhance security, and streamline email sending without manual effort.",
            icon: <IconAutomaticGearbox />,
        },
        {
            title: "AUTOMATIC EMAIL HTML CONTENT GENERATION",
            description:
                "Effortlessly generate dynamic HTML email content with JetStream Mailer, complete with images, custom tags, and advanced formatting. Design professional, engaging emails in seconds to boost inbox placement and audience engagement.",
            icon: <IconFileTypeHtml />,
        },
        {
            title: "PROXY FOR IP ROTATION",
            description:
                "Enhance email deliverability and maintain anonymity with JetStream's IP rotation feature, utilizing rotating or static proxies. Dynamically change your IP address for secure, efficient, and robust email sending campaigns.",
            icon: <IconServerBolt />,
        },
        {
            title: "SEND MAIL WITH SMTP AND API",
            description:
                "JetStream unites Gmail API, SMTPs or any third-party SMTP generation into a single platform. Send emails seamlessly through any provider, ensuring 90% inbox placement and streamlined campaign success.",
            icon: <RiMailSendFill className="w-5 h-5" />,
        },
        {
            title: "REGULAR UPDATES",
            description:
                "JetStream is consistently updated to align with the latest changes from Google, Yahoo, iCloud, GMX, Hotmail, Outlook, AOL, private mail services, and other email providers, ensuring optimal performance. Stay ahead with features designed to maximize inbox placement and maintain seamless email sending.",
            icon: <IconRefresh className="w-5 h-5" />,
        },
        {
            title: "TRAINING & SUPPORT",
            description:
                "JetStream offers comprehensive training sessions and continuous support to ensure you make the most of our platform. Our dedicated team is here to guide you every step of the way, ensuring a smooth experience and complete satisfaction for all users. Stay confident with reliable assistance whenever you need it.",
            icon: <IconMessageUser className="w-5 h-5" />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature",
                (index === 0 || index === 4) && "lg:border-l",
                index < 4 && "lg:border-b"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-[#00bbff] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
