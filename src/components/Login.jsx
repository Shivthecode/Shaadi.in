import React, { useState } from 'react';
import { User, Phone, Lock, ShieldCheck, Eye, EyeOff, Mail, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 🔥 Registration Steps State
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  
  // 🔥 Form Data State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, ''); // Sirf 0-9 allowed
      if (onlyNums.length <= 10) {
        setFormData({ ...formData, [name]: onlyNums });
      }
    } else if (name === 'otp') {
      // 🔥 OTP ke liye strictly 4 digits aur sirf numbers allow kiye
      const onlyNums = value.replace(/[^0-9]/g, ''); 
      if (onlyNums.length <= 4) {
        setFormData({ ...formData, [name]: onlyNums });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIC: Jab user Login kar raha ho
      if (formData.phone.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      console.log("Logging in with: ", formData.phone, formData.password);
      navigate('/profile-setup'); 

    } else {
      // LOGIC: Jab user Register kar raha ho (Step-by-step)
      
      if (!otpSent) {
        // Step 1: Send OTP
        if (formData.phone.length !== 10) {
          alert("Please enter a valid 10-digit mobile number.");
          return;
        }
        console.log("Sending OTP to", formData.phone);
        setOtpSent(true);
        alert(`OTP sent successfully to ${formData.phone}! (Use 1234 for testing)`);
        
      } else if (otpSent && !otpVerified) {
        // Step 2: Verify OTP
        if (formData.otp.length !== 4) {
          alert("Please enter a 4-digit OTP.");
          return;
        }
        if (formData.otp === '1234') { // Dummy check
          setOtpVerified(true);
          alert("Phone number verified successfully!");
        } else {
          alert("Invalid OTP. Please try again. (Enter 1234)");
        }
        
      } else if (otpVerified) {
        // Step 3: Final Submit (Create Account)
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        console.log("Account Created: ", formData);
        alert("Account Created Successfully!");
        navigate('/profile-setup');
      }
    }
  };

  // Jab user tab switch kare (Login -> Signup) toh OTP state reset kar do
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setOtpSent(false);
    setOtpVerified(false);
    setFormData({ name: '', email: '', phone: '', otp: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff0f5] to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#e02c5a]/5 blur-[80px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#fbbf24]/5 blur-[80px]"></div>
      </div>

      <div className="max-w-md w-full bg-white rounded-[40px] shadow-[0_10px_40px_rgba(224,44,90,0.08)] p-8 md:p-10 border-2 border-[#e02c5a]/20 relative z-10 transition-all duration-500">

        <div className="flex justify-center mb-8">
          <div className="relative flex flex-col items-center">
            <span className="text-[#821511] text-[0.65rem] font-bold uppercase tracking-widest absolute -top-2 -left-1">
              L<span className="text-[#eab308]">O</span>CAL
            </span>
            <div className="flex items-baseline">
              <span className="text-[#e02c5a] text-3xl font-extrabold tracking-tight">Shaadi</span>
              <span className="text-[#821511] text-xl font-bold">.in</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-serif tracking-wide">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            {isLogin 
              ? "Login to access your profile." 
              : otpVerified 
                ? "Set a password to secure your account." 
                : "Verify your details to find your perfect match."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* ================= LOGIN FORM ================= */}
          {isLogin && (
            <>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  maxLength="10" 
                  placeholder="Mobile Number (10 digits)" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all" 
                  required 
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                </div>
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#e02c5a] transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </>
          )}

          {/* ================= REGISTRATION FORM (STEP-BY-STEP) ================= */}
          {!isLogin && (
            <>
              {/* STEP 1: Name, Email, Phone (Hides when OTP is verified) */}
              {!otpVerified && (
                <>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                    </div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} disabled={otpSent} placeholder="Full Name" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all disabled:opacity-60" required />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={otpSent} placeholder="Email Address" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all disabled:opacity-60" required />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      maxLength="10"
                      disabled={otpSent} 
                      placeholder="Mobile Number (10 digits)" 
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all disabled:opacity-60" 
                      required 
                    />
                  </div>
                </>
              )}

              {/* STEP 2: OTP Input (Appears after Send OTP) */}
              {otpSent && !otpVerified && (
                <div className="relative group animate-in fade-in zoom-in duration-300">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <KeyRound size={18} className="text-[#e02c5a]" />
                  </div>
                  <input 
                    type="text" 
                    name="otp" 
                    value={formData.otp} 
                    onChange={handleChange} 
                    maxLength="4" 
                    placeholder="Enter 4-digit OTP (Test: 1234)" 
                    className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-[#e02c5a]/30 rounded-2xl text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/50 focus:border-[#e02c5a] transition-all shadow-[0_0_15px_rgba(224,44,90,0.1)]" 
                    required 
                  />
                </div>
              )}

              {/* STEP 3: Passwords (Appears after OTP is verified) */}
              {otpVerified && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-2 mb-2 justify-center bg-green-50 text-green-700 py-2 rounded-xl text-sm font-semibold border border-green-200">
                    <ShieldCheck size={18} />
                    Number Verified Successfully!
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                    </div>
                    <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#e02c5a]">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <ShieldCheck size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
                    </div>
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all" required />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#e02c5a]">
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* DYNAMIC SUBMIT BUTTON */}
          <div className="pt-2">
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ed2c5b] to-[#c0163e] text-white py-3.5 rounded-2xl font-bold text-[16px] tracking-wide shadow-[0_8px_20px_rgba(224,44,90,0.25)] hover:shadow-[0_10px_25px_rgba(224,44,90,0.35)] hover:-translate-y-0.5 transition-all duration-300">
              {isLogin 
                ? "Login" 
                : otpVerified 
                  ? "Create Account" 
                  : otpSent 
                    ? "Verify OTP" 
                    : "Send OTP"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button type="button" onClick={toggleAuthMode} className="text-[#e02c5a] font-bold hover:underline transition-all">
              {isLogin ? "Create Account" : "Login here"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;