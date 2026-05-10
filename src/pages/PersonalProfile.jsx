import React, { useState } from 'react';
import { 
  User, Users, Briefcase, Heart, BookOpen, MapPin, 
  CheckCircle, ShieldCheck, Camera, ImagePlus, X, ZoomIn 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PersonalProfile = () => {
  // 🔥 Photo aur Crop Modal ke naye states
  const [profileImage, setProfileImage] = useState(null); // Final image
  const [tempImage, setTempImage] = useState(null); // Uploaded original image
  const [showCropModal, setShowCropModal] = useState(false);
  const [imageZoom, setImageZoom] = useState(1); // Zoom level for cropping

  const [formData, setFormData] = useState({
    profileFor: '',
    fullName: '',
    fatherName: '',
    dob: '',
    age: '',
    gender: '',
    maritalStatus: '',
    state: '',
    district: '',
    cityVillage: '',
    pincode: '',
    religion: '',
    caste: '',
    category: '',
    occupation: '',
    income: '',
    familyMembers: ''
  });

  const navigate = useNavigate();

  // 🔥 Image Upload Handler (5MB Limit)
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
      setImageZoom(1); // Reset zoom
      setShowCropModal(true); // Crop popup open
    }
  };

  // 🔥 Save Cropped Image
  const handleSaveCrop = () => {
    setProfileImage(tempImage);
    setShowCropModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Pincode strict validation
    if (name === 'pincode') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 6) {
        setFormData({ ...formData, [name]: onlyNums });
      }
      return;
    }

    // 🔥 Auto Age Calculation
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
          ...prev, 
          dob: value, 
          age: calculatedAge >= 18 ? calculatedAge : '' 
        }));
        
        if(calculatedAge < 18 && calculatedAge >= 0) {
          alert("Age must be 18 or above to register.");
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
    if (!profileImage) {
      alert("Please upload a profile picture to continue.");
      return;
    }
    console.log("Profile Data Submitted: ", formData);
    alert("Profile details saved successfully!");
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-20 relative">
      
      {/* CROP MODAL (Popup for Adjusting Photo) */}
      {showCropModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Adjust Photo</h3>
              <button onClick={() => setShowCropModal(false)} className="text-gray-400 hover:text-red-500">
                <X size={24} />
              </button>
            </div>
            
            {/* Circular Preview Cutout */}
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-100 border-4 border-dashed border-gray-300 mb-6 flex items-center justify-center shadow-inner">
              <img 
                src={tempImage} 
                alt="Upload Preview" 
                className="w-full h-full object-cover transition-transform duration-100 cursor-move"
                style={{ transform: `scale(${imageZoom})` }}
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>

            {/* Zoom Slider */}
            <div className="flex items-center gap-3 mb-6 bg-gray-50 p-3 rounded-xl">
              <ZoomIn size={20} className="text-gray-500" />
              <input 
                type="range" 
                min="1" max="3" step="0.1" 
                value={imageZoom}
                onChange={(e) => setImageZoom(e.target.value)}
                className="w-full accent-[#e02c5a]"
              />
            </div>

            <button onClick={handleSaveCrop} className="w-full bg-[#e02c5a] text-white py-3 rounded-xl font-bold shadow-md hover:bg-[#c0163e] transition-colors">
              Save Picture
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-40 shadow-sm flex justify-between items-center">
        <div className="flex items-baseline">
          <span className="text-[#e02c5a] text-2xl font-extrabold tracking-tight">LocalShaadi</span>
          <span className="text-[#821511] text-lg font-bold">.in</span>
        </div>
        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
          <ShieldCheck size={16} />
          <span className="text-xs font-bold tracking-wide">100% Secure</span>
        </div>
      </header>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
            Complete Your Profile
          </h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            A detailed profile gets up to 4x more matches. Fill in your authentic details to find the perfect match.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ================= 📸 PHOTO UPLOAD SECTION (Fixed Layout) ================= */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow">
            
            <div className="relative group w-32 h-32 shrink-0 rounded-full border-4 border-gray-100 hover:border-[#e02c5a]/50 transition-colors bg-gray-50 flex items-center justify-center overflow-hidden shadow-sm">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  style={{ transform: `scale(${imageZoom})` }} 
                />
              ) : (
                <Camera size={36} className="text-gray-300" />
              )}
              
              <label className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10">
                <ImagePlus size={24} className="text-white mb-1" />
                <span className="text-white text-[10px] font-bold">Change</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
            
            <div className="text-center sm:text-left flex-1 mt-2">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Profile Picture <span className="text-red-500">*</span></h2>
              <p className="text-sm text-gray-500 mb-4 max-w-md">
                Upload a clear, front-facing photo. Profiles with photos get 10x more responses. (Max size: 5MB, Format: JPG/PNG)
              </p>
              <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fff0f5] text-[#e02c5a] font-bold rounded-xl border border-[#e02c5a]/30 cursor-pointer hover:bg-[#e02c5a] hover:text-white transition-colors">
                <Camera size={18} />
                {profileImage ? "Change Photo" : "Upload Photo"}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </div>
          
          {/* ================= CARD 1: BASIC DETAILS ================= */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
              <div className="bg-[#fff0f5] p-2 rounded-lg text-[#e02c5a]"><User size={20} /></div>
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Gender <span className="text-red-500">*</span></label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Father's Name</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter father's name" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
                </div>
                <div className="col-span-2 flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1.5">Age</label>
                  <input 
                    type="text" 
                    value={formData.age !== '' ? `${formData.age} Yrs` : ''} 
                    readOnly 
                    placeholder="Auto" 
                    className={`px-4 py-3 border rounded-xl text-sm font-bold outline-none cursor-not-allowed transition-colors text-center w-full
                      ${formData.age !== '' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-100 border-gray-200 text-gray-400'}
                    `} 
                  />
                </div>
              </div>

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

          {/* ================= CARD 2: LOCATION DETAILS ================= */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-500"><MapPin size={20} /></div>
              Location Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">State <span className="text-red-500">*</span></label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="e.g. Uttar Pradesh" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">District <span className="text-red-500">*</span></label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="e.g. Sant Kabir Nagar" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">City / Village <span className="text-red-500">*</span></label>
                <input type="text" name="cityVillage" value={formData.cityVillage} onChange={handleChange} placeholder="e.g. Khalilabad" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Pincode <span className="text-red-500">*</span></label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="6-digit pincode" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* ================= CARD 3: RELIGION & BACKGROUND ================= */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
              <div className="bg-[#fffbeb] p-2 rounded-lg text-[#fbbf24]"><BookOpen size={20} /></div>
              Religious & Social Background
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Caste</label>
                <input type="text" name="caste" value={formData.caste} onChange={handleChange} placeholder="e.g. Brahmin, Rajput" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
              </div>

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

          {/* ================= CARD 4: CAREER & FAMILY ================= */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
              <div className="bg-purple-50 p-2 rounded-lg text-purple-600"><Briefcase size={20} /></div>
              Career & Family Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Occupation <span className="text-red-500">*</span></label>
                <select name="occupation" value={formData.occupation} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all">
                  <option value="">Select Occupation</option>
                  <option value="Private Job">Private Job</option>
                  <option value="Government Job">Government Job</option>
                  <option value="Business/Self-Employed">Business</option>
                  <option value="House Maker">House Maker</option>
                  <option value="Not Working">Not Working</option>
                </select>
              </div>

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

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1.5">Total Family Members</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Users size={18} className="text-gray-400" />
                  </div>
                  <input type="number" name="familyMembers" value={formData.familyMembers} onChange={handleChange} placeholder="E.g. 4" min="1" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] outline-none transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= SUBMIT BUTTON ================= */}
          <div className="flex justify-end pt-4 pb-10">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ed2c5b] to-[#c0163e] text-white px-10 py-4 rounded-xl font-bold text-[16px] tracking-wide shadow-[0_8px_20px_rgba(224,44,90,0.25)] hover:shadow-[0_10px_25px_rgba(224,44,90,0.35)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              <CheckCircle size={20} />
              Save & View Matches
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PersonalProfile;