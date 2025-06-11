import React from "react";
import { CheckCircle } from "lucide-react";

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center mb-8 mt-12">
      {[1, 2, 3, 4].map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              currentStep >= step
                ? "bg-[#f9463a] border-[#f9463a] text-white"
                : "border-gray-300 text-gray-400"
            }`}
          >
            {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {index < 3 && (
            <div
              className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                currentStep > step ? "bg-[#f9463a]" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
