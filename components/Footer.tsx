"use client";

import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Branding Section */}
                    <div>
                        <h1 className="text-3xl font-bold">JetStream Mailer</h1>
                        <p className="text-gray-400 text-sm mt-2">
                            Simplify bulk emailing and achieve 90% inbox success with JetStream Mailer.
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Bulk Mailer | Auto Gmail API creator bot | Auto Gmail App password creator bot | Free Email validator | Free email Extractor | HTML generation AI | Free email content maker | SMTP bulk mailer | API bulk mailer | Free Bulk mailer | Email marketing
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#features"
                                    className="hover:text-white transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#guide"
                                    className="hover:text-white transition-colors"
                                >
                                    Guide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/downloadProducts"
                                    className="hover:text-white transition-colors"
                                >
                                    Download Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policies Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Policies</h2>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/disclaimer"
                                    className="hover:text-white transition-colors"
                                >
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacyPolicy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/termsAndConditions"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="hover:text-white transition-colors"
                                >
                                    FAQs
                                </Link>
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
                        <a
                            href="https://t.me/ZplusMan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-white transition-colors space-x-2 mt-3"
                        >
                            <FaRegCirclePlay size={24} />
                            <span className="text-sm">Live Demo Available (Inboxing Test Only)</span>
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
