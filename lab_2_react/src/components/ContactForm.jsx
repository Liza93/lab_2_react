import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-slate-900 border border-blue-500/30 rounded-2xl shadow-2xl p-8 transform transition-all">
        
        {/* Кнопка закриття */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <span>📬</span> Зв'язок
        </h3>
        
        {}
        <form action="https://formspree.io/f/mojpnjbn" method="POST" className="space-y-4">
          
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Ім'я" 
              required 
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Номер телефону" 
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div>
            <textarea 
              name="message" 
              placeholder="Ваше повідомлення..." 
              required
              rows="4"
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg px-4 py-3 transition-colors shadow-lg shadow-blue-500/30"
          >
            Відправити
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default ContactForm;