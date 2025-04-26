import Link from 'next/link';
import React from 'react';
import './globals.css';

function Page() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#f5f5f5] overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://blog.empuls.io/content/images/2023/10/cheers-to-coffee--1---1-.webp"
                    alt="Team Celebration"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Overlay Text and Button */}
            <div className="relative z-10 max-w-3xl text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    Welcome to Weka Sacco
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 drop-shadow-md">
                    Empowering communities through easy, secure, and reliable savings and credit solutions.
                </p>
                <Link
                    href="/about"
                    className="inline-block px-8 py-4 bg-[#FFA726] text-white rounded-full text-lg font-semibold hover:bg-[#FFB300] transition duration-300 shadow-lg"
                >
                    Learn More About Us
                </Link>
            </div>
        </div>
    );
}

export default Page;
