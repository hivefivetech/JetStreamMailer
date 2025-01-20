"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import BgImg1 from "../assets/images/bgImg1.png";
import BgImg2 from "../assets/images/bgImg2.jpeg";
import BgImg3 from "../assets/images/bgImg3.png";
import BgImg4 from "../assets/images/bgImg4.png";
import BgImg5 from "../assets/images/bgImg5.jpeg";
import BgImg6 from "../assets/images/bgImg6.jpeg";
import BgImg7 from "../assets/images/img5.png";
import BgImg8 from "../assets/images/img2.jpeg";
import BgImg9 from "../assets/images/img3.jpeg";
import BgImg11 from "../assets/images/ImgAppPass2.jpeg";
import BgImg12 from "../assets/images/ImgCredApi2.jpeg";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "JetStream Main",
    link: "/downloadProducts",
    thumbnail: BgImg2,
  },
  {
    title: "JetStream Mailer",
    link: "/downloadProducts",
    thumbnail: BgImg7,
  },
  {
    title: "JetStream",
    link: "/downloadProducts",
    thumbnail: BgImg1,
  },

  {
    title: "JetStream Tool",
    link: "/downloadProducts",
    thumbnail: BgImg3,
  },
  {
    title: "JetStream Email Deliverability",
    link: "/downloadProducts",
    thumbnail: BgImg8,
  },
  {
    title: "JetStream Emailer",
    link: "/downloadProducts",
    thumbnail: BgImg9,
  },

  {
    title: "JetStream App Password",
    link: "/downloadProducts",
    thumbnail: BgImg11,
  },
  {
    title: "JetStream App Password Tool",
    link: "/downloadProducts",
    thumbnail: BgImg3,
  },
  {
    title: "JetStream App Password Generator",
    link: "/downloadProducts",
    thumbnail: BgImg5,
  },
  {
    title: "JetStream Token",
    link: "/downloadProducts",
    thumbnail: BgImg6,
  },
  {
    title: "JetStream Token Generator",
    link: "/downloadProducts",
    thumbnail: BgImg4,
  },

  {
    title: "JetStream Best Gmail Api",
    link: "/downloadProducts",
    thumbnail: BgImg3,
  },
  {
    title: "JetStream Gmail Api Generator",
    link: "/downloadProducts",
    thumbnail: BgImg5,
  },
  {
    title: "JetStream Gmail Api",
    link: "/downloadProducts",
    thumbnail: BgImg12,
  },
  {
    title: "JetStream Gmail Api Tool",
    link: "/downloadProducts",
    thumbnail: BgImg6,
  },
];