import React from "react";
import { AlertCircle } from "lucide-react";

type IncidentDetailsProps = {
  formData: {
    incidentDate: string;
    incidentTime: string;
    location: string;
    description: string;
  };
  onInputChange: (field: string, value: string) => void;
};

export default function IncidentDetails({
  formData,
  onInputChange,
}: IncidentDetailsProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <AlertCircle className="w-12 h-12 text-[#f9463a] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#0a4586] mb-2">
          Incident Details
        </h2>
        <p className="text-gray-600">Tell us what happened</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#0a4586] mb-2">
              Date of Incident *
            </label>
            <input
              type="date"
              value={formData.incidentDate}
              onChange={(e) => onInputChange("incidentDate", e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a4586] mb-2">
              Time of Incident *
            </label>
            <input
              type="time"
              value={formData.incidentTime}
              onChange={(e) => onInputChange("incidentTime", e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            Location *
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => onInputChange("location", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors"
            placeholder="Street address or intersection where incident occurred"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a4586] mb-2">
            Description of Incident *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => onInputChange("description", e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f9463a] focus:outline-none transition-colors resize-none"
            placeholder="Please describe what happened in detail..."
          />
        </div>
      </div>
    </div>
  );
}
