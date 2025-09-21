// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
// import { motion } from "framer-motion";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("xzzggdbj");

//   if (state.succeeded) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg shadow-lg"
//       >
//         <div className="flex flex-col items-center">
//           <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//           </svg>
//           <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
//           <p>Thanks for contacting us. We'll get back to you soon.</p>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.form
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       onSubmit={handleSubmit}
//       className="w-full p-8 bg-white rounded-xl shadow-2xl space-y-6 border border-gray-100"
//     >
//       <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a message</h2>
//       <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you promptly.</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-1">
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="firstName"
//             type="text"
//             name="firstName"
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//             placeholder="John"
//           />
//         </div>
//         <div className="space-y-1">
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="lastName"
//             type="text"
//             name="lastName"
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//             placeholder="Doe"
//           />
//         </div>
//       </div>

//       <div className="space-y-1">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//           Email Address <span className="text-red-500">*</span>
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           placeholder="your@email.com"
//         />
//         <ValidationError prefix="Email" field="email" errors={state.errors} />
//       </div>

//       <div className="space-y-1">
//         <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//           Mobile Number (+91) <span className="text-red-500">*</span>
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <span className="text-gray-500">+91</span>
//           </div>
//           <input
//             id="mobile"
//             type="tel"
//             name="mobile"
//             pattern="^[6-9]\d{9}$"
//             title="Enter a valid 10-digit Indian mobile number"
//             required
//             className="w-full pl-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//             placeholder="9876543210"
//           />
//         </div>
//       </div>

//       <div className="space-y-1">
//         <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//           Subject <span className="text-red-500">*</span>
//         </label>
//         <input
//           id="subject"
//           type="text"
//           name="subject"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           placeholder="How can we help?"
//         />
//       </div>

//       <div className="space-y-1">
//         <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//           Description <span className="text-red-500">*</span>
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows="5"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           placeholder="Tell us about your project or inquiry..."
//         ></textarea>
//         <ValidationError prefix="Message" field="message" errors={state.errors} />
//       </div>

//       <motion.button
//         type="submit"
//         disabled={state.submitting}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-300 disabled:opacity-70 shadow-md"
//       >
//         <FaPaperPlane />
//         <span>{state.submitting ? "Sending..." : "Send Message"}</span>
//       </motion.button>
//     </motion.form>
//   );
// }

// function ContactCard({ icon, title, children }) {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start space-x-4"
//     >
//       <div className="bg-blue-100 p-3 rounded-full text-blue-600">
//         {icon}
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
//         <div className="text-gray-600">{children}</div>
//       </div>
//     </motion.div>
//   );
// }

// function CompanyInfo() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="w-full p-8 space-y-6"
//     >
//       <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Information</h2>
//       <p className="text-gray-600 mb-8">Here's how you can reach us. We'd love to hear from you!</p>

//       <div className="space-y-6">
//         <ContactCard icon={<FaMapMarkerAlt size={20} />} title="Office Address">
//           <p className="font-medium">CodeSewa Solutions</p>
//           <p>Hinjilicut, Ganjam</p>
//           <p>Odisha – 761102 India</p>
//         </ContactCard>

//         <ContactCard icon={<FaPhone size={20} />} title="Phone">
//           <a href="tel:+918658354878" className="font-medium hover:text-blue-600 transition">
//             +91 86583 54878
//           </a>
//         </ContactCard>

//         <ContactCard icon={<FaEnvelope size={20} />} title="Email">
//           <a href="mailto:codesewa.in@gmail.com" className="font-medium hover:text-blue-600 transition">
//             codesewa.in@gmail.com
//           </a>
//         </ContactCard>

//         <ContactCard icon={<FaClock size={20} />} title="Working Hours">
//           <p className="font-medium">Mon - Sat: 9:00 AM to 7:00 PM</p>
//           <p className="text-sm">Closed on Sundays and public holidays</p>
//         </ContactCard>
//       </div>
//     </motion.div>
//   );
// }

// function Contact() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Have questions or want to discuss a project? Reach out to us and our team will get back to you as soon as possible.
//           </p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-12 items-stretch">
//           <div className="w-full lg:w-1/2">
//             <ContactForm />
//           </div>

