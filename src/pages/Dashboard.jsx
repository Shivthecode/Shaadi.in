import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, X, Home, User, Heart, MessageSquare, 
  Settings, LogOut, Search, MapPin, Award, ShieldCheck, 
  CheckCircle2, Briefcase, ChevronLeft, ChevronRight 
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // 🔥 Mobile Sidebar State
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // 🔥 Desktop Sidebar Collapse State
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Mock User Data
  const userData = {
    name: "Aman Singh",
    age: 26,
    profession: "Software Engineer",
    location: "Sant Kabir Nagar, UP",
    isPremium: true,
    profilePic: "https://ik.imagekit.io/rbrxweg2q/crop1.jpg"
  };

  // Mock Matches Data
  const recentMatches = [
    { id: 1, name: "Priya Sharma", age: 24, location: "Gorakhpur, UP", profession: "Teacher", matchPercentage: 92, img: "https://ik.imagekit.io/rbrxweg2q/crop2.jpg" },
    { id: 2, name: "Neha Verma", age: 25, location: "Basti, UP", profession: "Doctor", matchPercentage: 88, img: "https://ik.imagekit.io/rbrxweg2q/crop3.jpg" },
    { id: 3, name: "Kirti Singh", age: 23, location: "Lucknow, UP", profession: "Banker", matchPercentage: 85, img: "https://ik.imagekit.io/rbrxweg2q/couple-about.png" },
  ];

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate('/'); 
  };

  // Scrollbar Hide Class
  const noScrollbar = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      
      {/* ========================================== */}
      {/* 1. SIDEBAR (MOBILE + DESKTOP) */}
      {/* ========================================== */}
      <aside 
        className={`fixed md:relative top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "md:w-20" : "md:w-64"}
        `}
      >
        {/* Sidebar Header (Logo) */}
        <div className={`h-16 flex items-center border-b border-gray-100 shrink-0 transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-6'}`}>
          
          {/* Logo logic based on collapse state */}
          <div className="flex items-baseline overflow-hidden whitespace-nowrap">
            {isCollapsed ? (
              <span className="text-[#e02c5a] text-2xl font-extrabold bg-[#fff0f5] w-10 h-10 flex items-center justify-center rounded-xl">S</span>
            ) : (
              <>
                <span className="text-[#e02c5a] text-2xl font-extrabold tracking-tight">Shaadi</span>
                <span className="text-[#821511] text-lg font-bold">.in</span>
              </>
            )}
          </div>

          {/* Mobile Close Button */}
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-gray-400 hover:text-[#e02c5a] bg-gray-50 p-1.5 rounded-lg">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-1 py-6 space-y-2 overflow-y-auto px-3 ${noScrollbar}`}>
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Search, label: "Matches" },
            { icon: Heart, label: "Shortlisted" },
            { icon: MessageSquare, label: "Messages" },
            { icon: User, label: "My Profile" },
            { icon: Settings, label: "Settings" },
          ].map((item, index) => (
            <button 
              key={index} 
              title={isCollapsed ? item.label : ""} // Tooltip for mini mode
              className={`w-full flex items-center rounded-xl transition-all group
                ${isCollapsed ? 'justify-center py-3' : 'justify-start px-4 py-3 gap-4'}
                ${item.active ? 'bg-[#fff0f5] text-[#e02c5a]' : 'text-gray-500 hover:bg-gray-50 hover:text-[#e02c5a]'}
              `}
            >
              <item.icon size={20} className={`${item.active ? "text-[#e02c5a]" : "group-hover:scale-110 transition-transform"}`} />
              {!isCollapsed && (
                <span className={`font-semibold whitespace-nowrap ${item.active ? 'text-[#e02c5a]' : 'text-gray-600 group-hover:text-[#e02c5a]'}`}>
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Desktop Collapse Toggle & Logout Button */}
        <div className="border-t border-gray-100 p-3 shrink-0 flex flex-col gap-2">
          
          {/* Collapse Toggle (Desktop Only) */}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className={`hidden md:flex items-center text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all py-2.5
              ${isCollapsed ? 'justify-center' : 'justify-start px-4 gap-4'}
            `}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            {!isCollapsed && <span className="font-semibold text-sm">Collapse Menu</span>}
          </button>

          {/* Logout Button */}
          <button 
            onClick={handleLogout} 
            title={isCollapsed ? "Logout" : ""}
            className={`w-full flex items-center rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all group
              ${isCollapsed ? 'justify-center py-3' : 'justify-start px-4 py-3 gap-4'}
            `}
          >
            <LogOut size={20} className="group-hover:text-red-600" />
            {!isCollapsed && <span className="font-semibold text-gray-600 group-hover:text-red-600">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Dark Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/40 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* ========================================== */}
      {/* 2. MAIN CONTENT AREA */}
      {/* ========================================== */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* 🔥 MOBILE TOP APP BAR */}
        <header className="md:hidden h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 shrink-0 z-30 shadow-sm">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMobileOpen(true)} 
              className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <Menu size={24} />
            </button>
            {/* 🔥 Yahan Dashboard ki jagah Local Shaadi.in lagaya hai */}
            <h1 className="text-xl font-bold flex items-baseline">
              <span className="text-[#e02c5a] font-extrabold tracking-tight">LocalShaadi</span>
              <span className="text-[#821511]">.in</span>
            </h1>
          </div>
          
          {/* Mobile Premium Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#fff0f5] to-[#fffbeeb3] px-3 py-1.5 rounded-full border border-[#eab308]/30 shadow-sm">
            <Award size={16} className="text-[#eab308]" />
            <span className="text-xs font-bold text-gray-800">PRO</span>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className={`flex-1 overflow-y-auto p-4 sm:p-8 md:pt-8 ${noScrollbar}`}>
          <div className="max-w-6xl mx-auto">
            
            {/* Desktop Premium Badge (Top Right) */}
            <div className="hidden md:flex justify-end mb-4">
              <div className="flex items-center gap-2 bg-[#fff0f5] px-4 py-2 rounded-full border border-[#e02c5a]/20 shadow-sm">
                <Award size={18} className="text-[#eab308]" />
                <span className="text-sm font-bold text-gray-800">Premium Member</span>
              </div>
            </div>

            {/* --- USER PROFILE SUMMARY CARD --- */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
              
              {userData.isPremium && (
                <div className="absolute top-4 right-[-35px] rotate-45 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white text-[10px] font-bold py-1 px-10 shadow-md">
                  PREMIUM
                </div>
              )}

              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-[#e02c5a] to-[#fbbf24] shrink-0 shadow-inner">
                <img src={userData.profilePic} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
              </div>

              <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center justify-center sm:justify-start gap-2">
                    {userData.name}
                    <ShieldCheck size={24} className="text-blue-500" />
                  </h2>
                </div>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-sm text-gray-500 font-medium mb-5">
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg"><User size={16} className="text-gray-400"/> {userData.age} Yrs</span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg"><MapPin size={16} className="text-gray-400"/> {userData.location}</span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg"><Briefcase size={16} className="text-gray-400"/> {userData.profession}</span>
                </div>

                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <button onClick={() => navigate('/profile-setup')} className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    Edit Profile
                  </button>
                  <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ed2c5b] to-[#c0163e] text-white text-sm font-bold shadow-[0_8px_20px_rgba(224,44,90,0.25)] hover:-translate-y-0.5 transition-transform">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>

            {/* --- MATCHES GRID SECTION --- */}
            <div>
              <div className="flex items-center justify-between mb-6 px-1">
                <h3 className="text-xl font-bold text-gray-800">New Matches For You</h3>
                <button className="text-[#e02c5a] text-sm font-bold hover:underline">View All</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentMatches.map((match) => (
                  <div key={match.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-[0_10px_30px_rgba(224,44,90,0.1)] transition-all duration-300 group">
                    <div className="relative h-64 overflow-hidden">
                      <img src={match.img} alt={match.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span className="text-xs font-bold text-gray-800">{match.matchPercentage}% Match</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-bold text-xl drop-shadow-md">{match.name}, {match.age}</h4>
                        <p className="text-white/90 text-sm flex items-center gap-1 mt-1 drop-shadow-md font-medium">
                          <MapPin size={14} /> {match.location}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 flex gap-3 bg-white">
                      <button className="flex-1 py-3 rounded-xl border-2 border-gray-100 text-gray-500 font-bold hover:bg-gray-50 hover:text-gray-800 transition-colors flex justify-center items-center gap-2">
                        <X size={18} /> Pass
                      </button>
                      <button className="flex-1 py-3 rounded-xl bg-[#e02c5a] text-white font-bold hover:bg-[#c0163e] shadow-md transition-colors flex justify-center items-center gap-2">
                        <Heart size={18} /> Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
};

export default Dashboard;