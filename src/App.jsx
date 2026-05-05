import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login'; // Tumhara naya Login component import kar liya
import Help from './pages/Help'; // Tumhara naya Help page import kar liya

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fff0f5] flex flex-col font-sans">
        
        {/* Navbar har page par dikhega isliye isko Routes ke bahar rakha hai */}
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* HOME PAGE ROUTE (Jab URL "/" ho) */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <About />
                  <Footer />
                </>
              } 
            />

            {/* LOGIN PAGE ROUTE (Jab URL "/login" ho) */}
            <Route path="/login" element={<Login />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;