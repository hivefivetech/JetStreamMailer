"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

export function SparklesPreviewTermsConditions() {
    return (
        <div className="min-h-screen relative w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300">
            {/* Particle Background */}
            <div className="w-full absolute inset-0 min-h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={12}
                    className="w-full h-full"
                    particleColor={"#1d4ed8"}
                />
            </div>

            {/* Page Content */}
            <div className="mt-28 sm:mt-40 z-10 w-full max-w-5xl px-6 lg:px-8 mb-12 space-y-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl mb-6">
                        Terms and Conditions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        These Terms and Conditions govern your use of JetStream Mailer. By accessing or using our services, you agree to abide by these terms. Please read them carefully.
                    </p>
                </motion.div>

                {/* Content Sections */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="space-y-12"
                >

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className=""
                    >
                        <p className="font-normal text-gray-600 text-lg md:text-xl">
                            Welcome to <b><i>JetStream Mailer!</i></b>
                            <br />
                            <br />
                            These terms and conditions outline the rules and regulations for the use of BulkBot's Website, located at <b>https://jetstreammailer.in/</b>.
                            <br />
                            <br />
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use JetStream Mailer if you do not agree to take all of the terms and conditions stated on this page.
                            <br />
                            <br />
                            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the JetStream purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                        </p>
                    </motion.div>

                    <Divider />
                    {/* Section 1 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Cookies
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            We employ the use of cookies. By accessing JetStream Mailer, you agreed to use cookies in agreement with the BulkBot's Privacy Policy.
                            <br />
                            <br />
                            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        </p>
                    </div>
                    <Divider />

                    {/* Section 2 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            License
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            Unless otherwise stated, BulkBot and/or its licensors own the intellectual property rights for all material on JetStream Mailer. All intellectual property rights are reserved. You may access this from JetStream Mailer for your own personal use subjected to restrictions set in these terms and conditions.
                            <br />
                            <br />
                            You must not:
                            <br />
                            <br />
                            ⊚ Republish material from JetStream Mailer
                            ⊚ Sell, rent or sub-license material from JetStream Mailer
                            ⊚ Reproduce, duplicate or copy material from JetStream Mailer
                            ⊚ Redistribute content from JetStream Mailer
                            ⊚ This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
                            <br />
                            <br />
                            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. BulkBot does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of BulkBot,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, BulkBot shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                            <br />
                            <br />
                            BulkBot reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                            <br />
                            <br />
                            You warrant and represent that:
                            <br />
                            <br />
                            You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                            ▸ The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                            ▸ The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
                            ▸ The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                            ▸ You hereby grant BulkBot a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                        </p>
                    </div>
                    <Divider />

                    {/* Section 3 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Hyperlinking to our Content
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            The following organizations may link to our Website without prior written approval:
                            <br />
                            <br />
                            ◉ Government agencies;
                            ◉ Search engines;
                            ◉ News organizations;
                            ◉ Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                            ◉ System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                            <br />
                            <br />
                            We may consider and approve other link requests from the following types of organizations:
                            <br />
                            <br />
                            commonly-known consumer and/or business information sources;
                            dot.com community sites;
                            associations or other groups representing charities;
                            online directory distributors;
                            internet portals;
                            accounting, law and consulting firms; and
                            educational institutions and trade associations.
                            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of BulkBot; and (d) the link is in the context of general resource information.
                            <br />
                            <br />
                            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
                            <br />
                            <br />
                            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to BulkBot. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                            <br />
                            <br />
                            Approved organizations may hyperlink to our Website as follows:
                            <br />
                            <br />
                            ◇ By use of our corporate name; or
                            ◇ By use of the uniform resource locator being linked to; or
                            ◇ By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.
                            ◇ No use of BulkBot's logo or other artwork will be allowed for linking absent a trademark license agreement.
                        </p>
                    </div>
                    <Divider />

                    {/* Section 4 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Content Liability
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                        </p>
                    </div>
                    <Divider />

                    {/* Section 5 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Your Privacy
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            Please read Privacy Policy
                        </p>
                    </div>
                    <Divider />

                    {/* Section 6 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Reservation of Rights
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                        </p>
                    </div>
                    <Divider />

                    {/* Section 7 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Removal of links from our website
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                            <br />
                            <br />
                            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                        </p>
                    </div>
                    <Divider />

                    {/* Section 8 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Disclaimer
                        </h2>
                        <p className="text-gray-700 text-base leading-loose">
                            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 text-base leading-loose space-y-2">
                            <li>
                                limit or exclude our or your liability for death or personal injury;
                            </li>
                            <li>
                                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                            </li>
                            <li>
                                limit any of our or your liabilities in any way that is not permitted under applicable law; or
                            </li>
                            <li>
                                exclude any of our or your liabilities that may not be excluded under applicable law.
                            </li>
                        </ul>
                        <p className="text-gray-700 text-base leading-loose">
                            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                            <br />
                            <br />
                            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                        </p>
                    </div>
                    <Divider />
                </motion.div>
            </div>
        </div>
    );
}

/* Divider Component */
const Divider = () => (
    <div className="w-full border-t border-gray-300"></div>
);
