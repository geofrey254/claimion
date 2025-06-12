import React, { useState, useRef } from "react";
import { Camera, Upload, Images, X, RotateCcw } from "lucide-react";
import Image from "next/image";

interface PhotoUploadProps {
  onPhotoSelect: (photo: string | null) => void;
  selectedPhoto: string | null;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  onPhotoSelect,
  selectedPhoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          onPhotoSelect(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleCameraCapture = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Upload Vehicle Photo
      </h2>

      {!selectedPhoto ? (
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
            dragActive
              ? "border-[#f9463a] bg-red-50"
              : "border-gray-300 hover:border-[#0a4586] hover:bg-blue-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4586] to-[#f9463a] rounded-full flex items-center justify-center">
              <Images className="w-8 h-8 text-white" />
            </div>

            <div className="text-gray-600">
              <p className="text-lg font-medium mb-2">
                Drag and drop your photo here
              </p>
              <p className="text-sm text-gray-500">
                or choose from the options below
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleCameraCapture}
                className="flex items-center justify-center bg-[#f9463a] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Camera className="w-5 h-5 mr-2" />
                Take Photo
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center bg-[#0a4586] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload File
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <Image
              width={640}
              height={480}
              src={selectedPhoto}
              alt="Selected vehicle"
              className="w-full max-h-96 object-contain rounded-lg border-2 border-gray-200"
            />
            <button
              onClick={() => onPhotoSelect(null)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Change Photo
            </button>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileInput}
        className="hidden"
      />
    </div>
  );
};

export default PhotoUpload;
