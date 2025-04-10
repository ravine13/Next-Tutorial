import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-6 border-b-2 border-gray-200">
      <Link href="/" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Home
      </Link>
      <Link href="/counter" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Counter
      </Link>
      <Link href="/tours" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Tours
      </Link>
      <Link href="/actions" className="text-lg text-gray-700 hover:text-blue-600 transition">
        Actions
      </Link>
    </nav>
  );
}

export default Navbar;
