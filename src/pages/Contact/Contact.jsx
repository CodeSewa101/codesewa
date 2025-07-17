import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzggdbj");

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center">
          <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p>Thanks for contacting us. We'll get back to you soon.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit}
      className="w-full p-8 bg-white rounded-xl shadow-2xl space-y-6 border border-gray-100"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a message</h2>
      <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you promptly.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="John"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="your@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="space-y-1">
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
          Mobile Number (+91) <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500">+91</span>
          </div>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            pattern="^[6-9]\d{9}$"
            title="Enter a valid 10-digit Indian mobile number"
            required
            className="w-full pl-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="9876543210"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="How can we help?"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="Tell us about your project or inquiry..."
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-300 disabled:opacity-70 shadow-md"
      >
        <FaPaperPlane />
        <span>{state.submitting ? "Sending..." : "Send Message"}</span>
      </motion.button>
    </motion.form>
  );
}

function ContactCard({ icon, title, children }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start space-x-4"
    >
      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </motion.div>
  );
}

function CompanyInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Information</h2>
      <p className="text-gray-600 mb-8">Here's how you can reach us. We'd love to hear from you!</p>

      <div className="space-y-6">
        <ContactCard icon={<FaMapMarkerAlt size={20} />} title="Office Address">
          <p className="font-medium">CodeSewa Solutions</p>
          <p>Hinjilicut, Ganjam</p>
          <p>Odisha – 761102 India</p>
        </ContactCard>

        <ContactCard icon={<FaPhone size={20} />} title="Phone">
          <a href="tel:+918658354878" className="font-medium hover:text-blue-600 transition">
            +91 86583 54878
          </a>
        </ContactCard>

        <ContactCard icon={<FaEnvelope size={20} />} title="Email">
          <a href="mailto:codesewa.in@gmail.com" className="font-medium hover:text-blue-600 transition">
            codesewa.in@gmail.com
          </a>
        </ContactCard>

        <ContactCard icon={<FaClock size={20} />} title="Working Hours">
          <p className="font-medium">Mon - Sat: 9:00 AM to 7:00 PM</p>
          <p className="text-sm">Closed on Sundays and public holidays</p>
        </ContactCard>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to discuss a project? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>

          <div className="w-full lg:w-1/2">
            <CompanyInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;