"use client";
import React, { useState } from "react";
import DamageDetectionHeader from "@/components/aidetector/DamageDetectionHeader";
import PhotoUpload from "@/components/aidetector/PhotoUpload";
import DamageAnalysis from "@/components/aidetector/DamageAnalysis";
import ActionButtons from "@/components/aidetector/ActionButtons";

const AIDeamageDetectionPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  interface DamageDetail {
    type: string;
    description: string;
    severity: string;
  }

  interface AnalysisResults {
    damageDetected: boolean;
    damageCount: number;
    confidence: number;
    damages: DamageDetail[];
  }

  const [analysisResults, setAnalysisResults] =
    useState<AnalysisResults | null>(null);

  const handlePhotoSelect = (photo: string | null) => {
    setSelectedPhoto(photo);
    setAnalysisResults(null);

    // Auto-start analysis when photo is selected
    if (photo) {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisResults({
          damageDetected: true,
          damageCount: 2,
          confidence: 90,
          damages: [
            {
              type: "Front Bumper Scratch",
              description:
                "Deep scratch on front bumper, approximately 8 inches long",
              severity: "Low",
            },
            {
              type: "Headlight Crack",
              description: "Crack in left headlight lens",
              severity: "High",
            },
            {
              type: "Headlight Crack",
              description: "Crack in left headlight lens",
              severity: "High",
            },
            {
              type: "Headlight Crack",
              description: "Crack in left headlight lens",
              severity: "High",
            },
            {
              type: "Headlight Crack",
              description: "Crack in left headlight lens",
              severity: "High",
            },
            {
              type: "Headlight Crack",
              description: "Crack in left headlight lens",
              severity: "High",
            },
          ],
        });
      }, 3000);
    }
  };

  const handleStartNew = () => {
    setSelectedPhoto(null);
    setAnalysisResults(null);
    setIsAnalyzing(false);
  };

  const handleDownloadReport = () => {
    // Simulate report download
    alert("Analysis report downloaded!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DamageDetectionHeader />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <PhotoUpload
            onPhotoSelect={handlePhotoSelect}
            selectedPhoto={selectedPhoto}
          />

          <DamageAnalysis
            isAnalyzing={isAnalyzing}
            analysisResults={analysisResults}
            onStartAnalysis={() => {}}
          />

          <ActionButtons
            hasResults={!!analysisResults}
            onDownloadReport={handleDownloadReport}
            onStartNew={handleStartNew}
          />

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AIDeamageDetectionPage;
