import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-6 border-b-2 border-gray-200">
      <Link href="/" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Home
      </Link>
      <Link href="/login" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Login
      </Link>
      <Link href="/about" className="text-lg text-gray-700 hover:text-blue-600 transition">
        About
      </Link>
      <Link href="/services" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Services
      </Link>
        <Link href="/signup" className="text-blue-600">
            Sign Up
        </Link>

    </nav>
  );
}

export default Navbar;
