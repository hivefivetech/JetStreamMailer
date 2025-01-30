import React from "react";
import { Metadata } from "next";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductOneMain from "@/components/ProductOneMain";

export const metadata: Metadata = {
    title: "Bulk mailing software JetStream mailer | Free unlimited email sending",
    description:
        "Unlimited bulk email sending with JetStream Mailer for free. Get started with cutting-edge email tools.",
    keywords: [
        "JetStream Mailer",
        "JetStream",
        "bulk mailer",
        "email marketing software",
        "bulk email software",
        "90% inboxing",
        "email deliverability",
        "bulk mailing tool",
        "email marketing solutions",
        "best bulk mailer",
        "email campaign software",
        "high inbox rate",
        "email automation",
        "bulk email marketing",
        "email marketing platform",
        "JetStream Mailer features",
        "email integration",
        "email marketing tools",
        "bulk email sender",
        "email marketing success",
        "email deliverability tool",
        "free bulk mailer",
        "python bulk mailer",
        "python mailer",
        "monster mailer",
        "R1 mailer",
        "raavan mailer",
        "express mailer",
        "raavan",
        "express",
        "call generator software",
        "gmail api mailer",
        "Auto Gmail API creator bot",
        "Auto Gmail App password creator bot",
        "Free Email validator",
        "Free Email Extractor",
        "HTML generation AI",
        "Free email content maker",
        "SMTP bulk mailer",
        "API bulk mailer",
        "Free Bulk mailer",
        "Email marketing",
    ],
    openGraph: {
        title: "JetStream Mailer | Best Bulk Mailing Software with 90% Inboxing",
        description:
            "JetStream Mailer is the ultimate bulk mailing software, ensuring 90% inboxing for your emails. Boost your email marketing success with JetStream Mailer.",
        type: "website",
        url: "https://jetstreammailer.in",
        siteName: "JetStream Mailer",
        images: [
            {
                url: "https://jetstreammailer.in/jetstream-opengrapgh.png",
                width: 1200,
                height: 630,
                alt: "JetStream Mailer - Bulk Mailing Software",
            },
        ],
    },
};

const ProductOne = () => {
    return (
        <main>
            <NavbarDemo />
            <ProductOneMain />
            <Footer />
        </main>
    );
};

export default ProductOne;
