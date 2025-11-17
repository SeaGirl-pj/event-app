import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Edit,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  Heart,
  Settings,
  Link2,
  ChevronRight,
  Zap,
  BarChart3,
  BookOpen,
  Globe,
  Phone,
} from "lucide-react";

interface ProfilePageModularProps {
  onNavigate?: (page: string) => void;
}

export function ProfilePageModular({ onNavigate }: ProfilePageModularProps) {
  const profileSections = [
    {
      id: "social-links",
      title: "Social & Professional Links",
      description: "LinkedIn, Twitter, portfolio, website",
      icon: Link2,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
      action: "Manage",
    },
    {
      id: "professional-background",
      title: "Professional Background",
      description: "Work experience, education, certifications",
      icon: Briefcase,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      action: "Update",
    },
    {
      id: "contact-info",
      title: "Contact Information",
      description: "Email, phone, location preferences",
      icon: Phone,
      color: "text-green-600",
      bgColor: "bg-green-100",
      action: "Edit",
    },
    {
      id: "interests",
      title: "Interests & Topics",
      description: "Your areas of interest and expertise",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      action: "Customize",
    },
    {
      id: "event-preferences",
      title: "Event Preferences",
      description: "Types, formats, and scheduling preferences",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      action: "Set",
    },
  ];

  const dashboardModules = [
    {
      id: "matchmaking",
      title: "Connection Matchmaking",
      description: "AI-powered connection recommendations",
      icon: Users,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
      badge: "3 New",
      badgeColor: "bg-[#FF7A33]",
      page: "connection-matchmaking",
    },
    {
      id: "calendar",
      title: "Event Calendar",
      description: "Your upcoming events and schedule",
      icon: Calendar,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
      badge: "5 Events",
      badgeColor: "bg-[#1D6FD8]",
      page: "event-calendar",
    },
    {
      id: "analysis",
      title: "Profile Analysis",
      description: "Insights and improvement suggestions",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      badge: "85%",
      badgeColor: "bg-purple-600",
      page: "profile-analysis",
    },
    {
      id: "skills",
      title: "Skills & Interests",
      description: "Manage your professional skills",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
      badge: "12 Skills",
      badgeColor: "bg-green-600",
      page: "skills-interests",
    },
    {
      id: "saved-events",
      title: "Saved Events",
      description: "Events you're interested in",
      icon: BookOpen,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      badge: "8 Saved",
      badgeColor: "bg-pink-600",
      page: "saved-events",
    },
    {
      id: "networking",
      title: "Networking Dashboard",
      description: "Your connections and network growth",
      icon: Globe,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      badge: "34 Connections",
      badgeColor: "bg-yellow-600",
      page: "networking-dashboard",
    },
    {
      id: "ai-recommendations",
      title: "AI Recommendations",
      description: "Personalized event and connection suggestions",
      icon: Sparkles,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      badge: "New",
      badgeColor: "bg-indigo-600",
      page: "ai-recommendations",
    },
    {
      id: "event-insights",
      title: "Event Insights",
      description: "Your event attendance patterns and stats",
      icon: BarChart3,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      badge: "View",
      badgeColor: "bg-cyan-600",
      page: "event-insights",
    },
  ];

  const stats = [
    { label: "Events Attended", value: "12", icon: Calendar, color: "text-[#FF7A33]" },
    { label: "Connections", value: "34", icon: Users, color: "text-[#1D6FD8]" },
    { label: "Badges Earned", value: "8", icon: Award, color: "text-purple-600" },
    { label: "Profile Score", value: "85%", icon: TrendingUp, color: "text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8]"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
              <div className="flex items-end gap-4 mb-4 md:mb-0">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-3xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="mb-2">
                  <h1 className="mb-1">John Doe</h1>
                  <div className="flex flex-wrap gap-3 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Profile Completeness and Stats Row */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Profile Completeness - Reduced Width */}
              <Card 
                className="flex-1 p-4 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate && onNavigate("profile-details")}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#FF7A33]" />
                    <span>Profile Completeness</span>
                  </div>
                  <span className="text-[#FF7A33]">85%</span>
                </div>
                <Progress value={85} className="h-2 mb-2" />
                <p className="text-sm text-gray-600">
                  Add your skills and networking goals to complete your profile
                </p>
              </Card>

              {/* Stats Cards - Horizontal Row */}
              <div className="flex-1 flex flex-row gap-3 overflow-x-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const bgColor = stat.color === "text-[#FF7A33]" ? "bg-[#FF7A33]/10" : 
                                 stat.color === "text-[#1D6FD8]" ? "bg-[#1D6FD8]/10" :
                                 stat.color === "text-purple-600" ? "bg-purple-100" :
                                 "bg-green-100";
                  return (
                    <Card
                      key={index}
                      className="flex-1 min-w-[25%] p-4 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
                    >
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A33]/5 to-[#1D6FD8]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <h4 className="text-sm mb-1 group-hover:text-[#FF7A33] transition-colors">
                          {stat.label}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {stat.value}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className="p-6 bg-gradient-to-br from-[#FF7A33]/10 to-[#FF9966]/10 border-[#FF7A33]/20 hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => onNavigate && onNavigate("ai-insights")}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#FF9966] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="mb-1">Get AI Insights</h4>
                <p className="text-sm text-gray-600">
                  Personalized profile recommendations
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>

          
        </div>
      </div>
    </div>
  );
}