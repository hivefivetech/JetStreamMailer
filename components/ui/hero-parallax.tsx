"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string | StaticImageData;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[250vh] md:h-[270vh] pt-40 pb-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="relative flex flex-col items-center text-center px-4 py-10 md:py-20 w-full bg-white overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-black leading-tight break-words w-full z-50">
                JetStream <br /> Mailer
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-2xl text-gray-700 max-w-sm sm:max-w-xl md:max-w-4xl break-words w-full font-medium z-50">
                Experience lightning-fast email delivery with <span className="text-blue-600 font-semibold">Jetstream Mailer</span> - seamlessly compatible with APIs and SMTPs like
                <span className="text-blue-600 font-semibold"> Gmail</span>, <span className="text-blue-600 font-semibold">iCloud</span>, third-party providers, and more,
                all secured with <span className="text-blue-600 font-semibold">top-tier encryption</span>!
            </p>

            <div className="mt-6 flex items-center justify-center text-[#5ada3b] font-extrabold z-50 animate-pulse">
                <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <p className="text-white text-4xl md:text-6xl">90%</p>
                </div>
                <p className="ml-4 text-lg sm:text-xl md:text-3xl text-green-600">
                    Inbox Success Guaranteed!
                </p>
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string | StaticImageData;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
