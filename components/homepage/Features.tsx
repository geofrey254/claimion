import {
  Camera,
  Zap,
  Shield,
  CheckCircle,
  FileText,
  BarChart,
  Smartphone,
  Globe,
  Play,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Camera,
      title: "AI-Powered Photo Analysis",
      description:
        "Advanced computer vision instantly identifies and categorizes vehicle damage with 99.2% accuracy, eliminating human error and subjectivity.",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description:
        "Get comprehensive damage reports in under 30 seconds. What used to take days now happens instantly, keeping your customers happy.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant with end-to-end encryption. Your sensitive claim data is protected with bank-level security standards.",
    },
    {
      icon: FileText,
      title: "Detailed Damage Reports",
      description:
        "Generate professional, comprehensive reports with damage mapping, cost estimates, and photographic evidence all in one document.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Capture and process claims directly from mobile devices. Perfect for field adjusters and remote assessments anywhere, anytime.",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics Dashboard",
      description:
        "Track claim patterns, monitor processing times, and gain insights into damage trends with our comprehensive analytics platform.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#0a4586]/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#f9463a]/5 to-transparent rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0a4586]/10 to-[#f9463a]/10 border border-[#0a4586]/20 rounded-full text-[#0a4586] text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4 mr-2" />
            Powerful Features
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0a4586] to-[#f9463a]">
              Perfect Claims
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform delivers all the tools insurers and
            assessors need for accurate, fast, and reliable vehicle damage
            assessment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#0a4586]/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f9463a]/10 to-[#f9463a]/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-[#f9463a]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0a4586] mb-4 group-hover:text-[#0a4586]/80 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#0a4586] to-[#f9463a] rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
