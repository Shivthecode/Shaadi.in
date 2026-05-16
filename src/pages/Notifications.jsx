import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, MessageSquare, Search, User, Eye, 
  CheckCircle, Home, Bell, Award, MapPin
} from 'lucide-react';

const Notifications = () => {
  const navigate = useNavigate();

  // 🔥 Mock Notifications Data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'view',
      text: 'Neha Verma viewed your profile.',
      time: '10 mins ago',
      isRead: false,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      icon: <Eye size={16} className="text-blue-500" />
    },
    {
      id: 2,
      type: 'match',
      text: 'Congratulations! You have a new 92% match with Anjali Sharma.',
      time: '2 hours ago',
      isRead: false,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      icon: <Heart size={16} className="text-[#e02c5a]" fill="currentColor" />
    },
    {
      id: 3,
      type: 'message',
      text: 'Priya Singh sent you a new message. Upgrade to premium to read it.',
      time: '5 hours ago',
      isRead: true,
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      icon: <MessageSquare size={16} className="text-green-500" />
    },
    {
      id: 4,
      type: 'system',
      text: 'Your profile is getting 4x more views. Keep your details updated!',
      time: '1 day ago',
      isRead: true,
      img: null,
      icon: <Award size={24} className="text-yellow-500" />
    },
    {
      id: 5,
      type: 'shortlist',
      text: 'Someone from Delhi shortlisted your profile.',
      time: '2 days ago',
      isRead: true,
      img: null,
      icon: <StarIcon /> // Using custom star since imported icons are limited above
    }
  ]);

  // Read/Unread Logic
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const hideScrollbar = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans pb-24 md:pb-20 relative ${hideScrollbar}`}>
      
      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50 shadow-sm">
        {/* Hamburger Menu Removed */}
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <Heart size={24} className="text-[#e02c5a]" fill="currentColor" />
          <h1 className="text-xl font-bold flex items-baseline">
            <span className="text-gray-900 tracking-tight">LocalShaadi</span>
            <span className="text-gray-900 text-[10px]">.com</span>
          </h1>
        </div>
        <div className="relative">
          <Bell size={24} className="text-gray-800" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
              {unreadCount}
            </span>
          )}
        </div>
      </div>

      {/* ================= DESKTOP TOP NAVBAR ================= */}
      <nav className="hidden md:block bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <Heart size={28} className="text-[#e02c5a]" fill="currentColor" />
            <h1 className="text-xl font-bold flex items-baseline">
              <span className="text-gray-900 tracking-tight">LocalShaadi</span>
              <span className="text-gray-900 text-sm">.com</span>
            </h1>
          </div>
          <div className="flex items-center gap-8 font-medium text-gray-700">
            <button onClick={() => navigate('/dashboard')} className="hover:text-[#e02c5a] py-7 transition-colors">Home</button>
            <button onClick={() => navigate('/matches')} className="hover:text-[#e02c5a] py-7 transition-colors">Matches</button>
            
            {/* 🔥 Highlighted Notifications Tab */}
            <button className="text-[#e02c5a] border-b-2 border-[#e02c5a] py-7 transition-colors flex items-center gap-1 relative">
              Notifications
              {unreadCount > 0 && (
                <span className="bg-[#e02c5a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full -mt-3 absolute -right-4 top-5">
                  {unreadCount}
                </span>
              )}
            </button>
            <button className="hover:text-[#e02c5a] py-7 transition-colors">Premium</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input type="text" placeholder="Search name, ID..." className="pl-10 pr-4 py-2 w-56 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:bg-white focus:border-[#e02c5a] transition-all" />
            </div>
            <button onClick={() => navigate('/final-profile')} className="flex items-center gap-2 bg-[#e02c5a] hover:bg-[#c0163e] text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm shrink-0">
              <User size={18} /><span>My Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MAIN CONTENT (NOTIFICATIONS FEED) ================= */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
              Notifications
              {unreadCount > 0 && (
                <span className="bg-[#e02c5a] text-white text-xs font-bold px-2 py-1 rounded-md">{unreadCount} New</span>
              )}
            </h1>
            <p className="text-gray-500 text-sm mt-1">Stay updated with your profile activity.</p>
          </div>
          
          {unreadCount > 0 && (
            <button onClick={markAllAsRead} className="text-sm font-bold text-[#e02c5a] hover:underline flex items-center gap-1">
              <CheckCircle size={16} /> Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              onClick={() => markAsRead(notif.id)}
              className={`p-4 sm:p-5 rounded-2xl flex items-start gap-4 border transition-all cursor-pointer shadow-sm
                ${notif.isRead ? 'bg-white border-gray-100 hover:bg-gray-50' : 'bg-[#fff0f5] border-[#e02c5a]/20'}
              `}
            >
              
              {/* Avatar / Icon */}
              <div className="relative shrink-0">
                {notif.img ? (
                  <img src={notif.img} alt="User" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white shadow-sm flex items-center justify-center">
                    {notif.icon}
                  </div>
                )}
                
                {/* Small overlay icon if image is present */}
                {notif.img && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-gray-100">
                    {notif.icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className={`text-sm md:text-[15px] ${notif.isRead ? 'text-gray-700 font-medium' : 'text-gray-900 font-bold'}`}>
                  {notif.text}
                </p>
                <span className="text-xs text-gray-500 font-medium mt-1.5 block">
                  {notif.time}
                </span>
              </div>

              {/* Unread Indicator Dot */}
              {!notif.isRead && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#e02c5a] mt-2 shrink-0 shadow-sm"></div>
              )}

            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-20">
            <Bell size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">No notifications yet</h3>
            <p className="text-gray-500 text-sm">When you get matches or profile views, they'll show up here.</p>
          </div>
        )}

      </div>

      {/* ================= BOTTOM NAVIGATION BAR (Mobile Only) ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-[72px] z-50 px-2 pb-2">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-gray-900">
          <Home size={22} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-gray-900">
          <Search size={22} />
          <span className="text-[10px] font-medium">Search</span>
        </button>
        <button onClick={() => navigate('/matches')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-gray-900">
          <Heart size={22} />
          <span className="text-[10px] font-medium">Matches</span>
        </button>
        
        {/* 🔥 Highlighted Notifications Mobile Tab */}
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-[#e02c5a] relative">
          <Bell size={22} fill="currentColor" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {unreadCount}
            </span>
          )}
          <span className="text-[10px] font-bold">Notifs</span>
        </button>
        
        <button onClick={() => navigate('/final-profile')} className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-900 w-16">
          <User size={22} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>

    </div>
  );
};

// Custom Star Icon component
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-purple-500">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default Notifications;