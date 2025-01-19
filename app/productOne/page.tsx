import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductOneMain from "@/components/ProductOneMain";

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
