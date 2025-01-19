import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconMicroscope,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "UNLIMITED EMAILS",
            description:
                "Send unlimited emails effortlessly with JetStream, ensuring your campaigns reach the inbox every time.",
            icon: <IconTerminal2 />,
        },
        {
            title: "HIGH SECURITY",
            description:
                "JetStream offers robust security with advanced encryption and secure SMTP connections for worry-free email marketing.",
            icon: <IconEaseInOut />,
        },
        {
            title: "SMART AUTOMATION",
            description:
                "Automate your email campaigns with JetStream's intelligent tools, saving you time and boosting efficiency.",
            icon: <IconMicroscope />,
        },
        {
            title: "INBOX DELIVERABILITY",
            description: "Achieve top-tier inbox placement for every email, maximizing engagement and results.",
            icon: <IconCloud />,
        },
        {
            title: "AUTO TOKEN GENERATION",
            description:
                "Generate tokens and app passwords automatically for seamless and secure email sending.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "FAST & RELIABLE",
            description:
                "JetStream delivers emails quickly and reliably, ensuring every campaign runs smoothly.",
            icon: <IconHelp />,
        },
        {
            title: "USER-FRIENDLY",
            description:
                "Designed for ease of use, JetStream's intuitive interface makes email marketing simple for everyone.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "ALL-IN-ONE SOLUTION",
            description:
                "JetStream combines all the tools you need for successful email campaigns in a single platform.",
            icon: <IconHeart />,
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
