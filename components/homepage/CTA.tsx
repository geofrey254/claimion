import React from "react";
import { ArrowRight, Play, Zap } from "lucide-react";

function FinalCTABanner() {
  return (
    <section className="w-full bg-[#0a4586] py-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#f9463a] rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-[#f9463a] rounded-full"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute animate-pulse top-1/4 left-1/6 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute animate-pulse delay-300 top-1/3 right-1/4 w-2 h-2 bg-[#f9463a] rounded-full"></div>
        <div className="absolute animate-pulse delay-700 bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute animate-pulse delay-1000 bottom-1/4 right-1/6 w-2 h-2 bg-[#f9463a] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-white/20 to-[#f9463a]/20 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Zap className="w-10 h-10 text-[#f9463a]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="text-[#f9463a] relative">
              modernize
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#f9463a] rounded-full opacity-60"></div>
            </span>
            <br />
            your claims process?
          </h2>

          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who trust our platform for faster,
            more accurate vehicle damage assessments.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Trial Button */}
          <button className="group bg-[#f9463a] hover:bg-[#e63946] text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center text-lg min-w-[200px] justify-center">
            <span className="mr-3">Start Free Trial</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Demo Button */}
          <button className="group bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center text-lg min-w-[200px] justify-center border-2 border-white/30 hover:border-white/50 backdrop-blur-sm">
            <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white/80">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#f9463a] rounded-full mr-3"></div>
              <span className="text-lg">No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#f9463a] rounded-full mr-3"></div>
              <span className="text-lg">Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#f9463a] rounded-full mr-3"></div>
              <span className="text-lg">24/7 support available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f9463a] to-transparent"></div>
    </section>
  );
}

export default FinalCTABanner;
