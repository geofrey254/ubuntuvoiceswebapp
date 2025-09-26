"use client";
import React, { useState } from "react";
import {
  Home,
  Coins,
  Share2,
  Users,
  Settings,
  Bell,
  Menu,
  X,
  Plus,
  Play,
  Heart,
  MessageCircle,
  TrendingUp,
  Award,
  Mic,
} from "lucide-react";

// Header Component
const Header = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Ubuntu Voices</h1>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></span>
        </button>
        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">KM</span>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Coins, label: "My Tokens", href: "/tokens" },
    { icon: Share2, label: "Share Story", href: "/share" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100
        transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0
        transition-transform duration-300 ease-in-out
      `}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="font-semibold text-gray-900">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveItem(item.label)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left
                    transition-colors duration-200
                    ${
                      activeItem === item.label
                        ? "bg-amber-50 text-amber-600 border-r-2 border-amber-400"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

// Token Overview Card
const TokenCard = () => {
  return (
    <div className="bg-amber-400 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Coins className="w-6 h-6" />
          <span className="font-semibold">My Tokens</span>
        </div>
        <TrendingUp className="w-5 h-5 opacity-80" />
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold">2,847</span>
        <span className="ml-2 text-sm opacity-90">CHT</span>
      </div>

      <div className="flex items-center space-x-4 text-sm opacity-90">
        <div className="flex items-center space-x-1">
          <Award className="w-4 h-4" />
          <span>Level 7</span>
        </div>
        <div>
          <span className="text-green-200">+127</span> this week
        </div>
      </div>
    </div>
  );
};

// Share Story Button Component
const ShareStoryButton = () => {
  return (
    <button className="w-full bg-white border-2 border-amber-200 hover:border-amber-300 rounded-xl p-6 transition-all duration-200 hover:shadow-md group">
      <div className="flex items-center justify-center space-x-3">
        <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 rounded-full flex items-center justify-center transition-colors">
          <Plus className="w-6 h-6 text-amber-600" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-gray-900 mb-1">Share Your Story</h3>
          <p className="text-sm text-gray-600">
            Upload oral literature and earn tokens
          </p>
        </div>
      </div>
    </button>
  );
};

// Community Feed Component
const CommunityFeed = () => {
  const stories = [
    {
      id: 1,
      title: "Kikuyu Creation Myth",
      author: "Mary Wanjiku",
      duration: "3:24",
      likes: 45,
      comments: 12,
      thumbnail:
        "https://images.unsplash.com/photo-1594736797933-d0c6e83d7080?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      title: "Luo Fishing Songs",
      author: "John Ochieng",
      duration: "5:12",
      likes: 32,
      comments: 8,
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      title: "Maasai Warrior Tales",
      author: "Samuel Lekishon",
      duration: "4:45",
      likes: 78,
      comments: 23,
      thumbnail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Community Stories
        </h2>
        <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 truncate">
                {story.title}
              </h3>
              <p className="text-sm text-gray-600">
                by {story.author} • {story.duration}
              </p>
            </div>

            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{story.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{story.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Stats Overview Component
const StatsOverview = () => {
  const stats = [
    {
      label: "Stories Shared",
      value: "12",
      icon: Share2,
      color: "text-blue-600",
    },
    {
      label: "Total Listens",
      value: "1,234",
      icon: Play,
      color: "text-green-600",
    },
    {
      label: "Community Rank",
      value: "#47",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-4 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <p className="text-sm text-gray-600">
          © 2025 Ubuntu Voices. Preserving Kenya's oral heritage.
        </p>
        <div className="flex space-x-6 text-sm">
          <button className="text-gray-600 hover:text-amber-600 transition-colors">
            Privacy
          </button>
          <button className="text-gray-600 hover:text-amber-600 transition-colors">
            Terms
          </button>
          <button className="text-gray-600 hover:text-amber-600 transition-colors">
            Support
          </button>
        </div>
      </div>
    </footer>
  );
};

// Main Dashboard Layout
const UbuntuVoicesDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col">
          <Header onToggleSidebar={() => setSidebarOpen(true)} />

          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome back, Kariuki!
                </h1>
                <p className="text-gray-600">
                  Ready to share more stories and connect with your community?
                </p>
              </div>

              {/* Top Row - Token Card and Share Button */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <TokenCard />
                <ShareStoryButton />
              </div>

              {/* Stats Overview */}
              <div className="mb-6">
                <StatsOverview />
              </div>

              {/* Community Feed */}
              <CommunityFeed />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UbuntuVoicesDashboard;