//           <div className="w-full lg:w-1/2">
//             <CompanyInfo />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzggdbj");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 px-6 sm:px-8 py-8 sm:py-12 rounded-2xl shadow-xl"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
            <svg
              className="w-8 sm:w-10 h-8 sm:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
            Message Sent Successfully!
          </h3>
          <p className="text-base sm:text-lg text-green-700">
            Thanks for reaching out to CodeSewa. Our team will get back to you
            within 24 hours.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl space-y-4 sm:space-y-6 border border-blue-100"
    >
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-2 sm:mb-3">
          Send us a message
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-3 sm:mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base">
          Fill out the form below and we'll get back to you promptly.
        </p>
      </div>

      {/* Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-700"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-sm sm:text-base"
            placeholder="Enter your first name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-700"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-sm sm:text-base"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-sm sm:text-base"
          placeholder="your@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Mobile */}
      <div className="space-y-2">
        <label
          htmlFor="mobile"
          className="block text-sm font-semibold text-gray-700"
        >
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
            <span className="text-gray-500 font-medium text-sm sm:text-base">
              +91
            </span>
          </div>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            pattern="^[6-9]\d{9}$"
            title="Enter a valid 10-digit Indian mobile number"
            required
            className="w-full pl-12 sm:pl-14 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-sm sm:text-base"
            placeholder="9876543210"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-gray-700"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white text-sm sm:text-base"
          placeholder="How can we help you?"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700"
        >
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none text-sm sm:text-base"
          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Button */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 disabled:opacity-70 shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        <FaPaperPlane
          className={`${state.submitting ? "animate-pulse" : ""}`}
        />
        <span>{state.submitting ? "Sending..." : "Send Message"}</span>
      </motion.button>
    </motion.form>
  );
}

function ContactCard({ icon, title, children, gradient }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-3 sm:space-x-4 hover:shadow-xl transition-all duration-300"
    >
      <div
        className={`bg-gradient-to-r ${gradient} p-3 sm:p-4 rounded-xl text-white shadow-lg`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
          {title}
        </h3>
        <div className="text-sm sm:text-base text-gray-600">{children}</div>
      </div>
    </motion.div>
  );
}

function CompanyInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-2 sm:mb-3">
          Contact Information
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-3 sm:mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base">
          Here's how you can reach us. We'd love to hear from you!
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <ContactCard
          icon={<FaMapMarkerAlt size={20} />}
          title="Office Address"
          gradient="from-blue-500 to-blue-600"
        >
          <p className="font-semibold text-gray-800">CodeSewa Solutions</p>
          <p className="text-gray-600">Hinjilicut, Ganjam</p>
          <p className="text-gray-600">Odisha – 761102, India</p>
        </ContactCard>

        <ContactCard
          icon={<FaPhone size={20} />}
          title="Phone Support"
          gradient="from-green-500 to-green-600"
        >
          <a
            href="tel:+918658354878"
            className="font-semibold text-green-600 hover:text-green-700 transition-colors duration-300 text-base sm:text-lg"
          >
            +91 86583 54878
          </a>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Available during working hours
          </p>
        </ContactCard>

        <ContactCard
          icon={<FaEnvelope size={20} />}
          title="Email Support"
          gradient="from-purple-500 to-purple-600"
        >
          <a
            href="mailto:codesewa.in@gmail.com"
            className="font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-300 text-base sm:text-lg"
          >
            codesewa.in@gmail.com
          </a>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            We respond within 24 hours
          </p>
        </ContactCard>

        <ContactCard
          icon={<FaClock size={20} />}
          title="Working Hours"
          gradient="from-indigo-500 to-indigo-600"
        >
          <p className="font-semibold text-gray-800 mb-1">Monday - Saturday</p>
          <p className="text-sm sm:text-lg font-medium text-indigo-600">
            9:00 AM to 7:00 PM
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Closed on Sundays and public holidays
          </p>
        </ContactCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border-2 border-blue-100"
      >
        <h3 className="font-bold text-base sm:text-lg text-blue-800 mb-2 sm:mb-3">
          Quick Response Guarantee
        </h3>
        <p className="text-sm sm:text-base text-blue-700">
          We understand your time is valuable. Our team commits to responding to
          all inquiries within 24 hours on business days.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 sm:right-20 w-28 sm:w-40 h-28 sm:h-40 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-64 h-40 sm:h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
              Have questions or want to discuss a project? Reach out to{" "}
              <span className="font-bold text-blue-600">CodeSewa</span> and our
              expert team will get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
            <div className="w-full lg:w-1/2">
              <CompanyInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
