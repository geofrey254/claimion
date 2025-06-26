import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-[#0a4586] text-white py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#f9463a]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="md:max-w-6xl">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-start">
              <div className="md:mb-6">
                <div className="inline-block">
                  <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3">
                    This is
                  </h1>
                  <h2 className="text-7xl md:text-7xl lg:text-8xl font-bold text-[#f9463a] leading-none">
                    Claimion
                  </h2>
                  <div className="w-20 h-1 bg-[#f9463a] mt-4"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f9463a] rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          Lightning Fast
                        </h3>
                        <p className="text-white/70 text-sm">
                          Process claims in minutes, not days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f9463a] rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          99.9% Accurate
                        </h3>
                        <p className="text-white/70 text-sm">
                          AI-powered precision you can trust
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#f9463a] rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">24/7 Support</h3>
                        <p className="text-white/70 text-sm">
                          Always here when you need us
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#f9463a] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/40 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white/5"
        >
          <path d="M0,0V60c240,40 480,40 720,0s480-40 720,0V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
