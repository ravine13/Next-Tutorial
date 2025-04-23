import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="max-w-3xl mx-auto py-4 flex justify-between items-center border-b-2 border-gray-200 shadow-md bg-white">
            <div className="text-xl font-semibold text-gray-800">
                <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
                    MyWebsite
                </Link>
            </div>
            <div className="flex gap-x-6">
                <Link
                    href="/"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/login"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    Login
                </Link>
                <Link
                    href="/about"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    About
                </Link>
                <Link
                    href="/services"
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                    Services
                </Link>
                <Link
                    href="/signup"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
