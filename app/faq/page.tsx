import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import FaqMain from "@/components/FaqMain";

export const metadata: Metadata = {
    title: "JetStream Mailer Frequently Asked Questions",
    description: "Find answers to frequently asked questions about JetStream Mailer. Learn about features, setup, troubleshooting, and more to get the most out of our email delivery service.",
};

const Faq = () => {
    return (
        <main>
            <NavbarDemo />
            <FaqMain />
            <Footer />
        </main>
    );
};

export default Faq;
