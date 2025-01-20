"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import ProductOne from "../assets/images/img5.png";
import ProductTwo from "../assets/images/ImgAppPass1.jpeg";
import ProductThree from "../assets/images/ImgCredApi1.jpeg";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                {/* <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink
                            href="/"
                        >
                            Download Tool Now
                        </HoveredLink>
                    </div>
                </MenuItem> */}
                <MenuItem setActive={setActive} active={active} item="Explore">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink
                            href="/"
                        >
                            Home
                        </HoveredLink>
                        <HoveredLink
                            href="/#features"
                            onClick={(e: any) => {
                                e.preventDefault();
                                const element = document.getElementById("features");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.location.href = "/#features";
                                }
                            }}
                        >
                            Features
                        </HoveredLink>
                        <HoveredLink
                            href="/#guide"
                            onClick={(e: any) => {
                                e.preventDefault();
                                const element = document.getElementById("guide");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.location.href = "/#guide";
                                }
                            }}
                        >
                            Guide
                        </HoveredLink>
                        <HoveredLink
                            href="/#testimonials"
                            onClick={(e: any) => {
                                e.preventDefault();
                                const element = document.getElementById("testimonials");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.location.href = "/#testimonials";
                                }
                            }}
                        >
                            Testimonials
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="JetStream Mailer"
                            href="/productOne"
                            src={ProductOne.src}
                            description="Learn more about JetStream Mailer and its amazing features."
                        />
                        <ProductItem
                            title="App Password Tool"
                            href="/productTwo"
                            src={ProductTwo.src}
                            description="Learn more about JetStream App Password Generator and its amazing features."
                        />
                        <ProductItem
                            title="API Generator"
                            href="/productThree"
                            src={ProductThree.src}
                            description="Learn more about JetStream API Generator and its amazing features."
                        />
                    </div>
                </MenuItem>
                {/* <MenuItem setActive={setActive} active={active} item="Download">
                    <div className="flex flex-col space-y-4 text-sm"> */}
                <HoveredLink
                    href="/downloadProducts"
                    onMouseEnter={() => setActive(null)}
                >
                    <p className="text-white hover:opacity-[0.9]">
                        Download
                    </p>
                </HoveredLink>
                {/* </div>
                </MenuItem> */}
            </Menu>
        </div>
    );
}
