import Link from 'next/link';
import React from 'react';

function ServicePage() {
    return (
        <div className="min-h-screen bg-[#f5f8fa] py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1e2d3b] mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Supporting our members with a range of flexible financial solutions designed for growth, stability, and empowerment.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Service 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                        <div className="mb-6">
                            <img
                                src="https://img.icons8.com/ios-filled/100/FFA726/money-bag.png"
                                alt="Savings Account"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#1e2d3b] mb-4 text-center">
                            Savings Accounts
                        </h3>
                        <p className="text-gray-600 text-center">
                            Grow your wealth safely with our flexible and rewarding savings plans tailored for every goal.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                        <div className="mb-6">
                            <img
                                src="https://img.icons8.com/ios-filled/100/FFA726/money-transfer.png"
                                alt="Loan Products"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#1e2d3b] mb-4 text-center">
                            Loan Products
                        </h3>
                        <p className="text-gray-600 text-center">
                            Access affordable loans for personal, business, or emergency needs — fast approval and flexible repayment terms.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                        <div className="mb-6">
                            <img
                                src="https://img.icons8.com/ios-filled/100/FFA726/handshake.png"
                                alt="Investment Opportunities"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#1e2d3b] mb-4 text-center">
                            Investment Opportunities
                        </h3>
                        <p className="text-gray-600 text-center">
                            Multiply your savings by investing in profitable ventures through Weka Sacco’s trusted platforms.
                        </p>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="mt-20 text-center">
                    <Link
                        href="/signup"
                        className="inline-block px-8 py-4 bg-[#FFA726] text-white rounded-full text-lg font-semibold hover:bg-[#FFB300] transition duration-300 shadow-lg"
                    >
                        Join Weka Sacco Today
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicePage;
