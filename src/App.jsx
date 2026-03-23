import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Toast from './components/Toast';

function App() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3500);
  };

  if (loading) return <Loader />;

  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-blue-800/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Contact showToast={showToast} />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
      <Toast toast={toast} />
    </div>
  );
}

export default App;
