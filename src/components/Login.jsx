import React, { useState } from 'react';
import { User, Phone, Lock, ShieldCheck, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  // state to toggle between Login and Signup
  const [isLogin, setIsLogin] = useState(false); 
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff0f5] to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#e02c5a]/5 blur-[80px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#fbbf24]/5 blur-[80px]"></div>
      </div>

      {/* Form Card */}
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-[0_10px_40px_rgba(224,44,90,0.08)] p-8 md:p-10 border-2 border-[#e02c5a]/20 relative z-10">

        {/* Logo */}
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

        {/* Dynamic Headings */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 font-serif tracking-wide">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            {isLogin ? "Login to access your profile." : "Join Local Shaadi and find your perfect match."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Field - Only show if NOT in Login mode */}
          {!isLogin && (
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] focus:bg-white transition-all"
                required
              />
            </div>
          )}

          {/* Mobile Number - Always visible */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
            </div>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] focus:bg-white transition-all"
              required
            />
          </div>

          {/* Password - Always visible */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] focus:bg-white transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#e02c5a] transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password - Only show if NOT in Login mode */}
          {!isLogin && (
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <ShieldCheck size={18} className="text-gray-400 group-focus-within:text-[#e02c5a] transition-colors" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] focus:bg-white transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#e02c5a] transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ed2c5b] to-[#c0163e] text-white py-3.5 rounded-2xl font-bold text-[16px] tracking-wide shadow-[0_8px_20px_rgba(224,44,90,0.25)] hover:shadow-[0_10px_25px_rgba(224,44,90,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {isLogin ? "Login" : "Submit"}
            </button>
          </div>
        </form>

        {/* Toggle between Login and Signup */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#e02c5a] font-bold hover:underline transition-all"
            >
              {isLogin ? "Create Account" : "Login here"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;