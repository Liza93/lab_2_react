import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const themeClasses = theme === 'light' 
    ? "min-h-screen bg-slate-100 text-slate-900 py-10 px-4 transition-colors duration-500" 
    : "min-h-screen bg-slate-950 text-slate-200 py-10 px-4 transition-colors duration-500";

  return (
    <div className={themeClasses}>
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="flex justify-end">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl font-medium border shadow-sm transition-all duration-300 bg-blue-600 text-white hover:bg-blue-500 border-blue-700 hover:scale-105"
          >
            {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
          </button>
        </div>

        <Header />
        
        <main className="space-y-10">
          <Experience />
          <Education />
          <Reviews />
        </main>
        
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;