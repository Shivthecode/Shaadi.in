import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, MessageSquare, Search, ChevronDown, User, 
  Camera, CheckCircle, MapPin, Lock, Phone, Mail, 
  Briefcase, BookOpen, Users, ArrowLeft, ShieldCheck, Star, 
  Filter, X, Home, Bell
} from 'lucide-react';

const Matches = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);

  // 🔥 Extended Mock Data
  const matchesData = [
    { 
      id: 1, name: "Anjali Sharma", age: 25, height: "5' 4\"", complexion: "Fair", 
      location: "Jaipur, Rajasthan", religion: "Hindu", caste: "Brahmin", subCaste: "Gaur",
      education: "B.Tech CS", profession: "Software Engineer", salary: "₹ 6 LPA", 
      fatherName: "Mr. Rajeev Sharma", familyType: "Nuclear", familyMembers: 5, siblingCount: 2,
      siblings: [{ name: "Rahul Sharma", status: "Married" }, { name: "Suman Sharma", status: "Single" }],
      about: "I am a simple, caring, and understanding person. I balance my professional and personal life well.",
      isOnline: true, matchPercentage: 92, pics: 5, 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 2, name: "Priya Singh", age: 24, height: "5' 2\"", complexion: "Wheatish", 
      location: "Delhi, NCR", religion: "Hindu", caste: "Rajput", subCaste: "Chauhan",
      education: "MBBS", profession: "Doctor", salary: "₹ 8 LPA", 
      fatherName: "Dr. Vikram Singh", familyType: "Joint", familyMembers: 6, siblingCount: 1,
      siblings: [{ name: "Arjun Singh", status: "Single" }],
      about: "Passionate about my career in medicine. Love traveling and reading.",
      isOnline: true, matchPercentage: 88, pics: 6, 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 3, name: "Neha Verma", age: 26, height: "5' 5\"", complexion: "Very Fair", 
      location: "Indore, MP", religion: "Hindu", caste: "Vaishya", subCaste: "Gupta",
      education: "CA", profession: "Chartered Accountant", salary: "₹ 6.5 LPA", 
      fatherName: "Mr. Suresh Verma", familyType: "Nuclear", familyMembers: 3, siblingCount: 0,
      siblings: [],
      about: "Independent and career-oriented. Believe in mutual respect and trust.",
      isOnline: false, matchPercentage: 85, pics: 3, 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
    },
  ];

  const hideScrollbar = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans pb-24 md:pb-20 ${hideScrollbar}`}>
      
      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50 shadow-sm">
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

      {/* ================= DESKTOP TOP NAVBAR (EXACTLY LIKE DASHBOARD) ================= */}
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
            <button onClick={() => navigate('/dashboard')} className="hover:text-[#e02c5a] py-7 transition-colors">Home</button>
            <button className="text-[#e02c5a] border-b-2 border-[#e02c5a] py-7 transition-colors">Matches</button>
            <button onClick={() => navigate('/notifications')} className="hover:text-[#e02c5a] py-7 transition-colors flex items-center gap-1 relative focus:outline-none">
              Notifications
              <span className="bg-[#e02c5a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full -mt-3 absolute -right-4 top-5">3</span>
            </button>
            <button className="hover:text-[#e02c5a] py-7 transition-colors">Premium</button>
          </div>
          
          {/* Search & Profile Container (Right Aligned) */}
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search name, ID..." 
                className="pl-10 pr-4 py-2 w-56 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:bg-white focus:border-[#e02c5a] focus:ring-2 focus:ring-[#e02c5a]/20 transition-all"
              />
            </div>
            <button onClick={() => navigate('/final-profile')} className="flex items-center gap-2 bg-[#e02c5a] hover:bg-[#c0163e] text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm shrink-0">
              <User size={18} />
              <span>My Profile</span>
            </button>
          </div>
          
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {!selectedProfile ? (
          
          /* VIEW 1: MATCHES LIST (EXACT UI AS DASHBOARD - HORIZONTAL CARDS) */
          <div className="max-w-4xl mx-auto space-y-4">
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 font-serif">Your Matches</h2>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
                <Filter size={16} /> Filters
              </button>
            </div>

            {matchesData.map((profile) => (
              <div 
                key={profile.id} 
                onClick={() => setSelectedProfile(profile)} 
                className="bg-white rounded-2xl p-3 sm:p-5 shadow-sm border border-gray-100 flex flex-row gap-3 sm:gap-5 hover:shadow-md transition-shadow cursor-pointer"
              >
                
                {/* Card Image (Horizontal layout) */}
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

                {/* Card Details */}
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

                {/* Card Actions */}
                <div className="flex flex-col justify-center items-end gap-2 sm:gap-3 pl-1">
                  <button 
                    onClick={(e) => { e.stopPropagation(); }} 
                    className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-[#e02c5a] hover:bg-[#fff0f5] transition-all shadow-sm"
                  >
                    <Heart size={18} className="sm:w-5 sm:h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); }} 
                    className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-[#e02c5a] hover:border-[#e02c5a] transition-all shadow-sm"
                  >
                    <MessageSquare size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        ) : (
          
          /* VIEW 2: DETAILED PROFILE VIEW */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <button onClick={() => setSelectedProfile(null)} className="flex items-center gap-2 text-gray-600 hover:text-[#e02c5a] font-medium mb-6 transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm w-fit">
              <ArrowLeft size={18} /> Back to Matches
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side: Photo & Locked Contacts */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
                  <div className="relative h-96 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                    <img src={selectedProfile.img} alt={selectedProfile.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded border border-white/20 flex items-center gap-1">
                      <Camera size={12} /> {selectedProfile.pics} Photos
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <button className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 flex justify-center items-center gap-2">
                      <Star size={18} /> Shortlist
                    </button>
                    <button className="flex-1 py-3 rounded-xl bg-[#e02c5a] text-white font-bold hover:bg-[#c0163e] shadow-md flex justify-center items-center gap-2">
                      <Heart size={18} /> Connect
                    </button>
                  </div>
                </div>

                {/* Locked Contact Details */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-lg border border-gray-700 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <Lock size={36} className="text-[#fbbf24] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">Contact Details Locked</h3>
                  <p className="text-gray-300 text-sm mb-6">Upgrade to Premium to unlock mobile number, email, and address.</p>
                  
                  <div className="space-y-3 mb-6 text-left opacity-60 pointer-events-none select-none">
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10"><Phone size={18} className="text-gray-400" /><span className="text-gray-300 font-mono tracking-widest">+91 ••••• •••••</span></div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10"><Mail size={18} className="text-gray-400" /><span className="text-gray-300 font-mono tracking-widest">a••••••@gmail.com</span></div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10"><MapPin size={18} className="text-gray-400" /><span className="text-gray-300 font-mono tracking-widest">••••••, {selectedProfile.location.split(',')[0]}</span></div>
                  </div>
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-gray-900 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Upgrade to Unlock
                  </button>
                </div>
              </div>

              {/* Right Side: Full Profile Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start justify-between mb-4 gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-2">{selectedProfile.name} <ShieldCheck size={24} className="text-blue-500" /></h2>
                      <p className="text-gray-500 font-medium">Profile created for Self • Last active 2 hours ago</p>
                    </div>
                    <div className="bg-green-50 text-green-700 font-bold px-3 py-1.5 rounded-full text-sm border border-green-200 flex items-center gap-1">
                      <CheckCircle size={16} /> {selectedProfile.matchPercentage}% Match
                    </div>
                  </div>
                  <hr className="border-gray-100 my-5" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">About Her</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{selectedProfile.about}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Details */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100"><User className="text-[#e02c5a]" size={20} /> Basic Details</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between"><span className="text-gray-500">Age</span><span className="font-semibold text-gray-800">{selectedProfile.age} Years</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Height</span><span className="font-semibold text-gray-800">{selectedProfile.height}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Complexion</span><span className="font-semibold text-gray-800">{selectedProfile.complexion}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Location</span><span className="font-semibold text-gray-800 text-right w-1/2">{selectedProfile.location}</span></li>
                    </ul>
                  </div>

                  {/* Religion Details */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100"><BookOpen className="text-[#fbbf24]" size={20} /> Religious Background</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between"><span className="text-gray-500">Religion</span><span className="font-semibold text-gray-800">{selectedProfile.religion}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Caste</span><span className="font-semibold text-gray-800">{selectedProfile.caste}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Sub-Caste</span><span className="font-semibold text-gray-800">{selectedProfile.subCaste}</span></li>
                    </ul>
                  </div>

                  {/* Career & Education */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100"><Briefcase className="text-blue-500" size={20} /> Career & Education</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between"><span className="text-gray-500">Education</span><span className="font-semibold text-gray-800">{selectedProfile.education}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Profession</span><span className="font-semibold text-gray-800 text-right w-1/2">{selectedProfile.profession}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Income</span><span className="font-semibold text-green-600">{selectedProfile.salary}</span></li>
                    </ul>
                  </div>

                  {/* Family Details */}
                  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100"><Users className="text-purple-500" size={20} /> Family Details</h3>
                    <ul className="space-y-3 text-sm mb-4">
                      <li className="flex justify-between"><span className="text-gray-500">Father</span><span className="font-semibold text-gray-800 text-right w-1/2">{selectedProfile.fatherName}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Family Type</span><span className="font-semibold text-gray-800">{selectedProfile.familyType}</span></li>
                      <li className="flex justify-between"><span className="text-gray-500">Members</span><span className="font-semibold text-gray-800">{selectedProfile.familyMembers}</span></li>
                    </ul>
                    
                    {selectedProfile.siblings.length > 0 && (
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <span className="text-xs font-bold text-gray-400 uppercase mb-2 block">Siblings ({selectedProfile.siblingCount})</span>
                        {selectedProfile.siblings.map((sib, i) => (
                          <div key={i} className="flex justify-between text-sm border-b border-gray-200 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span className="font-medium text-gray-700">{sib.name}</span>
                            <span className="bg-white px-2 py-0.5 rounded-md text-[10px] border font-bold text-gray-500">{sib.status}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
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
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-[#e02c5a]">
          <Heart size={22} fill="currentColor" />
          <span className="text-[10px] font-bold">Matches</span>
        </button>
        <button onClick={() => navigate('/notifications')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-[#e02c5a] relative focus:outline-none">
          <Bell size={22} />
          <span className="absolute top-0 right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
          <span className="text-[10px] font-medium">Notifs</span>
        </button>
        <button onClick={() => navigate('/final-profile')} className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-gray-900 w-16">
          <User size={22} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>

    </div>
  );
};

export default Matches;