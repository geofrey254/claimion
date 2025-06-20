import React, { useState } from "react";
import { AlertCircle, CheckCircle, Eye, Loader, X } from "lucide-react";

interface Damage {
  type: string;
  description: string;
  severity: "High" | "Medium" | "Low";
}

interface AnalysisResults {
  damageDetected: boolean;
  damageCount: number;
  damages: Damage[];
  confidence: number;
}

interface DamageAnalysisProps {
  isAnalyzing: boolean;
  analysisResults: AnalysisResults | null;
  onStartAnalysis: () => void;
}

const DamageAnalysis: React.FC<DamageAnalysisProps> = ({
  isAnalyzing,
  analysisResults,
  onStartAnalysis,
}) => {
  const [showModal, setShowModal] = useState(false);

  // Show modal automatically when analysis completes
  React.useEffect(() => {
    if (analysisResults && !isAnalyzing) {
      setShowModal(true);
    }
  }, [analysisResults, isAnalyzing]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#0a4586] max-w-2xl">
        {!isAnalyzing && !analysisResults ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-6">
              Upload a photo to start AI analysis
            </p>
            <button
              onClick={onStartAnalysis}
              disabled={true}
              className="bg-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
            >
              Analyze Damage
            </button>
          </div>
        ) : isAnalyzing ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4586] to-[#f9463a] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Loader className="w-8 h-8 text-white animate-spin" />
            </div>
            <p className="text-gray-600 mb-2 font-medium">
              Analyzing damage...
            </p>
            <p className="text-sm text-gray-500">
              Our AI is examining your vehicle photo
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600 mb-4 font-medium">Analysis Complete!</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              View Results
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#0a4586]/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
                Analysis Results
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Summary */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    Analysis Summary
                  </h4>
                </div>
                <p className="text-gray-600">
                  {analysisResults && analysisResults.damageDetected
                    ? `We detected ${analysisResults.damageCount} damage area(s) on your vehicle.`
                    : "No significant damage detected in this image."}
                </p>
              </div>

              {/* Damage Details */}
              {analysisResults && analysisResults.damageDetected && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Detected Damage:
                  </h4>
                  {analysisResults.damages.map((damage, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-red-50 rounded-lg p-4 border border-red-200"
                    >
                      <AlertCircle className="w-5 h-5 text-[#f9463a] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {damage.type}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {damage.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Severity:{" "}
                          <span
                            className={`font-medium ${
                              damage.severity === "High"
                                ? "text-red-600"
                                : damage.severity === "Medium"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                          >
                            {damage.severity}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Confidence Score */}
              {analysisResults && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Confidence Score
                  </h4>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                      <div
                        className="bg-gradient-to-r from-[#0a4586] to-[#f9463a] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${analysisResults.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 min-w-[3rem]">
                      {analysisResults.confidence}%
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DamageAnalysis;
