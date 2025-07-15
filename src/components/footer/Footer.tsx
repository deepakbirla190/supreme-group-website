"use client";

import Link from "next/link";
import React from "react";
import LinkGroup from "./LinkGroup";

const footerLinks = {
  applications: [
    { name: "Apparel", href: "/applications/apparel" },
    { name: "Automotive", href: "/applications/automotive" },
    { name: "Filtration", href: "/applications/filtration" },
    { name: "Customised Nonwoven", href: "/applications/customised-nonwoven" },
  ],
  company: [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Global Competency", href: "/global-competency" },
    { name: "Innovation", href: "/innovation" },
    { name: "ESG Impact", href: "/esg-impact" },
  ],
  more: [
    { name: "Contact Us", href: "/contact-us" },
    { name: "Careers", href: "/careers" },
  ],
  follow: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/supreme-group-company/",
      external: true,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="text-[#000000B3] bg-gray-100 bg-no-repeat bg-cover bg-right-bottom border-t border-gray-200 border-opacity-10 pt-12 pb-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <img
              src="/Supreme_logo.png"
              className="h-10 md:h-12 xlg:h-12"
              alt="Supreme logo"
              title="logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 mt-8">
          <LinkGroup title="Applications" links={footerLinks.applications} />
          <LinkGroup title="Company" links={footerLinks.company} />
          <LinkGroup title="More" links={footerLinks.more} />
          <LinkGroup title="Follow Us" links={footerLinks.follow} />
        </div>

        <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 mt-8">
          <LinkGroup title="Applications" links={footerLinks.applications} />
          <LinkGroup title="Company" links={footerLinks.company} />
          <LinkGroup title="More" links={footerLinks.more} />
          <LinkGroup title="Follow Us" links={footerLinks.follow} />
        </div>

        <div className="flex gap-3 md:flex-row flex-col justify-between items-center pt-12">
          <h6 className="text-xs text-slate-800 whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
          <h6 className="hidden md:block text-slate-950 whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
        </div>
      </div>
    </footer>
  );
}
