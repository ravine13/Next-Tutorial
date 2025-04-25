import React from 'react';

function AboutPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300 text-slate-800">
            <div className="text-center p-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-6">About Weka Sacco</h1>
                <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-700 mb-6">
                    Welcome to Weka Sacco, a community-based financial institution dedicated to providing easy, secure, and reliable savings and credit solutions. Our goal is to empower individuals and businesses by offering affordable financial services, with a focus on promoting sustainable growth and financial independence.
                </p>
                <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-700 mb-6">
                    At Weka Sacco, we believe in building strong communities through financial inclusion. We provide a range of services, including savings accounts, loans, and investment opportunities, designed to help our members achieve their financial goals. Whether you're saving for the future or seeking a loan to grow your business, we are here to support you every step of the way.
                </p>
                <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-700 mb-6">
                    Join us today and become part of a community that thrives on trust, collaboration, and financial empowerment. Together, we can create a brighter and more prosperous future for all.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
