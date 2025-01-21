import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-200 px-6">
            <FaExclamationTriangle className="text-red-500 w-16 h-16 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                404 - Page Not Found
            </h1>
            <p className="text-base text-gray-600 text-center max-w-lg mb-4">
                Sorry, the page you're looking for doesn't exist. It might have been moved, renamed, or removed.
            </p>
            <div className="flex space-x-4">
                <Link
                    href="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
                >
                    Go Home
                </Link>
                <Link
                    href="/downloadProducts"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition"
                >
                    Download Products
                </Link>
            </div>
        </div>
    );
}
