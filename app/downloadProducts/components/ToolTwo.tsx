"use client";

import { useEffect, useState } from "react";
import sanityClient from "../../../sanityClient";
import { motion } from "framer-motion";
import { FaDownload, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

type Version = {
    versionNumber: string;
    releaseDate: string;
    file: { asset: { url: string } };
};

type ToolData = {
    title: string;
    description: string;
    versions: Version[];
    releaseNotes: string[];
};

export default function ToolTwo() {
    const [toolData, setToolData] = useState<ToolData | null>(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "toolTwo"][0]{
                    title,
                    description,
                    versions[] {
                        versionNumber,
                        releaseDate,
                        file { asset->{ url } }
                    },
                    releaseNotes
                }`
            )
            .then((data) => setToolData(data))
            .catch(console.error);
    }, []);

    if (!toolData)
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
            </div>
        );

    const latestVersion = toolData.versions?.[toolData.versions.length - 1];

    return (
        <motion.div
            className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{toolData.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{toolData.description}</p>

            {latestVersion && (
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700 flex items-center space-x-2 mb-3">
                        <FaFileAlt className="text-blue-500" />
                        <span>Latest Version: {latestVersion.versionNumber}</span>
                    </h3>
                    <p className="flex items-center text-gray-500 space-x-2 mb-4">
                        <FaCalendarAlt />
                        <span>{new Date(latestVersion.releaseDate).toDateString()}</span>
                    </p>
                    <a
                        // href={latestVersion.file.asset.url}
                        href={"../../../public/jetstreammailerapppasswordgen.zip"}
                        download
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300  hover:-translate-y-1 flex items-center space-x-2"
                    >
                        <FaDownload />
                        <span>Download</span>
                    </a>
                </div>
            )}

            {/* Release Notes Section */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Release Notes</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {toolData.releaseNotes.map((note, index) => (
                        <motion.li
                            key={index}
                            className="leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {note}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
