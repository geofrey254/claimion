import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Simple Process */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-12 mb-20">
          <div className="text-start md:text-center">
            <div className="w-20 h-20 bg-[#f9463a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#0a4586] mb-4">
              Take Photos
            </h3>
            <p className="text-gray-600">
              Simply take photos of the damaged vehicle using any smartphone or
              camera.
            </p>
          </div>

          <div className="text-start md:text-center">
            <div className="w-20 h-20 bg-[#f9463a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
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
            <h3 className="text-2xl font-semibold text-[#0a4586] mb-4">
              AI Analysis
            </h3>
            <p className="text-gray-600">
              Our AI instantly analyzes the damage and calculates accurate
              repair costs.
            </p>
          </div>

          <div className="text-start md:text-center">
            <div className="w-20 h-20 bg-[#f9463a] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#0a4586] mb-4">
              Get Report
            </h3>
            <p className="text-gray-600">
              Receive a detailed damage report with cost estimates in seconds.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-[#0a4586] text-center mb-12">
            Why Choose Claimion?
          </h3>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f9463a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0a4586] mb-2">
                    Fast & Accurate
                  </h4>
                  <p className="text-gray-600">
                    Get results in seconds with 99%+ accuracy, eliminating weeks
                    of waiting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f9463a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0a4586] mb-2">
                    Cost Effective
                  </h4>
                  <p className="text-gray-600">
                    Reduce assessment costs by up to 80% compared to traditional
                    methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f9463a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0a4586] mb-2">
                    Easy to Use
                  </h4>
                  <p className="text-gray-600">
                    No special training required - anyone can use our simple
                    photo-based system.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f9463a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0a4586] mb-2">
                    24/7 Available
                  </h4>
                  <p className="text-gray-600">
                    Process claims anytime, anywhere - our AI never sleeps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f9463a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0a4586] mb-2">
                    Trusted Results
                  </h4>
                  <p className="text-gray-600">
                    Used by major insurance companies to process thousands of
                    claims daily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f9463a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0a4586] mb-2">
                    Secure & Private
                  </h4>
                  <p className="text-gray-600">
                    Your data is encrypted and protected with enterprise-grade
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#f9463a] mb-2">
                500K+
              </div>
              <div className="text-gray-600">Claims Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#f9463a] mb-2">99%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#f9463a] mb-2">
                30 Sec
              </div>
              <div className="text-gray-600">Average Processing Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#f9463a] mb-2">200+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
