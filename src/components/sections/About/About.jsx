

import React from 'react';
import companyImage from '../../../assets/images/About1.png';
import servicesImage from '../../../assets/images/About2.jpg';
import developmentImage from '../../../assets/images/About3.png';
import successImage from '../../../assets/images/About4.png';

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20">
            {/* Section 1 - Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
                <div className="lg:w-1/2 relative group">
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={companyImage}
                            alt="CodeSewa Office"
                            className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
                        <span className="text-white font-medium text-lg">Our Headquarters</span>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="text-blue-600">About Us..</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CodeSewa – Where Ideas Become Code."</h2>
                    </h1>

                    <div className="prose prose-lg text-gray-700">
                        <p className="mb-4">
                            At CodeSewa, we empower students and support institutions through practical tech solutions.
                            We bridge the gap between academics and real-world applications with hands-on projects.
                        </p>
                        <p className="mb-4">
                            Our platform offers final year projects, custom software, and digital services.
                            We serve schools, colleges, startups, and local businesses with passion and integrity.
                            From web dev to AI/ML, IoT, and data analytics — we cover it all.
                        </p>
                        <p>
                            We believe in affordable tech, quality education, and digital inclusion.
                            Learn by doing — grow technical and entrepreneurial skills.
                            Let’s build a better digital future, together.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 2 - Services */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
                        <div className="space-y-5 text-gray-700">
                            <p>
                                At CodeSewa, we offer end-to-end digital solutions designed to elevate your online presence and streamline your business operations.
                            </p>
                            <ul className="space-y-3 list-disc pl-5">
                                <li>Custom Software Development</li>
                                <li>Responsive Web Design & Development</li>
                                <li>Mobile Application Development</li>
                                <li>E-Commerce Solutions</li>
                                <li>Search Engine Optimization (SEO)</li>
                                <li>Digital Marketing Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2 order-1 lg:order-2 relative group">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={servicesImage}
                                alt="Our Services"
                                className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-lg transform transition-all duration-300 group-hover:scale-110">
                                View Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 - Development Process */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
                <div className="lg:w-1/2 relative group">
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={developmentImage}
                            alt="Development Process"
                            className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <svg className="w-12 h-12 mx-auto text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            <span className="text-white font-medium text-lg block">Our Process</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Development Methodology</h2>
                    <div className="space-y-5 text-gray-700">
                        <p>
                            We follow an agile development process that ensures transparency, flexibility, and timely delivery of projects.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2 text-blue-600">Requirement Analysis</h3>
                                <p>Detailed project understanding and documentation</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2 text-blue-600">UI/UX Design</h3>
                                <p>Creating intuitive and engaging user interfaces</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2 text-blue-600">Development</h3>
                                <p>Agile coding with regular client updates</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2 text-blue-600">Testing & Deployment</h3>
                                <p>Rigorous QA before seamless launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4 - Success Stories */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Driving Business Success</h2>
                        <div className="space-y-5 text-gray-700">
                            <p>
                                We measure our success by the growth of our clients. Our solutions are designed to deliver tangible business results.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p>Customized solutions tailored to your specific business needs</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p>Proven track record of successful project deliveries</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p>Ongoing support and maintenance services</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                                    Get Started With Us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative group">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={successImage}
                                alt="Success Stories"
                                className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-start p-6">
                            <span className="text-white font-medium text-lg">Client Success Stories</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;