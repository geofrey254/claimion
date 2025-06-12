import React from "react";
import { CheckCircle, Camera, AlertCircle } from "lucide-react";

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "upload":
        return <Camera className="w-4 h-4 text-[#0a4586]" />;
      case "request":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActivityBgColor = (type) => {
    switch (type) {
      case "approved":
        return "bg-green-100";
      case "upload":
        return "bg-blue-100";
      case "request":
        return "bg-yellow-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-full ${getActivityBgColor(
                activity.type
              )}`}
            >
              {getActivityIcon(activity.type)}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {activity.message}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
