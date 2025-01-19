"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote: "JetStream Mailer transformed the way we connect with our customers. The ability to send personalized emails at scale has drastically improved our engagement rates.",
        name: "Sarah Thompson",
        title: "Marketing Manager at BrightIdeas Co.",
    },
    {
        quote: "The HTML generator and seamless API integration have saved us countless hours. JetStream Mailer is a game-changer for our email marketing campaigns!",
        name: "James Carter",
        title: "Founder of InnovateTech",
    },
    {
        quote: "We've seen a 50% increase in open rates since switching to JetStream Mailer. The built-in token and app password generator made setup incredibly easy.",
        name: "Emily Rodriguez",
        title: "Director of Communications at EcoGreen Solutions",
    },
    {
        quote: "JetStream Mailer's features are unmatched! The SMTP integration and real-time analytics helped us fine-tune our strategy for better results.",
        name: "Michael Lee",
        title: "CEO of NextWave Enterprises",
    },
    {
        quote: "As a small business owner, JetStream Mailer has been invaluable. Sending bulk emails without compromising deliverability has never been easier.",
        name: "Anna Patel",
        title: "Owner of SweetTreats Bakery",
    },
];
