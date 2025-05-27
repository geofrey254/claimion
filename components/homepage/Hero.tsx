import React from "react";
import { Camera } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-bl from-[#0a4586] via-[#0a4586] to-[#f9463a] flex items-center justify-center md:mt-20">
      <div className="max-w-4xl w-full text-white rounded-lg shadow-xl overflow-hidden border-2 border-white">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Camera size={32} className="mr-3 text-[#f9463a]" />
              <h1 className="text-2xl md:text-3xl font-bold">
                Quick, Guided Vehicle Damage Reporting
              </h1>
            </div>
            <p className="text-lg mb-8 text-gray-100">
              We help you submit vehicle photos after an accident quickly and
              easily.
            </p>
            <Link
              href="/claim"
              className="bg-[#f9463a] hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Claim
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-[#f9463a] opacity-20 rounded-full"></div>
              <div className="absolute inset-4 bg-[#0a4586] border-4 border-white rounded-full flex items-center justify-center">
                <Camera size={64} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <p className="text-[#0a4586] font-medium">Available 24/7</p>
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-[#0a4586]"></div>
            <div className="h-3 w-3 rounded-full bg-[#f9463a]"></div>
            <div className="h-3 w-3 rounded-full bg-white border border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
