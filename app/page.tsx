import Link from 'next/link'
import React from 'react'
import './globals.css';


function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center px-6">
            <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-2xl">
                <h1 className="text-5xl font-bold text-green-700 mb-6">Welcome to Weka Sacco</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Empowering communities through easy, secure, and reliable savings and credit solutions.
                </p>
                <Link
                    href="/about"
                    className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                    Learn More About Us
                </Link>
            </div>
        </div>
    )
}

export default Page
