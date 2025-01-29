import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import PrivacyPolicyMain from "@/components/PrivacyPolicyMain";

export const metadata: Metadata = {
    title: "JetStream Mailer Privacy Policy",
    description: "Read the JetStream Mailer Privacy Policy to understand how we collect, use, and protect your data. Learn about our commitment to data security, user privacy, and compliance with global regulations.",
};

const PrivacyPolicy = () => {
    return (
        <main>
            <NavbarDemo />
            <PrivacyPolicyMain />
            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
