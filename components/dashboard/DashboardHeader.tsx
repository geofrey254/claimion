import React from "react";
import { Shield } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-[#0a4586] to-[#0a4586]/90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-6 md:pt-28 md:pb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-[#f9463a] p-2 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Claim Dashboard</h1>
              <p className="text-blue-100">Manage your vehicle damage claims</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-sm font-medium">Claims Portal</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
