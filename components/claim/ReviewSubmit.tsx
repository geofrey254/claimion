import React from "react";
import {
  Shield,
  User,
  AlertCircle,
  Camera,
  Car,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  policyNumber: string;
  incidentDate: string;
  incidentTime: string;
  location: string;
  description: string;
}

interface CapturedPhoto {
  preview: string;
  // add other properties if needed
}

interface ReviewSubmitProps {
  formData: FormData;
  capturedPhotos: Record<string, CapturedPhoto>;
}

export default function ReviewSubmit({
  formData,
  capturedPhotos,
}: ReviewSubmitProps) {
  const photoRequirements = [
    { id: "front", title: "Front Damage", icon: Car },
    { id: "rear", title: "Rear Damage", icon: Car },
    { id: "side_left", title: "Left Side", icon: Car },
    { id: "side_right", title: "Right Side", icon: Car },
    { id: "license", title: "License Plate", icon: CreditCard },
    { id: "interior", title: "Interior Damage", icon: Car },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-[#f9463a] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#0a4586] mb-2">
          Review & Submit
        </h2>
        <p className="text-gray-600">
          Please review your claim before submission
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal Information Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-[#0a4586] mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600">Name:</span>
              <span className="ml-2 font-medium">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <span className="ml-2 font-medium">{formData.email}</span>
            </div>
            <div>
              <span className="text-gray-600">Phone:</span>
              <span className="ml-2 font-medium">{formData.phone}</span>
            </div>
            <div>
              <span className="text-gray-600">Policy #:</span>
              <span className="ml-2 font-medium">{formData.policyNumber}</span>
            </div>
          </div>
        </div>

        {/* Incident Details Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-[#0a4586] mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Incident Details
          </h3>
          <div className="space-y-2">
            <div>
              <span className="text-gray-600">Date & Time:</span>
              <span className="ml-2 font-medium">
                {formData.incidentDate} at {formData.incidentTime}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Location:</span>
              <span className="ml-2 font-medium">{formData.location}</span>
            </div>
            <div>
              <span className="text-gray-600">Description:</span>
              <p className="mt-1 text-gray-800">{formData.description}</p>
            </div>
          </div>
        </div>

        {/* Photos Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-[#0a4586] mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Photos ({Object.keys(capturedPhotos).length} uploaded)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(capturedPhotos).map(([type, photo]) => {
              const req = photoRequirements.find((r) => r.id === type);
              return (
                <div key={type} className="text-center">
                  <Image
                    width={320}
                    height={180}
                    src={photo.preview}
                    alt={req?.title || "Uploaded photo"}
                    className="w-full h-20 object-cover rounded-lg mb-1"
                  />
                  <p className="text-xs text-gray-600">{req?.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">
                Secure Submission
              </h4>
              <p className="text-blue-700 text-sm">
                Your claim will be securely transmitted and processed by our AI
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
