"use client";
import React, { useState, useRef } from "react";
import StepIndicator from "./StepIndicator";
import PersonalInfo from "./PersonalInfo";
import IncidentDetails from "./IncidentDetails";
import PhotoCapture from "./PhotoCapture";
import ReviewSubmit from "./ReviewSubmit";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ClaimSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    policyNumber: "",

    // Incident Details
    incidentDate: "",
    incidentTime: "",
    location: "",
    description: "",
  });
  const [capturedPhotos, setCapturedPhotos] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const canProceedToNext = (step) => {
    switch (step) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.policyNumber
        );
      case 2:
        return (
          formData.incidentDate &&
          formData.incidentTime &&
          formData.location &&
          formData.description
        );
      case 3:
        const requiredPhotos = [
          "front",
          "rear",
          "side_left",
          "side_right",
          "license",
        ];
        return requiredPhotos.every((req) => capturedPhotos[req]);
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    // Handle final submission
    alert(
      "Claim submitted successfully! You will receive a confirmation email shortly."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <StepIndicator currentStep={currentStep} />

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {currentStep === 1 && (
            <PersonalInfo
              formData={formData}
              onInputChange={handleInputChange}
            />
          )}
          {currentStep === 2 && (
            <IncidentDetails
              formData={formData}
              onInputChange={handleInputChange}
            />
          )}
          {currentStep === 3 && (
            <PhotoCapture
              capturedPhotos={capturedPhotos}
              setCapturedPhotos={setCapturedPhotos}
            />
          )}
          {currentStep === 4 && (
            <ReviewSubmit formData={formData} capturedPhotos={capturedPhotos} />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceedToNext(currentStep)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                  canProceedToNext(currentStep)
                    ? "bg-[#f9463a] text-white hover:bg-red-600 hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg"
              >
                Submit Claim
                <CheckCircle className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
