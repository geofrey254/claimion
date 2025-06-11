import React, { useState, useRef } from "react";
import { Camera, Upload, CheckCircle, X, Car, CreditCard } from "lucide-react";
import CameraModal from "./CameraModal";

export default function PhotoCapture({ capturedPhotos, setCapturedPhotos }) {
  const [currentPhotoType, setCurrentPhotoType] = useState(null);
  const [showCameraModal, setShowCameraModal] = useState(false);
  const fileInputRef = useRef(null);

  const photoRequirements = [
    {
      id: "front",
      title: "Front Damage",
      description: "Clear view of front-end damage",
      icon: Car,
      required: true,
    },
    {
      id: "rear",
      title: "Rear Damage",
      description: "Clear view of rear-end damage",
      icon: Car,
      required: true,
    },
    {
      id: "side_left",
      title: "Left Side",
      description: "Full left side of vehicle",
      icon: Car,
      required: true,
    },
    {
      id: "side_right",
      title: "Right Side",
      description: "Full right side of vehicle",
      icon: Car,
      required: true,
    },
    {
      id: "license",
      title: "License Plate",
      description: "Clear, readable license plate",
      icon: CreditCard,
      required: true,
    },
    {
      id: "interior",
      title: "Interior Damage",
      description: "Any interior damage (optional)",
      icon: Car,
      required: false,
    },
  ];

  const handlePhotoCapture = (photoType, method) => {
    setCurrentPhotoType(photoType);
    if (method === "camera") {
      setShowCameraModal(true);
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && currentPhotoType) {
      processPhoto(file);
    }
  };

  const processPhoto = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCapturedPhotos((prev) => ({
        ...prev,
        [currentPhotoType]: {
          file,
          preview: e.target.result,
          timestamp: new Date().toISOString(),
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleCameraCapture = (imageData) => {
    // Convert base64 to file object
    fetch(imageData)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], `${currentPhotoType}_photo.jpg`, {
          type: "image/jpeg",
        });
        processPhoto(file);
      });
    setShowCameraModal(false);
  };

  const removePhoto = (photoType) => {
    setCapturedPhotos((prev) => {
      const updated = { ...prev };
      delete updated[photoType];
      return updated;
    });
  };

  const getCompletedPhotos = () => {
    return photoRequirements.filter((req) => capturedPhotos[req.id]);
  };

  const getRequiredPhotosCount = () => {
    return photoRequirements.filter((req) => req.required).length;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Camera className="w-12 h-12 text-[#f9463a] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#0a4586] mb-2">
          Photo Documentation
        </h2>
        <p className="text-gray-600">
          Capture photos of your vehicle damage ({getCompletedPhotos().length}/
          {getRequiredPhotosCount()} required photos completed)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photoRequirements.map((req) => {
          const photo = capturedPhotos[req.id];
          const IconComponent = req.icon;

          return (
            <div
              key={req.id}
              className={`relative border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                photo
                  ? "border-green-500 bg-green-50"
                  : req.required
                  ? "border-[#f9463a] bg-red-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              {photo && (
                <button
                  onClick={() => removePhoto(req.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <div className="text-center">
                {photo ? (
                  <div className="mb-4">
                    <img
                      src={photo.preview}
                      alt={req.title}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                  </div>
                ) : (
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                      <IconComponent
                        className={`w-12 h-12 ${
                          req.required ? "text-[#f9463a]" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                )}

                <h3 className="font-semibold text-[#0a4586] mb-1">
                  {req.title}
                  {req.required && (
                    <span className="text-[#f9463a] ml-1">*</span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{req.description}</p>

                <div className="space-y-2">
                  <button
                    onClick={() => handlePhotoCapture(req.id, "camera")}
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      photo
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-[#f9463a] text-white hover:bg-red-600"
                    }`}
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    {photo ? "Retake with Camera" : "Take Photo"}
                  </button>

                  <button
                    onClick={() => handlePhotoCapture(req.id, "upload")}
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      photo
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {photo ? "Upload Different" : "Upload Photo"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {showCameraModal && (
        <CameraModal
          onCapture={handleCameraCapture}
          onClose={() => setShowCameraModal(false)}
          photoType={currentPhotoType}
        />
      )}
    </div>
  );
}
