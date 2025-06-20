import React from "react";
import { Camera, Shield, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0a4586] via-[#0a4586] to-[#f9463a] flex items-center justify-center pt-16 md:pt-32 md:pb-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/15 blur-lg"></div>
      </div>

      <div className="max-w-6xl 2xl:max-w-7xl w-full text-white overflow-hidden relative z-10">
        <div className="p-8 md:p-0 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Shield className="w-4 h-4 mr-2 text-white" />
                <span className="text-sm font-medium">Trusted & Secure</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Quick, Guided
                <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Vehicle Damage
                </span>
                <span className="block text-[#f9463a]">Assessment</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl mb-8 text-gray-100/90 font-light leading-relaxed max-w-2xl">
              We help you submit vehicle photos after an accident quickly and
              easily with our guided process.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <Clock className="w-5 h-5 mr-3 text-[#f9463a]" />
                <span className="text-sm font-medium">5 min process</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <Camera className="w-5 h-5 mr-3 text-[#f9463a]" />
                <span className="text-sm font-medium">Photo guidance</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <CheckCircle className="w-5 h-5 mr-3 text-[#f9463a]" />
                <span className="text-sm font-medium">Instant submission</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/claim"
                className="group bg-[#f9463a] hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:shadow-2xl shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Claim
                  <Camera className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="#"
                className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                  <Camera className="w-12 h-12 text-[#f9463a] mx-auto mb-4" />
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Capture Damage</h3>
                    <p className="text-sm text-gray-200">
                      Follow our guided photo checklist
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center bg-white/5 rounded-lg p-3">
                    <div className="w-3 h-3 bg-[#f9463a] rounded-full mr-3"></div>
                    <span className="text-sm">Front damage</span>
                  </div>
                  <div className="flex items-center bg-white/5 rounded-lg p-3">
                    <div className="w-3 h-3 bg-[#f9463a] rounded-full mr-3"></div>
                    <span className="text-sm">Side panels</span>
                  </div>
                  <div className="flex items-center bg-white/5 rounded-lg p-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm opacity-60">License plate</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#f9463a] rounded-full p-3 shadow-lg animate-pulse">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-lg rounded-full p-4 border border-white/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
