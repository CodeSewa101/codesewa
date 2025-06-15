import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzggdbj");

  if (state.succeeded) {
    return (
      <div className="text-center text-green-600 font-semibold text-lg mt-8">
        Thanks for contacting us!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full w-full p-6 bg-transparent shadow-md rounded-md space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1 font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="mobile" className="block mb-1 font-medium">
          Mobile Number (+91)
        </label>
        <input
          id="mobile"
          type="tel"
          name="mobile"
          pattern="^[6-9]\d{9}$"
          title="Enter a valid 10-digit Indian mobile number"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-1 font-medium">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Description
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition duration-200 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

function CompanyInfo() {
  return (
    <div className="h-full w-full p-6 bg-transparent shadow-md rounded-md space-y-4 lg:w-1/2">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Contact Details
      </h2>
      <div>
        <h3 className="font-medium text-gray-700">Office Address</h3>
        <p className="text-black font-medium">
          CodeSewa Solutions
          <br /> Hinjilicut, Ganjam
          <br /> Odisha – 761102 India
        </p>
      </div>
      <div>
        <h3 className="font-medium text-gray-700">Phone</h3>
        <p className="text-black font-medium">+91 86583 54878</p>
      </div>
      <div>
        <h3 className="font-medium text-gray-700">Email</h3>
        <p className="text-black font-medium ">codesewa.in@gmail.com</p>
      </div>
      <div>
        <h3 className="font-medium text-gray-700">Working Hours</h3>
        <p className="text-black font-medium">Mon - Sat: 9:00 AM to 7:00 PM</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Get in Touch
      </h1>

      {/* Outer wrapper to center content */}
      <div className="w-full max-w-6xl mx-auto lg:mr-8">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Contact Form - grow to fill space */}
          <div className="flex-1">
            <ContactForm />
          </div>

          {/* Company Info - fixed 50% width on large screens */}
          <div className="w-full lg:w-1/2">
            <CompanyInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
