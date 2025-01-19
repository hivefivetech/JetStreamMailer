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
        title: "App Password Tool",
        description:
            "Generate secure app passwords effortlessly for Gmail accounts with advanced encryption.",
        link: "/downloadProducts",
    },
    {
        title: "Simple Setup",
        description:
            "Easily upload CSV or Excel files to generate multiple app passwords in bulk.",
        link: "/downloadProducts",
    },
    {
        title: "Secure Management",
        description:
            "Store and manage app passwords safely without compromising security.",
        link: "/downloadProducts",
    },
];
