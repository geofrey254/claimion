import React from "react";
import { User } from "lucide-react";

type PersonalInfoProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    policyNumber: string;
  };
  onInputChange: (field: string, value: string) => void;
};

export default function PersonalInfo({
  formData,
  onInputChange,
}: PersonalInfoProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <User className="w-12 h-12 text-[#f9463a] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#0a4586] mb-2">
          Personal Information
        </h2>
        <p className="text-gray-600">Let{"'"}s start with your basic details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => onInputChange("firstName", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => onInputChange("lastName", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            Policy Number *
          </label>
          <input
            type="text"
            value={formData.policyNumber}
            onChange={(e) => onInputChange("policyNumber", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            placeholder="Enter your insurance policy number"
          />
        </div>
      </div>
    </div>
  );
}
