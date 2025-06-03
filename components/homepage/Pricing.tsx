"use client";
import React, { useState } from "react";
import { Camera, Check, Zap, Shield, Clock } from "lucide-react";

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "2,500",
        period: "month",
        icon: Camera,
        popular: false,
        features: [
          "Up to 5 claims per month",
          "Basic photo analysis",
          "Email support",
          "Standard processing time",
        ],
        gradient: "from-[#0a4586] to-[#1e5ba8]",
      },
      {
        name: "Professional",
        price: "4,800",
        period: "month",
        icon: Zap,
        popular: true,
        features: [
          "Up to 20 claims per month",
          "Advanced AI analysis",
          "Priority phone support",
          "Fast-track processing",
          "API access",
        ],
        gradient: "from-[#f9463a] to-[#e63946]",
      },
      {
        name: "Enterprise",
        price: "8,500",
        period: "month",
        icon: Shield,
        popular: false,
        features: [
          "Unlimited claims",
          "Premium AI analysis",
          "24/7 dedicated support",
          "Instant processing",
          "Advanced integrations",
          "Custom training",
        ],
        gradient: "from-[#0a4586] to-[#f9463a]",
      },
    ],
    biannual: [
      {
        name: "Basic",
        price: "13,500",
        period: "6 months",
        icon: Camera,
        popular: false,
        savings: "10%",
        features: [
          "Up to 5 claims per month",
          "Basic photo analysis",
          "Email support",
          "Standard processing time",
        ],
        gradient: "from-[#0a4586] to-[#1e5ba8]",
      },
      {
        name: "Professional",
        price: "25,900",
        period: "6 months",
        icon: Zap,
        popular: true,
        savings: "10%",
        features: [
          "Up to 20 claims per month",
          "Advanced AI analysis",
          "Priority phone support",
          "Fast-track processing",
          "API access",
        ],
        gradient: "from-[#f9463a] to-[#e63946]",
      },
      {
        name: "Enterprise",
        price: "45,900",
        period: "6 months",
        icon: Shield,
        popular: false,
        savings: "10%",
        features: [
          "Unlimited claims",
          "Premium AI analysis",
          "24/7 dedicated support",
          "Instant processing",
          "Advanced integrations",
          "Custom training",
        ],
        gradient: "from-[#0a4586] to-[#f9463a]",
      },
    ],
    yearly: [
      {
        name: "Basic",
        price: "25,500",
        period: "year",
        icon: Camera,
        popular: false,
        savings: "15%",
        features: [
          "Up to 5 claims per month",
          "Basic photo analysis",
          "Email support",
          "Standard processing time",
        ],
        gradient: "from-[#0a4586] to-[#1e5ba8]",
      },
      {
        name: "Professional",
        price: "49,000",
        period: "year",
        icon: Zap,
        popular: true,
        savings: "15%",
        features: [
          "Up to 20 claims per month",
          "Advanced AI analysis",
          "Priority phone support",
          "Fast-track processing",
          "API access",
        ],
        gradient: "from-[#f9463a] to-[#e63946]",
      },
      {
        name: "Enterprise",
        price: "86,700",
        period: "year",
        icon: Shield,
        popular: false,
        savings: "15%",
        features: [
          "Unlimited claims",
          "Premium AI analysis",
          "24/7 dedicated support",
          "Instant processing",
          "Advanced integrations",
          "Custom training",
        ],
        gradient: "from-[#0a4586] to-[#f9463a]",
      },
    ],
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0a4586] to-[#f9463a] rounded-full mb-6">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with vehicle damage reporting that fits your needs and
            budget
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border-2 border-gray-200">
            <div className="flex space-x-1">
              {[
                { key: "monthly", label: "Monthly" },
                { key: "biannual", label: "Bi-Annual" },
                { key: "yearly", label: "Yearly" },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setBillingCycle(option.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === option.key
                      ? "bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {option.label}
                  {option.key !== "monthly" && (
                    <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Save {option.key === "biannual" ? "10%" : "15%"}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans[billingCycle].map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "border-[#f9463a] ring-4 ring-[#f9463a] ring-opacity-20"
                    : "border-gray-200"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#f9463a] to-[#e63946] text-white text-center py-3 font-bold">
                    🔥 MOST POPULAR
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-16" : "pt-8"}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    {plan.savings && (
                      <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Save {plan.savings}
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-bold text-gray-800">
                        KSh
                      </span>
                      <span className="text-5xl font-bold text-gray-800 mx-1">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">per {plan.period}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#f9463a] to-[#e63946] text-white shadow-lg hover:shadow-xl"
                        : "bg-gradient-to-r from-[#0a4586] to-[#1e5ba8] text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our team for enterprise pricing and custom integrations
              tailored to your specific needs.
            </p>
            <button className="bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
