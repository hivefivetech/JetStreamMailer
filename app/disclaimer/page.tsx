import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import DisclaimerMain from "@/components/DisclaimerMain";

export const metadata: Metadata = {
    title: "JetStream Mailer Disclaimer",
    description: "Review our EBS Tracking Disclaimer to understand the terms of use, privacy policies, and limitations of liability for our tools.",
};

const Disclaimer = () => {
    return (
        <main>
            <NavbarDemo />
            <DisclaimerMain />
            <Footer />
        </main>
    );
};

export default Disclaimer;
