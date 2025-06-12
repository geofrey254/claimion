import React from "react";
import { AlertCircle, CheckCircle, Eye, Loader } from "lucide-react";

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
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        AI Analysis Results
      </h2>

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
          <p className="text-gray-600 mb-2 font-medium">Analyzing damage...</p>
          <p className="text-sm text-gray-500">
            Our AI is examining your vehicle photo
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                Analysis Complete
              </h3>
            </div>
            <p className="text-gray-600">
              {analysisResults && analysisResults.damageDetected
                ? `We detected ${analysisResults.damageCount} damage area(s) on your vehicle.`
                : "No significant damage detected in this image."}
            </p>
          </div>

          {analysisResults && analysisResults.damageDetected && (
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Detected Damage:</h4>
              {analysisResults.damages.map((damage, index) => (
                <div
                  key={index}
                  className="flex items-start bg-red-50 rounded-lg p-4 border border-red-200"
                >
                  <AlertCircle className="w-5 h-5 text-[#f9463a] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{damage.type}</p>
                    <p className="text-sm text-gray-600">
                      {damage.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
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

          {analysisResults && (
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-gray-800 mb-2">
                Confidence Score
              </h4>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-gradient-to-r from-[#0a4586] to-[#f9463a] h-2 rounded-full"
                    style={{ width: `${analysisResults.confidence}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {analysisResults.confidence}%
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DamageAnalysis;
