const Footer = () => {
    return (
        <footer className="tracking-wide bg-[#1e2d3b] pt-8 pb-2 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
                <div>
                    <h4 className="text-[#FFA726] font-medium text-xs mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about-us" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">About Us</a>
                        </li>
                        <li>
                            <a href="/membership" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Become a Member</a>
                        </li>
                        <li>
                            <a href="/news" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">News & Updates</a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#FFA726] font-medium text-xs mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/loans" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Loan Services</a>
                        </li>
                        <li>
                            <a href="/savings" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Savings Accounts</a>
                        </li>
                        <li>
                            <a href="/investment" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Investment Plans</a>
                        </li>
                        <li>
                            <a href="/insurance" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Insurance Services</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#FFA726] font-medium text-xs mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/financial-literacy" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Financial Literacy</a>
                        </li>
                        <li>
                            <a href="/forms" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Download Forms</a>
                        </li>
                        <li>
                            <a href="/loan-calculator" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Loan Calculator</a>
                        </li>
                        <li>
                            <a href="/branches" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Our Branches</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#FFA726] font-medium text-xs mb-4">Contact Us</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/contact" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Contact Information</a>
                        </li>
                        <li>
                            <a href="/support" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Customer Support</a>
                        </li>
                        <li>
                            <a href="/locations" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Branch Locations</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="hover:text-[#FFA726] text-gray-400 text-sm font-normal transition-all">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t text-center border-[#6b5f5f] pt-2 mt-6">
                <p className="text-gray-400 text-xs">
                    © 2025 Weka SACCO. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
