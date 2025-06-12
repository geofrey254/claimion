"use client";
import React, { useState } from "react";
import { FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";

// Import components
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import QuickActions from "./QuickActions";
import ClaimsTable from "./ClaimsTable";
import ProfileCard from "./ProfileCard";
import RecentActivity from "./RecentActivity";

const ClaimDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data
  const stats = [
    {
      label: "Total Claims",
      value: "12",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-[#0a4586]",
    },
    {
      label: "Pending Review",
      value: "3",
      icon: Clock,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      label: "Approved",
      value: "8",
      icon: CheckCircle,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      label: "Total Payout",
      value: "$45,200",
      icon: AlertCircle,
      bgColor: "bg-red-100",
      iconColor: "text-[#f9463a]",
    },
  ];

  const claims = [
    {
      id: "CLM001",
      vehicle: "2020 Honda Civic",
      date: "2025-06-10",
      status: "Pending",
      amount: 2500,
    },
    {
      id: "CLM002",
      vehicle: "2019 Toyota Camry",
      date: "2025-06-08",
      status: "Approved",
      amount: 4200,
    },
    {
      id: "CLM003",
      vehicle: "2021 Ford Focus",
      date: "2025-06-05",
      status: "Under Review",
      amount: 1800,
    },
    {
      id: "CLM004",
      vehicle: "2018 BMW X3",
      date: "2025-06-02",
      status: "Approved",
      amount: 6500,
    },
  ];

  const profile = {
    name: "Maina Geofrey",
    email: "mainageoffrey@gmail.com",
    phone: "+254 742 954513",
    memberSince: "2020",
  };

  const activities = [
    {
      type: "approved",
      message: "Claim CLM002 approved",
      time: "2 hours ago",
    },
    {
      type: "upload",
      message: "Photos uploaded for CLM001",
      time: "1 day ago",
    },
    {
      type: "request",
      message: "Additional documents requested",
      time: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <StatsCards stats={stats} />
            <QuickActions />
            <ClaimsTable claims={claims} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProfileCard profile={profile} />
            <RecentActivity activities={activities} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClaimDashboard;
