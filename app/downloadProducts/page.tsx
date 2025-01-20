import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadProductMain from "@/components/DownloadProductMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Download JetStream Mailer | JetStream",
    description: "Download JetStream Mailer and boost your email campaigns today.",
};

const DownloadProducts = () => {
    return (
        <main>
            <NavbarDemo />
            <DownloadProductMain />
            <Footer />
        </main>
    );
};

export default DownloadProducts;
