// import React from 'react';
// import companyImage from '../../../assets/images/About1.png';
// import servicesImage from '../../../assets/images/About2.jpg';
// import developmentImage from '../../../assets/images/About3.png';
// import successImage from '../../../assets/images/About4.png';

// const AboutUs = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
//       {/* Section 1 - Company Overview (Image Left) */}
//       <div className="flex flex-col md:flex-row gap-12 items-center">
//         <div className="md:w-1/2">
//           <img 
//             src={companyImage} 
//             alt="CodeSewa Office" 
//             className="w-full rounded-2xl shadow-lg object-cover h-[400px] hover:shadow-xl transition-shadow duration-300"
//           />
//         </div>
//         <div className="md:w-1/2 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Leading Software Company – <span className="text-blue-600">CodeSewa</span> 
//           </h1>
//           <div className="space-y-5 text-gray-700 text-lg">
//             <p>CodeSewa is a Leading Software company in Berhampur, India.</p>
//             <p className="leading-relaxed">
//               We Provide Software development, <span className="font-semibold text-blue-600">Website design</span>, SEO, Mobile apps offerings in Berhampur (Odisha). We Offer quality software program development, mobile software development, Mobile apps services, stipulated time given, exploring new strategy, web solutions, software program companies, software program development, internet development, consulting services, development services, website design, web applications, software development, website design. We are the best software company in Berhampur.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section 2 - Our Services (Image Right) */}
//       <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
//         <div className="md:w-1/2">
//           <img 
//             src={servicesImage} 
//             alt="CodeSewa Services" 
//             className="w-full rounded-2xl shadow-lg object-cover h-[400px] hover:shadow-xl transition-shadow duration-300"
//           />
//         </div>
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
//           <div className="space-y-5 text-gray-700 text-lg">
//             <p className="leading-relaxed">
//               We at <span className="font-bold text-blue-600">CodeSewa</span> promise to deliver customized and optimized cost-effective Website Design Services to our clients. Our team assures efficiency, quality and speed to any type of project.
//             </p>
//             <p className="leading-relaxed">
//               We have a team of skilled Web Designers to manage your business needs. Our expertise includes responsive web design, e-commerce solutions, and custom web applications tailored to your requirements.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section 3 - Development Process (Image Left) */}
//       <div className="flex flex-col md:flex-row gap-12 items-center">
//         <div className="md:w-1/2">
//           <img 
//             src={developmentImage} 
//             alt="CodeSewa Development Process" 
//             className="w-full rounded-2xl shadow-lg object-cover h-[400px] hover:shadow-xl transition-shadow duration-300"
//           />
//         </div>
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">As A Software Company</h2>
//           <div className="space-y-5 text-gray-700 text-lg">
//             <p className="leading-relaxed">
//               We specialize in software application technology, distribution, and product development. CodeSewa is the leading software company in Berhampur, India providing comprehensive digital solutions.
//             </p>
//             <p className="leading-relaxed">
//               All web pages are designed according to client-approved specifications. We thoroughly test for responsiveness, performance, and cross-browser compatibility.
//             </p>
//             <p className="leading-relaxed">
//               We deploy websites on secure cloud platforms with SSL certificates for maximum security. Our optimization process includes image compression, CSS/JS minification, and other techniques to ensure fast loading times.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section 4 - We Can Help You Succeed (Image Right) */}
//       <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
//         <div className="md:w-1/2">
//           <img 
//             src={successImage} 
//             alt="CodeSewa Success Stories" 
//             className="w-full rounded-2xl shadow-lg object-cover h-[400px] hover:shadow-xl transition-shadow duration-300"
//           />
//         </div>
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We Can Help You Succeed</h2>
//           <div className="space-y-5 text-gray-700 text-lg">
//             <p className="leading-relaxed">
//               CodeSewa is the leading software company in Berhampur to help clients enhance their website at the best prices so they can manage their business online. Keeping all requirements in mind, we deliver websites as per client needs at affordable prices.
//             </p>
//             <p className="leading-relaxed">
//               We believe in <span className="font-semibold text-blue-600">"Together We Grow"</span> because growing together brings smiles. CodeSewa is the premier software company in Berhampur, India providing Software development, Website design, and Digital Marketing Services.
//             </p>
            
//             {/* Process Table */}
//             <div className="overflow-x-auto mt-6">
//               <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-200">
//                 <tbody className="divide-y divide-gray-200">
//                   <tr className="hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900">Discussion</td>
//                     <td className="px-6 py-4 text-gray-700">Web Design</td>
//                   </tr>
//                   <tr className="hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900">Sketch</td>
//                     <td className="px-6 py-4 text-gray-700">Testing</td>
//                   </tr>
//                   <tr className="hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900">Approval</td>
//                     <td className="px-6 py-4 text-gray-700">Hosting</td>
//                   </tr>
//                   <tr className="hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-gray-900">Design</td>
//                     <td className="px-6 py-4 text-gray-700">Optimization</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

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
            Leading <span className="text-blue-600">Software Company</span> in Berhampur
          </h1>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              CodeSewa is a premier software development company based in Berhampur, Odisha, delivering cutting-edge digital solutions since our inception.
            </p>
            <p className="mb-4">
              We specialize in <span className="font-semibold text-blue-600">custom software development</span>, responsive web design, mobile applications, and comprehensive digital marketing services tailored to your business needs.
            </p>
            <p>
              Our team of expert developers, designers, and strategists work collaboratively to transform your vision into reality with innovative technology solutions.
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