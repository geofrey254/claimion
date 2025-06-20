import React from "react";
import { Camera, Download, LoaderCircle } from "lucide-react";

type ActionButtonsProps = {
  hasResults: boolean;
  onDownloadReport: () => void;
  onStartNew: () => void;
};

const ActionButtons = ({
  hasResults,
  onDownloadReport,
  onStartNew,
}: ActionButtonsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#0a4586] max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Next Steps
      </h2>

      <div className="space-y-4">
        {hasResults && (
          <button
            onClick={onDownloadReport}
            className="w-full flex items-center justify-center bg-[#0a4586] hover:bg-[#0a4586]/70 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Analysis Report
          </button>
        )}

        {hasResults && (
          <button
            onClick={onStartNew}
            className="w-full flex items-center justify-center bg-[#f9463a] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Camera className="w-5 h-5 mr-2" />
            Analyze Another Photo
          </button>
        )}

        {!hasResults && (
          <button
            onClick={onStartNew}
            className="w-full flex items-center justify-center bg-[#f9463a] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            <LoaderCircle className="w-5 h-5 mr-2" />
            Waiting for Analysis Results
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
