import React from "react";
import { Eye } from "lucide-react";

const DamageDetectionHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#0a4586] to-[#0a4586] text-white pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <Eye className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">AI-Powered Analysis</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Damage Detection
        </h1>
        <p className="text-xl text-gray-100/90 max-w-2xl mx-auto">
          Upload or capture photos of your vehicle and let our AI instantly
          detect and analyze damage
        </p>
      </div>
    </div>
  );
};

export default DamageDetectionHeader;
