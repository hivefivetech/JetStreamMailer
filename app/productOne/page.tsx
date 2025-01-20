import React from "react";
import { Metadata } from "next";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductOneMain from "@/components/ProductOneMain";

export const metadata: Metadata = {
    title: "Bulk mailing software JetStream mailer | Free unlimited email sending",
    description:
        "Unlimited bulk email sending with JetStream Mailer for free. Get started with cutting-edge email tools.",
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
