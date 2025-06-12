import React from "react";
import { Camera, Upload, FileText } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="group bg-gradient-to-r from-[#f9463a] to-red-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <Camera className="w-8 h-8 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold">New Claim</span>
        </button>
        <button className="group bg-gradient-to-r from-[#0a4586] to-blue-700 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <Upload className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-semibold">Upload Photos</span>
        </button>
        <button className="group bg-gradient-to-r from-gray-600 to-gray-700 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <FileText className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-semibold">View Reports</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
