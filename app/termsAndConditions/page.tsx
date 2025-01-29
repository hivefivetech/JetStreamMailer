import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import TermsAndConditionsMain from "@/components/TermsAndConditionsMain";

export const metadata: Metadata = {
    title: "JetStream Mailer Terms & Conditions",
    description: "Review the JetStream Mailer Terms & Conditions to understand the legal agreement governing the use of our email delivery services. Learn about user responsibilities, privacy, and service policies.",
};

const TermsAndConditions = () => {
    return (
        <main>
            <NavbarDemo />
            <TermsAndConditionsMain />
            <Footer />
        </main>
    );
};

export default TermsAndConditions;
