import Footer from '@/components/Footer'
import { NavbarDemo } from '@/components/Navbar'
import ProductTwoMain from '@/components/ProductTwoMain'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title:
        "Automatic Gmail App password creation bot bypass otp | Gmail SMTP api creation without 2 step verification",
    description:
        "Generate Gmail App passwords and SMTP APIs easily with JetStream.",
};

const page = () => {
    return (
        <main>
            <NavbarDemo />
            <ProductTwoMain />
            <Footer />
        </main>
    )
}

export default page