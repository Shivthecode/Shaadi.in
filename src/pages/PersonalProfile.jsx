import React, { useState } from 'react';
import { User, Calendar, Users, Briefcase, Heart, BookOpen, MapPin, CheckCircle } from 'lucide-react';

const PersonalProfile = () => {
  // Form State Setup (Backend integration ke liye aasan rahega)
  const [formData, setFormData] = useState({
    profileFor: '',
    fullName: '',
    fatherName: '',
    dob: '',
    age: '',
    gender: '',
    maritalStatus: '',
    religion: '',
    caste: '',
    category: '',
    occupation: '',
    income: '',
    familyMembers: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data Submitted: ", formData);
    // Yahan backend API call aayegi future mein
    alert("Profile details saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff0f5] to-white py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart size={20} className="text-[#e02c5a]" fill="currentColor" />
          <span className="text-[#e02c5a] font-bold tracking-widest text-sm uppercase">Your Journey Begins</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
          Complete Your Profile
        </h1>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto">
          Please fill in your authentic details to help us find the perfect match for you in your community.
        </p>
      </div>

      {/* Main Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-[0_10px_40px_rgba(224,44,90,0.08)] border border-gray-100 overflow-hidden">
        
        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          
          {/* ================= SECTION 1: BASIC DETAILS ================= */}
          <div className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">
              <User className="text-[#e02c5a]" size={22} />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Created For */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Profile Created For <span className="text-red-500">*</span></label>
                <select name="profileFor" value={formData.profileFor} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Option</option>
                  <option value="Self">Self</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Relative/Friend">Relative / Friend</option>
                </select>
              </div>

              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Gender <span className="text-red-500">*</span></label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Father Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Father's Name</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter father's name" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              {/* Date of Birth & Age Group */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5">Age <span className="text-red-500">*</span></label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Years" min="18" max="70" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
                </div>
              </div>

              {/* Marital Status */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Marital Status <span className="text-red-500">*</span></label>
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Status</option>
                  <option value="Single">Single (Never Married)</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Awaiting Divorce">Awaiting Divorce</option>
                </select>
              </div>
            </div>
          </div>

          {/* ================= SECTION 2: RELIGION & BACKGROUND ================= */}
          <div className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">
              <BookOpen className="text-[#fbbf24]" size={22} />
              Religious & Social Background
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Religion */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Religion <span className="text-red-500">*</span></label>
                <select name="religion" value={formData.religion} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Christian">Christian</option>
                  <option value="Jain">Jain</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Caste */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Caste</label>
                <input type="text" name="caste" value={formData.caste} onChange={handleChange} placeholder="e.g. Brahmin, Rajput, etc." className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* ================= SECTION 3: CAREER & FAMILY ================= */}
          <div className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">
              <Briefcase className="text-[#821511]" size={22} />
              Career & Family Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Occupation */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Occupation <span className="text-red-500">*</span></label>
                <select name="occupation" value={formData.occupation} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Occupation</option>
                  <option value="Private Job">Private Job</option>
                  <option value="Government Job">Government Job</option>
                  <option value="Business/Self-Employed">Business / Self-Employed</option>
                  <option value="House Maker">House Maker</option>
                  <option value="Not Working">Not Working</option>
                </select>
              </div>

              {/* Income */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Annual Income</label>
                <select name="income" value={formData.income} onChange={handleChange} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Income</option>
                  <option value="0 - 2 Lakhs">0 - 2 Lakhs</option>
                  <option value="2 - 5 Lakhs">2 - 5 Lakhs</option>
                  <option value="5 - 10 Lakhs">5 - 10 Lakhs</option>
                  <option value="10 - 20 Lakhs">10 - 20 Lakhs</option>
                  <option value="20+ Lakhs">20+ Lakhs</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              {/* Family Members */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Total Family Members</label>
                <input type="number" name="familyMembers" value={formData.familyMembers} onChange={handleChange} placeholder="E.g. 4" min="1" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* ================= SUBMIT BUTTON ================= */}
          <div className="pt-6 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-[#ed2c5b] to-[#c0163e] text-white px-8 py-3.5 rounded-xl font-bold text-[16px] tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <CheckCircle size={20} />
              Save Profile Details
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PersonalProfile;