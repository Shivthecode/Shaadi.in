import React, { useState } from 'react';
import { 
  User, Users, Briefcase, Heart, BookOpen, MapPin, 
  CheckCircle, ShieldCheck, Camera, ImagePlus, X, ZoomIn,
  ArrowLeft, Search, Bell, Home, Edit3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Photo aur Crop Modal states
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"); 
  const [tempImage, setTempImage] = useState(null); 
  const [showCropModal, setShowCropModal] = useState(false);
  const [imageZoom, setImageZoom] = useState(1); 

  // Pre-filled User Data
  const [formData, setFormData] = useState({
    profileFor: 'Self',
    fullName: 'Rahul Verma',
    fatherName: 'Mr. Ramesh Verma',
    dob: '1999-05-15',
    age: '27',
    gender: 'Male',
    maritalStatus: 'Single',
    height: '5\'10"', 
    complexion: 'Wheatish', 
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    cityVillage: 'Gomti Nagar',
    pincode: '226010',
    religion: 'Hindu',
    caste: 'Kshatriya',
    category: 'General',
    occupation: 'Software Engineer',
    income: '5 - 10 Lakhs',
    familyMembers: '4',
    siblingCount: '1', 
    siblings: [
      { name: "Priya Verma", status: "Single" }
    ] 
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / 1024 / 1024;
      if (fileSizeInMB > 5) {
        alert("Bhai, image ka size 5MB se kam hona chahiye!");
        e.target.value = ""; 
        return;
      }
      setTempImage(URL.createObjectURL(file));
      setImageZoom(1); 
      setShowCropModal(true); 
    }
  };

  const handleSaveCrop = () => {
    setProfileImage(tempImage);
    setShowCropModal(false);
  };

  const handleSiblingCountChange = (e) => {
    const countStr = e.target.value;
    const count = parseInt(countStr) || 0;
    let newSiblings = [...formData.siblings];

    if (count > newSiblings.length) {
      const toAdd = count - newSiblings.length;
      for (let i = 0; i < toAdd; i++) {
        newSiblings.push({ name: '', status: '' });
      }
    } else if (count < newSiblings.length) {
      newSiblings = newSiblings.slice(0, count);
    }

    setFormData({ ...formData, siblingCount: countStr, siblings: newSiblings });
  };

  const handleSiblingDataChange = (index, field, value) => {
    const updatedSiblings = [...formData.siblings];
    updatedSiblings[index][field] = value;
    setFormData({ ...formData, siblings: updatedSiblings });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'pincode') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 6) {
        setFormData({ ...formData, [name]: onlyNums });
      }
      return;
    }

    if (name === 'dob') {
      if (value) {
        const birthDate = new Date(value);
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          calculatedAge--;
        }
        setFormData(prev => ({ 
          ...prev, dob: value, age: calculatedAge >= 18 ? calculatedAge : '' 
        }));
        
        if (calculatedAge < 18 && calculatedAge >= 0) {
          alert("Age must be 18 or above.");
        }
      } else {
        setFormData(prev => ({ ...prev, dob: '', age: '' }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated: ", formData);
    alert("Profile details updated successfully!");
    setIsEditing(false);
  };

  const hideScrollbar = "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  const inputClass = `px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium outline-none transition-all w-full
    ${isEditing ? 'bg-white focus:border-[#e02c5a] focus:ring-2 focus:ring-[#e02c5a]/20 text-gray-800' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`;

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans pb-24 md:pb-20 relative ${hideScrollbar}`}>
      
      {/* ================= CROP MODAL ================= */}
      {showCropModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Adjust Photo</h3>
              <button onClick={() => setShowCropModal(false)} className="text-gray-400 hover:text-red-500"><X size={24} /></button>
            </div>
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-100 border-4 border-dashed border-gray-300 mb-6 flex items-center justify-center shadow-inner">
              <img src={tempImage} alt="Upload Preview" className="w-full h-full object-cover transition-transform duration-100 cursor-move" style={{ transform: `scale(${imageZoom})` }} />
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>
            <div className="flex items-center gap-3 mb-6 bg-gray-50 p-3 rounded-xl">
              <ZoomIn size={20} className="text-gray-500" />
              <input type="range" min="1" max="3" step="0.1" value={imageZoom} onChange={(e) => setImageZoom(e.target.value)} className="w-full accent-[#e02c5a]" />
            </div>
            <button onClick={handleSaveCrop} className="w-full bg-[#e02c5a] text-white py-3 rounded-xl font-bold shadow-md hover:bg-[#c0163e] transition-colors">
              Save Picture
            </button>
          </div>
        </div>
      )}

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
            <button onClick={() => navigate('/notifications')} className="hover:text-[#e02c5a] py-7 transition-colors flex items-center gap-1 relative focus:outline-none">
              Notifications
              <span className="bg-[#e02c5a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full -mt-3 absolute -right-4 top-5">3</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input type="text" placeholder="Search name, ID..." className="pl-10 pr-4 py-2 w-56 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:bg-white focus:border-[#e02c5a] transition-all" />
            </div>
            <button className="flex items-center gap-2 bg-[#fff0f5] text-[#e02c5a] border border-[#e02c5a]/20 px-5 py-2.5 rounded-full font-bold shadow-sm shrink-0">
              <User size={18} /><span>My Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= FORM CONTAINER ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Manage Profile</h1>
            <p className="text-gray-500 mt-1 font-medium">Keep your details up to date to find better matches.</p>
          </div>
          <button onClick={() => navigate('/dashboard')} className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm">
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 📸 PHOTO UPLOAD SECTION */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
            <div className="absolute top-4 right-6 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-200 flex items-center gap-1">
              <ShieldCheck size={14} /> Profile Verified
            </div>

            <div className="relative group w-32 h-32 shrink-0 rounded-full border-4 border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden shadow-sm mt-4 sm:mt-0">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <Camera size={36} className="text-gray-300" />
              )}
              
              {isEditing && (
                <label className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10">
                  <ImagePlus size={24} className="text-white mb-1" />
                  <span className="text-white text-[10px] font-bold">Change</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              )}
            </div>
            
            <div className="text-center sm:text-left flex-1 mt-2">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Profile Picture <span className="text-red-500">*</span></h2>
              <p className="text-sm text-gray-500 mb-4 max-w-md">
                Profiles with photos get 10x more responses.
              </p>
              
              {isEditing && (
                <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fff0f5] text-[#e02c5a] font-bold rounded-xl border border-[#e02c5a]/30 cursor-pointer hover:bg-[#e02c5a] hover:text-white transition-colors">
                  <Camera size={18} /> Update Photo
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              )}
            </div>
          </div>
          
          {/* CARD 1: BASIC DETAILS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">
              <User className="text-[#e02c5a]" size={20} /> Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Profile For</label>
                <select disabled={!isEditing} name="profileFor" value={formData.profileFor} onChange={handleChange} required className={inputClass}>
                  <option value="Self">Self</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Full Name</label>
                <input disabled={!isEditing} type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Gender</label>
                <select disabled={!isEditing} name="gender" value={formData.gender} onChange={handleChange} required className={inputClass}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 flex flex-col">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Date of Birth</label>
                  <input disabled={!isEditing} type="date" name="dob" value={formData.dob} onChange={handleChange} required className={inputClass} />
                </div>
                <div className="col-span-2 flex flex-col">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Age</label>
                  <input type="text" value={formData.age !== '' ? `${formData.age} Yrs` : ''} readOnly className="px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm font-bold text-gray-500 outline-none text-center cursor-not-allowed" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Marital Status</label>
                <select disabled={!isEditing} name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required className={inputClass}>
                  <option value="Single">Single (Never Married)</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Height</label>
                  <select disabled={!isEditing} name="height" value={formData.height} onChange={handleChange} required className={inputClass}>
                    <option value="5'4&quot;">5' 4"</option>
                    <option value="5'5&quot;">5' 5"</option>
                    <option value="5'6&quot;">5' 6"</option>
                    <option value="5'8&quot;">5' 8"</option>
                    <option value="5'10&quot;">5' 10"</option>
                    <option value="6'0&quot;">6' 0"</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Complexion</label>
                  <select disabled={!isEditing} name="complexion" value={formData.complexion} onChange={handleChange} required className={inputClass}>
                    <option value="Very Fair">Very Fair</option>
                    <option value="Fair">Fair</option>
                    <option value="Wheatish">Wheatish</option>
                    <option value="Dark">Dark</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: LOCATION DETAILS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">
              <MapPin className="text-blue-500" size={20} /> Location Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">State</label>
                <input disabled={!isEditing} type="text" name="state" value={formData.state} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">District</label>
                <input disabled={!isEditing} type="text" name="district" value={formData.district} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">City / Village</label>
                <input disabled={!isEditing} type="text" name="cityVillage" value={formData.cityVillage} onChange={handleChange} required className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Pincode</label>
                <input disabled={!isEditing} type="text" name="pincode" value={formData.pincode} onChange={handleChange} required className={inputClass} />
              </div>
            </div>
          </div>

          {/* CARD 3: RELIGION & BACKGROUND */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">
              <BookOpen className="text-[#fbbf24]" size={20} /> Religious Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Religion</label>
                <select disabled={!isEditing} name="religion" value={formData.religion} onChange={handleChange} required className={inputClass}>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Christian">Christian</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Caste</label>
                <input disabled={!isEditing} type="text" name="caste" value={formData.caste} onChange={handleChange} className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Category</label>
                <select disabled={!isEditing} name="category" value={formData.category} onChange={handleChange} className={inputClass}>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
            </div>
          </div>

          {/* CARD 4: CAREER & FAMILY */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">
              <Briefcase className="text-purple-600" size={20} /> Career & Family
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Father's Name</label>
                <input disabled={!isEditing} type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className={inputClass} />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Occupation</label>
                <select disabled={!isEditing} name="occupation" value={formData.occupation} onChange={handleChange} required className={inputClass}>
                  <option value="Private Job">Private Job</option>
                  <option value="Government Job">Government Job</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Annual Income</label>
                <select disabled={!isEditing} name="income" value={formData.income} onChange={handleChange} className={inputClass}>
                  <option value="0 - 2 Lakhs">0 - 2 Lakhs</option>
                  <option value="2 - 5 Lakhs">2 - 5 Lakhs</option>
                  <option value="5 - 10 Lakhs">5 - 10 Lakhs</option>
                  <option value="10 - 20 Lakhs">10 - 20 Lakhs</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Total Family Members</label>
                <input disabled={!isEditing} type="number" name="familyMembers" value={formData.familyMembers} onChange={handleChange} min="1" className={inputClass} />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Number of Siblings</label>
                <select disabled={!isEditing} name="siblingCount" value={formData.siblingCount} onChange={handleSiblingCountChange} className={inputClass}>
                  <option value="0">None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              {/* DYNAMIC SIBLINGS SECTION */}
              {formData.siblings.length > 0 && (
                <div className="col-span-1 md:col-span-3 mt-2 bg-[#f8fafc] border border-gray-200 rounded-2xl p-5 shadow-inner">
                  <h3 className="text-gray-800 font-bold mb-4 flex items-center gap-2"><Users size={18} className="text-[#e02c5a]" /> Sibling Details</h3>
                  <div className="space-y-4">
                    {formData.siblings.map((sibling, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative">
                        <div className="absolute top-0 left-0 bg-[#fff0f5] text-[#e02c5a] text-[10px] font-bold px-2 py-1 rounded-br-lg rounded-tl-xl">#{index + 1}</div>
                        <div className="flex flex-col pt-2 md:pt-0">
                          <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Sibling Name</label>
                          <input disabled={!isEditing} type="text" value={sibling.name} onChange={(e) => handleSiblingDataChange(index, 'name', e.target.value)} className={inputClass} />
                        </div>
                        <div className="flex flex-col pt-2 md:pt-0">
                          <label className="text-xs font-bold text-gray-500 uppercase mb-1.5">Marital Status</label>
                          <select disabled={!isEditing} value={sibling.status} onChange={(e) => handleSiblingDataChange(index, 'status', e.target.value)} className={inputClass}>
                            <option value="">Select Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= BUTTON CONTROLS ================= */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 pb-10">
            {!isEditing ? (
              <button 
                type="button" 
                onClick={(e) => { e.preventDefault(); setIsEditing(true); }} 
                className="flex items-center justify-center gap-2 bg-[#e02c5a] hover:bg-[#c0163e] text-white px-10 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all text-center w-full sm:w-auto"
              >
                <Edit3 size={18} /> Edit Profile
              </button>
            ) : (
              <>
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)} 
                  className="px-8 py-3.5 rounded-xl font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-all text-center w-full sm:w-auto"
                >
                  Discard Changes
                </button>
                <button 
                  type="submit" 
                  className="flex items-center justify-center gap-2 bg-[#e02c5a] hover:bg-[#c0163e] text-white px-10 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all text-center w-full sm:w-auto"
                >
                  <CheckCircle size={18} /> Save Updates
                </button>
              </>
            )}
          </div>

        </form>
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
          <Heart size={22} />
          <span className="text-[10px] font-medium">Matches</span>
        </button>
        
        {/* 🔥 FIX 3: Mobile Bottom Nav Notification Button Click in Profile Page */}
        <button onClick={() => navigate('/notifications')} className="flex flex-col items-center justify-center gap-1 w-16 text-gray-500 hover:text-[#e02c5a] relative focus:outline-none">
          <Bell size={22} />
          <span className="absolute top-0 right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
          <span className="text-[10px] font-medium">Notifs</span>
        </button>
        
        <button className="flex flex-col items-center justify-center gap-1 w-16 text-[#e02c5a]">
          <User size={22} fill="currentColor" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>

    </div>
  );
};

export default FinalProfile;