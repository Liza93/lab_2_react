import React, { useState, useEffect } from 'react';

function Footer() {
  // 1. Створюємо стан для збереження даних про ОС та браузер
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  // 2. Використовуємо useEffect, який спрацює один раз при завантаженні футера
  useEffect(() => {
    // Зчитуємо системні дані
    const currentOS = navigator.platform;
    const currentBrowser = navigator.userAgent;

    // Зберігаємо ці дані в localStorage (як вимагає завдання)
    localStorage.setItem('react_os', currentOS);
    localStorage.setItem('react_browser', currentBrowser);

    // Дістаємо дані з localStorage та записуємо їх у наш стан, щоб вивести на екран
    setSysInfo({
      os: localStorage.getItem('react_os'),
      browser: localStorage.getItem('react_browser')
    });
  }, []); // Пустий масив залежностей означає "виконати лише при монтуванні"

  return (
    <footer className="bg-slate-900 text-slate-400 p-8 mt-12 rounded-t-3xl border-t-2 border-blue-500/30 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm font-mono tracking-widest uppercase">
            &copy; 2026 <span className="text-blue-400 font-bold">Єлизавета Пузанська</span>
          </p>
          <p className="text-xs opacity-50 mt-1">System Status: <span className="text-emerald-500">Secure</span></p>
          
          {/* 3. Виводимо наші дані з localStorage (якщо вони вже завантажились у стан) */}
          {sysInfo.os && (
            <div className="mt-4 text-[10px] font-mono text-slate-500 bg-slate-950 p-3 rounded-lg border border-slate-800 max-w-md break-all shadow-inner">
              <p><span className="text-blue-500 font-bold">OS:</span> {sysInfo.os}</p>
              <p className="mt-1"><span className="text-blue-500 font-bold">Browser:</span> {sysInfo.browser}</p>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/Liza93/lab_2_react" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
          >
            GitHub
          </a>
          <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 cursor-help hover:bg-blue-600 hover:text-white transition-colors">
            Lab #4
          </div>
        </div>

      </div>
      
      <div className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] opacity-20">
        Cybersecurity Student • Lviv Polytechnic National University
      </div>
    </footer>
  );
}

export default Footer;