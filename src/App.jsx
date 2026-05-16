import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login'; 
import Help from './pages/Help'; 
import PersonalProfile from './pages/PersonalProfile'; 
import Dashboard from './pages/Dashboard';
import Matches from './pages/Matches'; // 🔥 Matches component import kiya
import FinalProfile from './pages/FinalProfile';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fff0f5] flex flex-col font-sans">
        <main className="flex-grow">
          <Routes>
            
            {/* 🔥 YAHAN Navbar, Hero, About aur Footer ek sath hain (HOME PAGE) */}
            <Route 
              path="/" 
              element={
                <>
                  <Navbar />
                  <Hero />
                  <About />
                  <Footer />
                </>
              } 
            />

            {/* Help page pe Navbar aur Footer chahiye */}
            <Route 
              path="/help" 
              element={
                <>
                  <Navbar />
                  <Help />
                  <Footer />
                </>
              } 
            />

            {/* 🔥 IN PAGES PAR NAVBAR NAHI DIKHEGA */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile-setup" element={<PersonalProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* 🔥 MATCHES PAGE ROUTE (Yahan add kiya hai) */}
            <Route path="/matches" element={<Matches />} />
            <Route path="/final-profile" element={<FinalProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;