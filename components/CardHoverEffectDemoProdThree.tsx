import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoProdThree() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "FULLY AUTOMATIC API (.JSON) CREATION",
        description:
            "Generate Gmail API credentials automatically in .JSON format with JetStream. Hassle free API Creation process.",
        link: "/downloadProducts",
    },
    {
        title: "API CREDENTIAL WITH TOKEN GENERATION",
        description:
            "Create Gmail API credentials and tokens easily. Tokens allows you to shoot mails without login!",
        link: "/downloadProducts",
    },
    {
        title: "FAST API CREATION",
        description:
            "Quickly generate Gmail API credentials with JetStream API Generator Bot. Now you can create 1000's of Gmail APIs in a shorter period of time.",
        link: "/downloadProducts",
    },
    {
        title: "UNLIMITED GMAIL API CREATION",
        description:
            "Create unlimited Gmail APIs and Tokens JetStream API Generator Bot. There is no daily limit in generating API and tokens.",
        link: "/downloadProducts",
    },
    {
        title: "REGULAR UPDATES",
        description:
            "JetStream Api Generator is consistently updated so we can provide you bug free solution for your api generation.",
        link: "/downloadProducts",
    },
];
