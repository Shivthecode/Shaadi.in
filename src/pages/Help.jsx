import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, HelpCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';

const Help = () => {
  // FAQ toggle state
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How do I create a new account?",
      answer: "Click on the 'Login' button at the top right, then select 'Create Account'. Fill in your basic details like Name, Mobile Number, and Password to get started."
    },
    {
      question: "Is my personal information and photos safe?",
      answer: "Absolutely! We use advanced encryption to protect your data. Your photos and contact details are only visible to verified premium members you accept."
    },
    {
      question: "How do I edit my profile details?",
      answer: "Once logged in, go to your Dashboard and click on 'Edit Profile'. You can update your bio, location, education, and partner preferences there."
    },
    {
      question: "Are there any charges for registering?",
      answer: "Registration and creating a profile on Local Shaadi is completely free. We also offer Premium plans if you want to directly call or message other matches."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff0f5] to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#e02c5a]/5 blur-[60px]"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#fbbf24]/5 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle size={20} className="text-[#e02c5a]" />
            <span className="text-[#e02c5a] font-bold tracking-widest text-sm uppercase">Support Center</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            How can we help you?
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Whether you have a question about features, pricing, or need technical support, our team is ready to answer all your questions.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgba(224,44,90,0.06)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-[#fff0f5] rounded-full flex items-center justify-center text-[#e02c5a] mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">Call Us</h3>
            <p className="text-gray-500 text-sm mb-3">Mon-Sat from 10am to 6pm</p>
            {/* 🔥 Updated Call Number */}
            <a href="tel:+919005520320" className="text-[#e02c5a] font-bold hover:underline">+91 90055 20320</a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgba(224,44,90,0.06)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-[#fff0f5] rounded-full flex items-center justify-center text-[#fbbf24] mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">Email Us</h3>
            <p className="text-gray-500 text-sm mb-3">We'll respond within 24 hours</p>
            <a href="mailto:support@localshaadi.in" className="text-[#e02c5a] font-bold hover:underline">support@localshaadi.in</a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgba(224,44,90,0.06)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-[#fff0f5] rounded-full flex items-center justify-center text-[#821511] mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-3">Instant chat support</p>
            {/* 🔥 Updated WhatsApp Link */}
            <a href="https://wa.me/919005520320" target="_blank" rel="noopener noreferrer" className="text-[#e02c5a] font-bold hover:underline">Start Chat</a>
          </div>
        </div>

        {/* Main Content Split: FAQs and Contact Form */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT: FAQ Accordion */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-[#e02c5a]/30 shadow-md' : 'border-gray-100 shadow-sm'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`font-semibold ${openFaq === index ? 'text-[#e02c5a]' : 'text-gray-700'}`}>
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp size={20} className="text-[#e02c5a]" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                  <div 
                    className={`px-6 text-sm text-gray-600 font-medium transition-all duration-300 ${openFaq === index ? 'pb-4 max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-[32px] shadow-[0_10px_40px_rgba(224,44,90,0.08)] p-8 border-2 border-[#e02c5a]/10">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">Send us a Message</h2>
            <p className="text-gray-500 text-sm mb-6 font-medium">Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e02c5a]/20 focus:border-[#e02c5a] transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ed2c5b] to-[#c0163e] text-white py-3.5 rounded-xl font-bold text-[16px] tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Help;