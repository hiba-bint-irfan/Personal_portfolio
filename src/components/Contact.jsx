import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'; 


const Contact = () => {
  return (
    <section id="contact-section" className="bg-gray-950 text-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-7xl font-bold mb-4">Contact</h1>
          <h2 className="text-2xl text-blue-400 mt-4">Contact Me</h2>
          <p className="text-gray-500 mt-4">
            Feel free to reach out to me through any of the following methods.
          </p>
        </div>

        {/* Contact Information */}
        <div className="gap-8 mb-12 flex flex-col md:flex-row justify-center items-center">
  {/* Email Card */}
  <div className="bg-gray-900 shadow-lg p-6 w-full md:w-1/2 text-center transition-transform transform hover:scale-105">
    <div className="text-blue-500 mb-4 text-4xl">
      <EnvelopeIcon className="h-10 w-10 mx-auto" />
    </div>
    <h3 className="text-xl font-semibold text-gray-400">Email Address</h3>
    <p className="text-gray-200 mt-2">
      <a href="mailto:hibairfan003@gmail.com">hibairfan003@gmail.com</a>
    </p>
  </div>

  {/* Address Card */}
  <div className="bg-gray-900 shadow-lg p-6 w-full md:w-1/2 text-center transition-transform transform hover:scale-105">
    <div className="text-blue-500 mb-4 text-4xl">
      <MapPinIcon className="h-10 w-10 mx-auto" />
    </div>
    <h3 className="text-xl font-semibold text-gray-400">Address</h3>
    <p className="text-gray-200 mt-2">
      Karachi, Pakistan
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Contact;
