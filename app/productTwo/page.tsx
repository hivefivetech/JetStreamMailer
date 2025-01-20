import Footer from '@/components/Footer'
import { NavbarDemo } from '@/components/Navbar'
import ProductTwoMain from '@/components/ProductTwoMain'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Automatic Gmail API creation bot | Gmail API creation software | JetStream Mailer",
    description: "Effortlessly create Gmail APIs with JetStream's advanced tools.",
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