"use client";
import React, { useState } from "react";
import { Camera, Check, Zap, Shield, Clock } from "lucide-react";

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricing = {
    monthly: {
      pricePerClaim: "250",
      features: [
        "Advanced AI damage analysis",
        "Detailed photo assessment",
        "Comprehensive damage reports",
        "Email and phone support",
        "API access included",
        "Fast processing times",
        "Multi-format export (PDF, Excel)",
        "Secure cloud storage",
      ],
    },
    yearly: {
      pricePerClaim: "200",
      originalPrice: "250",
      savings: "20%",
      features: [
        "Advanced AI damage analysis",
        "Detailed photo assessment",
        "Comprehensive damage reports",
        "Priority email and phone support",
        "API access included",
        "Fastest processing times",
        "Multi-format export (PDF, Excel)",
        "Secure cloud storage",
        "Annual usage analytics",
        "Dedicated account manager",
      ],
    },
  };

  const currentPlan = pricing[billingCycle];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0a4586] to-[#f9463a] rounded-full mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Simple Per-Claim Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No tiers, no limits. Pay only for the claims you process with our
            advanced AI damage assessment.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border-2 border-gray-200">
            <div className="flex space-x-1">
              {[
                { key: "monthly", label: "Monthly" },
                { key: "yearly", label: "Yearly" },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setBillingCycle(option.key)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === option.key
                      ? "bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {option.label}
                  {option.key === "yearly" && (
                    <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            {/* Savings Badge for Yearly */}
            {billingCycle === "yearly" && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 font-bold">
                💰 SAVE 20% WITH YEARLY BILLING
              </div>
            )}

            <div
              className={`p-12 ${
                billingCycle === "yearly" ? "pt-20" : "pt-12"
              }`}
            >
              {/* Price Display */}
              <div className="text-center mb-12">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl font-bold text-gray-800">KSh</span>
                  <span className="text-7xl font-bold text-gray-800 mx-2">
                    {currentPlan.pricePerClaim}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-xl text-gray-600 font-medium">
                    per claim processed
                  </p>
                  {currentPlan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      KSh {currentPlan.originalPrice}
                    </span>
                  )}
                </div>

                {billingCycle === "yearly" && (
                  <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Save KSh 50 per claim with yearly billing
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Everything Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Processing Claims
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  No setup fees • No monthly minimums • Cancel anytime
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0a4586] to-[#1e5ba8] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">10</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Small Business</h4>
            <p className="text-gray-600 text-sm mb-3">10 claims per month</p>
            <p className="text-2xl font-bold text-gray-800">
              KSh {billingCycle === "monthly" ? "2,500" : "2,000"}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-[#f9463a] ring-2 ring-[#f9463a] ring-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-[#f9463a] to-[#e63946] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">50</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Growing Business</h4>
            <p className="text-gray-600 text-sm mb-3">50 claims per month</p>
            <p className="text-2xl font-bold text-gray-800">
              KSh {billingCycle === "monthly" ? "12,500" : "10,000"}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0a4586] to-[#f9463a] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">100</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Enterprise</h4>
            <p className="text-gray-600 text-sm mb-3">100 claims per month</p>
            <p className="text-2xl font-bold text-gray-800">
              KSh {billingCycle === "monthly" ? "25,000" : "20,000"}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Questions About Pricing?
            </h3>
            <p className="text-gray-600 mb-6">
              Need help calculating costs for your specific use case? Our team
              is here to help you find the perfect solution.
            </p>
            <button className="bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
