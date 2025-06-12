import React from "react";
import { User, Mail, Phone, Calendar } from "lucide-react";

interface Profile {
  name: string;
  email: string;
  phone: string;
  memberSince: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-gradient-to-br from-[#0a4586] to-blue-700 p-3 rounded-full">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{profile.name}</h3>
          <p className="text-gray-600">Policy Holder</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-3 text-[#f9463a]" />
          <span className="text-sm">{profile.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-3 text-[#f9463a]" />
          <span className="text-sm">{profile.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-3 text-[#f9463a]" />
          <span className="text-sm">Member since {profile.memberSince}</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Policy Status</span>
          <span className="text-green-600 font-semibold">Active</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
