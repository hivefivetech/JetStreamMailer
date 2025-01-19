"use client"

import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Branding Section */}
                    <div>
                        <h1 className="text-3xl font-bold">JetStream Mailer</h1>
                        <p className="text-gray-400 text-sm mt-2">
                            Simplifying email marketing, one message at a time.
                        </p>
                    </div>
                    {/* Links Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>
                                <a
                                    href="/#"
                                    className="hover:text-white transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (window.location.pathname === "/") {
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        } else {
                                            window.location.href = "/";
                                        }
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#features"
                                    className="hover:text-white transition-colors"
                                    onClick={(e) => {
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
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#guide"
                                    className="hover:text-white transition-colors"
                                    onClick={(e) => {
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
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Telegram Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Connect with Us</h2>
                        <a
                            href="https://t.me/ZplusMan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-white transition-colors space-x-2"
                        >
                            <FaTelegramPlane size={24} />
                            <span className="text-sm">@ZplusMan</span>
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6">
                    <p className="text-gray-400 text-xs text-center">
                        © {new Date().getFullYear()} JetStream Mailer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
