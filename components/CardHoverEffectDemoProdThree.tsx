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
        title: "API Generator",
        description:
            "Easily generate APIs with customizable configurations for streamlined integrations.",
        link: "/downloadProducts",
    },
    {
        title: "Flexible Endpoints",
        description:
            "Create flexible API endpoints tailored to your specific application requirements.",
        link: "/downloadProducts",
    },
    {
        title: "Custom Configurations",
        description:
            "Define headers, query parameters, and payloads with complete control over your API setup.",
        link: "/downloadProducts",
    },
];
