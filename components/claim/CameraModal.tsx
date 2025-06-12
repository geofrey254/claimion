import React, { useRef, useEffect, useState } from "react";
import { Camera, X, RotateCcw, Check } from "lucide-react";
import Image from "next/image";

export default function CameraModal({ onCapture, onClose, photoType }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      setError(
        "Camera access denied or not available. Please use the upload option instead."
      );
      console.error("Error accessing camera:", err);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to base64
    const imageData = canvas.toDataURL("image/jpeg", 0.8);
    setCapturedImage(imageData);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const confirmCapture = () => {
    if (capturedImage) {
      onCapture(capturedImage);
    }
  };

  const handleClose = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-[#0a4586]">
            Capture {photoType?.replace("_", " ")} Photo
          </h3>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          {error ? (
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">
                <Camera className="w-12 h-12 mx-auto mb-2" />
                <p>{error}</p>
              </div>
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
                {capturedImage ? (
                  <Image
                    width={1280}
                    height={720}
                    src={capturedImage}
                    alt="Captured"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>

              <div className="flex justify-center space-x-4">
                {!capturedImage ? (
                  <button
                    onClick={capturePhoto}
                    className="px-6 py-3 bg-[#f9463a] text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Capture
                  </button>
                ) : (
                  <>
                    <button
                      onClick={retakePhoto}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Retake
                    </button>
                    <button
                      onClick={confirmCapture}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Use Photo
                    </button>
                  </>
                )}
              </div>

              <div className="text-center text-sm text-gray-600">
                <p>
                  Position your device to clearly capture the{" "}
                  {photoType?.replace("_", " ")} area
                </p>
                <p>Make sure the image is well-lit and in focus</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
