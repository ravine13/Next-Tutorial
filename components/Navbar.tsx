'use client';

import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                {/* Centered Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-blue-700">
                        Weka Sacco
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 ml-auto">
                    <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium text-[15px]">Home</Link>
                    <Link href="/service" className="text-gray-700 hover:text-blue-700 font-medium text-[15px]">Service</Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium text-[15px]">About</Link>
                    <Link href="/login" className="text-gray-700 hover:text-blue-700 font-medium text-[15px]">Login</Link>
                    <Link href="/signup" className="px-4 py-2 text-sm rounded-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Sign Up</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden ml-auto"
                    onClick={() => setMenuOpen(true)}
                >
                    <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                </button>

                {/* Mobile Sidebar Menu */}
                {menuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black opacity-50 z-40"
                            onClick={() => setMenuOpen(false)}
                        ></div>

                        <div className="fixed top-0 left-0 w-72 max-w-full h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6">
                            <button
                                className="self-end mb-6"
                                onClick={() => setMenuOpen(false)}
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>

                            <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link href="/service" className="text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={() => setMenuOpen(false)}>Service</Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={() => setMenuOpen(false)}>About</Link>
                            <Link href="/login" className="text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={() => setMenuOpen(false)}>Login</Link>
                            <Link href="/signup" className="px-4 py-2 text-center rounded-sm font-medium text-white bg-blue-600 hover:bg-blue-700" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default Navbar;
