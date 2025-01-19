import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadProductMain from "@/components/DownloadProductMain";

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
