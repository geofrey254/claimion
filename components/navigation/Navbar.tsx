"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Puzzle,
  Info,
  Mail,
  Activity,
  BookCopy,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCarCrash } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { BsMenuButtonWide } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileFeatures = () => {
    setMobileFeaturesOpen(!mobileFeaturesOpen);
  };

  const toggleMobileCompany = () => {
    setMobileCompanyOpen(!mobileCompanyOpen);
  };

  const toggleMobileResources = () => {
    setMobileResourcesOpen(!mobileResourcesOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileFeaturesOpen(false);
    setMobileCompanyOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 py-2 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center bg-white border border-[#849cb5] rounded-xl px-4 py-2"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mr-2"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 bg-white border border-[#849cb5] rounded-xl px-4 py-3">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="border-none focus:outline-none"
              >
                <Link
                  href="#"
                  className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
                >
                  <span>Features</span>{" "}
                  <span>
                    <FaCaretDown />
                  </span>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 p-2 mt-4 border border-[#f9463a] rounded-xl"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="/features/ai-damage-detection"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <FaCarCrash size={30} className="text-[#0a4586]" />
                      <span className="text-base">AI Damage Detection</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/features/claim-report"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <BiSolidReport size={30} className="text-[#0a4586]" />
                      <span className="text-base">Claim Report Generator</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href="/features/dashboard"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <RiDashboardHorizontalFill
                        size={30}
                        className="text-[#0a4586]"
                      />
                      <span className="text-base">Claim Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/features/api"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <TbApi size={30} className="text-[#0a4586]" />
                      <span className="text-base">Insurance API</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="border-none focus:outline-none"
              >
                <Link
                  href="#"
                  className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
                >
                  <span>Company</span>{" "}
                  <span>
                    <FaCaretDown />
                  </span>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-full p-2 mt-4 border border-[#f9463a] rounded-xl"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="/features/ai-damage-detection"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>About Us</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/features/claim-report"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Contact Sales</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href="/features/dashboard"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Careers</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/features/api"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Terms of Service</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/features/api"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Brand</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="border-none focus:outline-none"
              >
                <Link
                  href="#"
                  className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
                >
                  <span>Resources</span>{" "}
                  <span>
                    <FaCaretDown />
                  </span>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-full p-2 mt-4 border border-[#f9463a] rounded-xl"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="/features/ai-damage-detection"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Guides</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/features/claim-report"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Tutorials</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href="/features/dashboard"
                      className="flex gap-4 items-center text-[#0a4586] hover:text-[#f9463a] transition-colors font-semibold mb-2"
                    >
                      <span>Customer Support</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/pricing"
              className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
            >
              <span>FAQ</span>
            </Link>

            <Link
              href="/pricing"
              className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
            >
              <span>Pricing</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 bg-white border border-[#849cb5] rounded-xl px-4 py-2">
            <Link
              href="/"
              className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
            >
              <HiOutlineLogin size={25} />
              <span>Log In</span>
            </Link>

            <Link
              href="/signin"
              className="bg-[#f9463a] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
            >
              Sign In{" "}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#13589e] hover:text-[#f9463a] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-10 w-10 text-white bg-[#849cb5] border border-[#849cb5] rounded-md p-2 transition-colors" />
              ) : (
                <BsMenuButtonWide className="h-10 w-10 bg-white border border-[#849cb5] rounded-md p-2 transition-colors" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#f9463a] shadow-lg absolute left-0 right-0 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Mobile Features dropdown */}
            <div className="relative">
              <button
                onClick={toggleMobileFeatures}
                className="w-full text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center justify-between transition-colors"
              >
                <div className="flex items-center">
                  <Puzzle size={18} className="mr-3" />
                  Features
                </div>
                {mobileFeaturesOpen ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {mobileFeaturesOpen && (
                <div className="bg-gray-50 rounded-md mt-1 ml-6 border-l-2 border-[#13589e] transition-all duration-200">
                  <Link
                    href="/features/ai-damage-detection"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center gap-3 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <FaCarCrash size={20} className="text-[#0a4586]" />
                    AI Damage Detection
                  </Link>

                  <Link
                    href="/features/claim-report"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center gap-3 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <BiSolidReport size={20} className="text-[#0a4586]" />
                    Claim Report Generator
                  </Link>

                  <Link
                    href="/features/dashboard"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center gap-3 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <RiDashboardHorizontalFill
                      size={20}
                      className="text-[#0a4586]"
                    />
                    Claim Dashboard
                  </Link>

                  <Link
                    href="/features/api"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center gap-3 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <TbApi size={20} className="text-[#0a4586]" />
                    Insurance API
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Company dropdown */}
            <div className="relative">
              <button
                onClick={toggleMobileCompany}
                className="w-full text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center justify-between transition-colors"
              >
                <div className="flex items-center">
                  <Info size={18} className="mr-3" />
                  Company
                </div>
                {mobileCompanyOpen ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {mobileCompanyOpen && (
                <div className="bg-gray-50 rounded-md mt-1 ml-6 border-l-2 border-[#13589e] transition-all duration-200">
                  <Link
                    href="/about-us"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact-sales"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Contact Sales
                  </Link>

                  <Link
                    href="/careers"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>

                  <Link
                    href="/terms"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Terms of Service
                  </Link>

                  <Link
                    href="/brand"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Brand
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Resources dropdown */}
            <div className="relative">
              <button
                onClick={toggleMobileResources}
                className="w-full text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center justify-between transition-colors"
              >
                <div className="flex items-center">
                  <Activity size={18} className="mr-3" />
                  Resources
                </div>
                {mobileResourcesOpen ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {mobileResourcesOpen && (
                <div className="bg-gray-50 rounded-md mt-1 ml-6 border-l-2 border-[#13589e] transition-all duration-200">
                  <Link
                    href="/resources/guides"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Guides
                  </Link>

                  <Link
                    href="/resources/tutorials"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Tutorials
                  </Link>

                  <Link
                    href="/support"
                    className="text-[#0a4586] hover:bg-gray-100 hover:text-[#f9463a] px-4 py-3 rounded-md text-sm flex items-center transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Customer Support
                  </Link>
                </div>
              )}
            </div>

            {/* Direct navigation links */}
            <Link
              href="/faq"
              className="text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center transition-colors"
              onClick={closeMobileMenu}
            >
              <BookCopy size={18} className="mr-3" />
              FAQ
            </Link>

            <Link
              href="/pricing"
              className="text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center transition-colors"
              onClick={closeMobileMenu}
            >
              <Activity size={18} className="mr-3" />
              Pricing
            </Link>

            {/* Mobile Auth Section */}
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
              <Link
                href="/login"
                className="text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center transition-colors"
                onClick={closeMobileMenu}
              >
                <HiOutlineLogin size={20} className="mr-3" />
                Log In
              </Link>

              <Link
                href="/signin"
                className="bg-[#f9463a] text-white flex items-center justify-center px-3 py-3 rounded-md text-base font-medium hover:bg-opacity-90 transition-all"
                onClick={closeMobileMenu}
              >
                <Mail size={18} className="mr-2" />
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
