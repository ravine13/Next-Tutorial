import React from 'react';

function AboutPage() {
    return (
        <div className="min-h-screen bg-[#f5f8fa] py-16 px-6">
            <div className="text-center max-w-4xl mx-auto">
                {/* Hero Section */}
                <h1 className="text-6xl font-bold text-[#1e2d3b] mb-6 leading-tight">
                    Empowering Your Financial Future
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                    At Weka Sacco, we believe that everyone deserves the chance to grow, thrive, and build a secure future. Our mission is to empower individuals, families, and businesses by providing easy, affordable, and reliable financial solutions.
                    Together, we can create a future of opportunity for all.
                </p>

                {/* Image for the section */}
                <img
                    src="https://www.shutterstock.com/image-photo/customer-relationship-management-businessman-use-600nw-2268386623.jpg"  // Updated community financial growth image
                    alt="Community Financial Growth"
                    className="w-full md:w-3/4 lg:w-2/3 mx-auto rounded-lg shadow-xl mb-8"
                />

                {/* Our Impact by Numbers Section */}
                <div className="bg-[#1e2d3b] text-white py-16 px-6 rounded-xl shadow-xl mt-12">
                    <h2 className="text-4xl font-semibold mb-8">Our Impact by Numbers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="bg-[#FFA726] p-8 rounded-xl shadow-xl">
                            <h3 className="text-4xl font-bold mb-2">50,000+</h3>
                            <p className="text-lg">Happy Members</p>
                        </div>
                        <div className="bg-[#FFA726] p-8 rounded-xl shadow-xl">
                            <h3 className="text-4xl font-bold mb-2">$120M+</h3>
                            <p className="text-lg">In Loans Disbursed</p>
                        </div>
                        <div className="bg-[#FFA726] p-8 rounded-xl shadow-xl">
                            <h3 className="text-4xl font-bold mb-2">200+</h3>
                            <p className="text-lg">Businesses Supported</p>
                        </div>
                    </div>
                    <p className="mt-8 text-lg max-w-3xl mx-auto text-center">
                        These are just a few numbers that reflect the positive impact we’ve made. Our goal is to continue expanding and supporting more individuals and businesses in their financial journey.
                    </p>
                </div>

                <div className="space-y-6 mb-8">
                    {/* Services Section */}
                    <h2 className="text-4xl font-semibold text-[#1e2d3b] mb-4">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {/* Savings Account Section - Image and Text Side by Side */}
                        <div className="flex items-center space-x-6 bg-white text-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfOLL3l6zppIPWy2NqPa5lXynruLfxpsSIQ&s"  // Image for Savings Accounts
                                alt="Savings"
                                className="w-40 h-40 rounded-lg shadow-lg"  // Image size
                            />
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">Savings Accounts</h3>
                                <p className="text-lg text-gray-600">
                                    Start your journey towards financial security with our flexible and secure savings accounts. It's never too late to begin saving for your future.
                                </p>
                            </div>
                        </div>

                        {/* Loan Options Section - Image and Text Side by Side */}
                        <div className="flex items-center space-x-6 bg-white text-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUMjfIlbGoMoaQwcNfAiS7YXAcjbwDTy4t2MB4SD7Bf6MStd9InxXEf1jQmiKms_2CkQ&usqp=CAU"  // Image for Loan Options
                                alt="Loans"
                                className="w-40 h-40 rounded-lg shadow-lg"  // Image size
                            />
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">Loan Options</h3>
                                <p className="text-lg text-gray-600">
                                    Whether you're looking to expand your business or meet personal needs, our loan options are designed to support you. With low-interest rates and flexible terms, we help you achieve your goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <img
                        src="https://www.shutterstock.com/image-photo/businessman-pointing-arrow-graph-chart-600nw-1402482878.jpg"  // External image from Shutterstock
                        alt="Financial Growth"
                        className="w-full md:w-3/4 lg:w-2/3 mx-auto rounded-lg shadow-xl mb-8"
                    />

                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        By joining Weka Sacco, you're not just accessing financial services—you're becoming part of a supportive community focused on trust, collaboration, and empowerment.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
