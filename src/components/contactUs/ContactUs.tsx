"use client";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-[550px] bg-[#006abc] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div className="md:hidden">
          <h1 className="text-2xl text-white font-medium mb-3">Get in touch</h1>
          <div className="w-12 h-0.5 bg-white mb-4"></div>
        </div>
        <div className="text-white space-y-4 order-2 md:order-1">
          <div className="hidden md:block">
            <h1 className="text-2xl font-medium mb-3">Get in touch</h1>
            <div className="w-12 h-0.5 bg-white mb-4"></div>
            <p className="text-xl font-light">For general enquiries</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="md:text-base text-sm font-medium">Address :</h3>
              <p className="md:text-base text-sm font-light">
                110, 16th Road, <br />
                Chembur, Mumbai - 400071
              </p>
            </div>

            <div>
              <h3 className="md:text-base text-sm font-medium">Phone :</h3>
              <p className="md:text-base text-sm font-light">+91 22 25208822</p>
            </div>

            <div>
              <h3 className="md:text-base text-sm font-medium">Email :</h3>
              <p className="md:text-base text-sm font-light">
                info@supremegroup.co.in
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white md:text-base text-sm font-light placeholder-white/60 pb-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white md:text-base text-sm font-light placeholder-white/60 pb-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white md:text-base text-sm font-light placeholder-white/60 pb-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white md:text-base text-sm font-light placeholder-white/60 pb-3 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full sm:w-fit px-8 py-3 border-2 border-white text-white font-light md:text-base text-sm rounded-full hover:bg-white hover:text-black cursor-pointer transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
