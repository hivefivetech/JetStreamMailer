import Footer from '@/components/Footer'
import { NavbarDemo } from '@/components/Navbar'
import ProductThreeMain from '@/components/ProductThreeMain'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title:
        "Automatic Gmail App Password | Bypass OTP with JetStream Mailer",
    description:
        "Generate Gmail App passwords and SMTP APIs easily with JetStream.",
};

const page = () => {
    return (
        <main>
            <NavbarDemo />
            <ProductThreeMain />
            <Footer />
        </main>
    )
}

export default page