import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, MessageSquare, Search, ChevronDown, User, 
  Camera, Eye, Star, CheckCircle, Home,
  Bell, Filter, SlidersHorizontal, MapPin
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock User Data
  const userData = {
    name: "Rahul Verma",
    age: 27,
    location: "Lucknow, Uttar Pradesh",
    religion: "Hindu",
    caste: "Kshatriya",
    profession: "Software Engineer",
    profilePic: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    stats: {
      views: 125,
      matches: 18,
      notifications: '12', 
      shortlisted: '07',
      whoViewed: 15
    }
  };

  // Mock Matches Data
  const recommendedProfiles = [
    { 
      id: 1, name: "Anjali Sharma", age: 25, location: "Jaipur, Rajasthan", 
      religion: "Hindu", caste: "Brahmin", profession: "Software Engineer", salary: "₹ 6 LPA", 
      isOnline: true, pics: 5, 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 2, name: "Rahul Verma", age: 27, location: "Lucknow, Uttar Pradesh", 
      religion: "Hindu", caste: "Kshatriya", profession: "Software Engineer", salary: "₹ 7 LPA", 
      isOnline: true, pics: 4, 
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 3, name: "Priya Singh", age: 24, location: "Delhi", 
      religion: "Hindu", caste: "Baniya", profession: "Doctor", salary: "₹ 8 LPA", 
      isOnline: true, pics: 6, 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 4, name: "Vikram Patel", age: 28, location: "Surat, Gujarat", 
      religion: "Hindu", caste: "Patel", profession: "Business Analyst", salary: "₹ 5.5 LPA", 
      isOnline: false, pics: 3, 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 5, name: "Neha Verma", age: 24, location: "Indore, Madhya Pradesh", 
      religion: "Hindu", caste: "Vaishya", profession: "Chartered Accountant", salary: "₹ 6.5 LPA", 
      isOnline: true, pics: 3, 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 6, name: "Aman Gupta", age: 26, location: "Mumbai, Maharashtra", 
      religion: "Hindu", caste: "Kayastha", profession: "Marketing Executive", salary: "₹ 6 LPA", 
      isOnline: false, pics: 4, 
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
  ];

  // Helper class for hiding scrollbars
  const hideScrollbar = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans pb-24 md:pb-20 ${hideScrollbar}`}>
      
      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50 shadow-sm">
        {/* Hamburger Menu Removed Here */}
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <Heart size={24} className="text-[#e02c5a]" fill="currentColor" />
          <h1 className="text-xl font-bold flex items-baseline">
            <span className="text-gray-900 tracking-tight">LocalShaadi</span>
            <span className="text-gray-900 text-[10px]">.com</span>
          </h1>
        </div>
        
        <button onClick={() => navigate('/notifications')} className="relative focus:outline-none">
          <Bell size={24} className="text-gray-800" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">3</span>
        </button>
      </div>

      {/* ================= DESKTOP TOP NAVBAR ================= */}
      <nav className="hidden md:block bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <Heart size={28} className="text-[#e02c5a]" fill="currentColor" />
            <h1 className="text-xl font-bold flex items-baseline">
              <span className="text-gray-900 tracking-tight">LocalShaadi</span>
              <span className="text-gray-900 text-sm">.com</span>
            </h1>
          </div>
          
          {/* Menu Links */}
          <div className="flex items-center gap-8 font-medium text-gray-700">
            <a href="#" className="text-[#e02c5a] border-b-2 border-[#e02c5a] py-7">Home</a>
            
            <button onClick={() => navigate('/matches')} className="hover:text-[#e02c5a] py-7 transition-colors">Matches</button>
            
            <button onClick={() => navigate('/notifications')} className="hover:text-[#e02c5a] py-7 transition-colors flex items-center gap-1 relative focus:outline-none">
              Notifications
              <span className="bg-[#e02c5a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full -mt-3 absolute -right-4 top-5">3</span>
            </button>
            <a href="#" className="hover:text-[#e02c5a] py-7 transition-colors">Premium</a>
          </div>
          
          {/* Search & Profile Container (Right Aligned) */}
          <div className="flex items-center gap-4">
            {/* Search Input right before profile button */}
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search name, ID..." 
                className="pl-10 pr-4 py-2 w-56 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:bg-white focus:border-[#e02c5a] focus:ring-2 focus:ring-[#e02c5a]/20 transition-all"
              />
            </div>

            {/* Profile Button */}
            <button onClick={() => navigate('/final-profile')} className="flex items-center gap-2 bg-[#e02c5a] hover:bg-[#c0163e] text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm shrink-0">
              <User size={18} />
              <span>My Profile</span>
            </button>
          </div>
          
        </div>
      </nav>

      {/* ================= DESKTOP HERO SECTION ================= */}
      <div className="hidden md:block relative bg-gradient-to-r from-[#fff0f5] to-[#fce4ec] pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 mix-blend-multiply pointer-events-none" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')", backgroundSize: 'cover', backgroundPosition: 'right center', maskImage: 'linear-gradient(to right, transparent, black)' }}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">Find Your Perfect</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e02c5a] mb-6 font-serif">Life Partner</h2>
          <p className="text-gray-700 text-lg max-w-md leading-relaxed">Trusted by thousands of families.<br/>Join Local Shaadi and find your<br/>perfect match today.</p>
        </div>
      </div>

      {/* ================= DESKTOP FLOATING FILTER BAR ================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-12 z-20 mb-8">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 border border-gray-100 flex items-center gap-4">
          <div className="flex-1 border-r border-gray-100 pr-4">
            <label className="text-xs text-gray-500 font-medium block mb-1">Looking for</label>
            <div className="flex items-center justify-between"><span className="font-semibold text-gray-800">Bride</span><ChevronDown size={16} className="text-gray-400" /></div>
          </div>
          <div className="flex-1 border-r border-gray-100 px-4">
            <label className="text-xs text-gray-500 font-medium block mb-1">Age</label>
            <div className="flex items-center justify-between"><span className="font-semibold text-gray-800">18 - 30</span><ChevronDown size={16} className="text-gray-400" /></div>
          </div>
          <div className="flex-1 border-r border-gray-100 px-4">
            <label className="text-xs text-gray-500 font-medium block mb-1">Location</label>
            <div className="flex items-center justify-between"><span className="font-semibold text-gray-800">Select Location</span><ChevronDown size={16} className="text-gray-400" /></div>
          </div>
          <div className="flex-1 px-4">
            <label className="text-xs text-gray-500 font-medium block mb-1">Religion</label>
            <div className="flex items-center justify-between"><span className="font-semibold text-gray-800">Select Religion</span><ChevronDown size={16} className="text-gray-400" /></div>
          </div>
          <div className="pl-4">
            <button className="bg-[#e02c5a] hover:bg-[#c0163e] text-white px-8 py-3.5 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-sm">
              <Filter size={18} /> Apply
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE SEARCH & FILTERS ================= */}
      <div className="md:hidden px-4 pt-4 pb-2 bg-white">
        <div className="relative mb-4">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name, location, profession..." 
            className="w-full pl-12 pr-12 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none shadow-sm text-gray-700" 
          />
          <Filter size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e02c5a]" />
        </div>
        
        <div className={`flex overflow-x-auto gap-2.5 pb-2 ${hideScrollbar}`}>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-[#e02c5a] rounded-xl text-[#e02c5a] font-medium text-sm whitespace-nowrap">
            <User size={16}/> Bride
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 font-medium text-sm whitespace-nowrap bg-white shadow-sm">
            Age <ChevronDown size={14}/>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 font-medium text-sm whitespace-nowrap bg-white shadow-sm">
            Location <ChevronDown size={14}/>
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 font-medium text-sm whitespace-nowrap bg-white shadow-sm">
            Religion <ChevronDown size={14}/>
          </button>
          <button className="flex items-center justify-center px-3 py-2 border border-gray-200 rounded-xl text-gray-700 bg-white shadow-sm shrink-0">
            <SlidersHorizontal size={18}/>
          </button>
        </div>
      </div>

      {/* ================= MAIN CONTENT TWO COLUMNS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2 md:mt-0">
        
        {/* LEFT COLUMN: RECOMMENDED PROFILES */}
        <div className="lg:col-span-2 space-y-3 md:space-y-4">
          
          <div className="flex items-center justify-between mb-2 md:mb-4 px-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
              Recommended Profiles
              <Heart size={18} className="hidden md:block text-[#e02c5a]" />
            </h3>
            <button className="hidden md:flex text-sm text-gray-600 font-medium items-center gap-1 hover:text-gray-900 transition-colors">
              Sort by: Recently Joined <ChevronDown size={16} />
            </button>
            <button onClick={() => navigate('/matches')} className="md:hidden text-sm font-bold text-[#e02c5a]">
              View All
            </button>
          </div>

          {/* Profile Cards Loop */}
          {recommendedProfiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-2xl p-3 sm:p-5 shadow-sm border border-gray-100 flex flex-row gap-3 sm:gap-5 hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/matches')}>
              
              <div className="relative w-[100px] sm:w-36 h-[130px] sm:h-[180px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
                <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-1.5 left-1.5">
                  <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md text-white border border-white/20 backdrop-blur-sm ${profile.isOnline ? 'bg-green-500/90' : 'bg-gray-500/90'}`}>
                    {profile.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-1 py-0.5 rounded border border-white/20">
                  <Camera size={10} /> {profile.pics}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center py-1">
                <h4 className="text-[15px] sm:text-lg font-bold text-gray-900 flex items-center gap-1 mb-1">
                  {profile.name}
                  <CheckCircle size={14} className="text-[#e02c5a] bg-white rounded-full shrink-0" fill="currentColor" />
                </h4>
                
                <div className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-sm text-gray-600 font-medium">
                  <p className="truncate">{profile.age}, {profile.location}</p>
                  <p className="truncate">{profile.religion} • {profile.caste}</p>
                  <p className="truncate">{profile.profession} • {profile.salary}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-end gap-2 sm:gap-3 pl-1">
                <button className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-[#e02c5a] hover:bg-[#fff0f5] transition-all shadow-sm" onClick={(e) => { e.stopPropagation(); navigate('/matches'); }}>
                  <Heart size={18} className="sm:w-5 sm:h-5" />
                </button>
                <button className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-[#e02c5a] hover:border-[#e02c5a] transition-all shadow-sm" onClick={(e) => { e.stopPropagation(); navigate('/matches'); }}>
                  <MessageSquare size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              
            </div>
          ))}

          <div className="hidden md:flex pt-6 pb-10 justify-center">
            <button onClick={() => navigate('/matches')} className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#e02c5a]/20 text-[#e02c5a] font-bold hover:bg-[#fff0f5] transition-colors">
              View More Profiles <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: MY PROFILE WIDGET */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">
            <h3 className="text-xl font-bold text-gray-900 mb-6">My Profile</h3>
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-28 h-28 mb-4">
                <img src={userData.profilePic} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-[#fff0f5]" />
                <button className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md text-[#e02c5a] border border-gray-100 hover:bg-gray-50 transition-colors">
                  <Camera size={14} />
                </button>
              </div>
              <h4 className="text-xl font-bold text-gray-900 flex items-center gap-1 mb-1">
                {userData.name}
                <CheckCircle size={18} className="text-[#e02c5a] bg-white rounded-full" fill="currentColor" />
              </h4>
              <div className="text-sm text-gray-600 text-center font-medium space-y-1">
                <p>{userData.age}, {userData.location}</p>
                <p>{userData.religion} • {userData.caste}</p>
                <p>{userData.profession}</p>
              </div>
            </div>
            <hr className="border-gray-100 mb-6" />
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="flex items-center gap-3 text-gray-700"><Eye size={18} className="text-gray-400" /> Profile Views</span>
                <span className="text-gray-900 font-bold">{userData.stats.views}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="flex items-center gap-3 text-gray-700"><Heart size={18} className="text-[#e02c5a]" /> Matches</span>
                <span className="text-gray-900 font-bold">{userData.stats.matches}</span>
              </div>
              
              <button onClick={() => navigate('/notifications')} className="w-full flex items-center justify-between text-sm font-medium focus:outline-none hover:text-[#e02c5a] transition-colors group">
                <span className="flex items-center gap-3 text-gray-700 group-hover:text-[#e02c5a]"><Bell size={18} className="text-gray-400 group-hover:text-[#e02c5a]" /> Notifications</span>
                <span className="text-gray-900 font-bold group-hover:text-[#e02c5a]">{userData.stats.notifications}</span>
              </button>
            </div>
            <button onClick={() => navigate('/final-profile')} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[#e02c5a]/20 text-[#e02c5a] font-bold hover:bg-[#fff0f5] transition-colors">
              <User size={18} /> View & Edit Profile
            </button>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM NAVIGATION BAR (Mobile Only) ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-[72px] z-50 px-2 pb-2">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-gray-900">
          <Home size={22} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-gray-900">
          <Search size={22} />
          <span className="text-[10px] font-medium">Search</span>
        </button>
        <button onClick={() => navigate('/matches')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-[#e02c5a]">
          <Heart size={22} fill="currentColor" />
          <span className="text-[10px] font-bold">Matches</span>
        </button>
        
        <button onClick={() => navigate('/notifications')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-[#e02c5a] relative focus:outline-none">
          <Bell size={22} />
          <span className="absolute top-0 right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
          <span className="text-[10px] font-medium">Notifs</span>
        </button>
        
        <button 
          onClick={() => navigate('/final-profile')}
          className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-900 w-16"
        >
          <User size={22} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>

    </div>
  );
};

export default Dashboard;