function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 p-8 mt-12 rounded-t-3xl border-t-2 border-blue-500/30 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm font-mono tracking-widest uppercase">
            &copy; 2026 <span className="text-blue-400 font-bold">Єлизавета Пузанська</span>
          </p>
          <p className="text-xs opacity-50 mt-1">System Status: <span className="text-emerald-500">Secure</span></p>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/Liza93/lab_2_react" 
            target="_blank" 
            className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
          >
            GitHub
          </a>
          <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 cursor-help hover:bg-blue-600 hover:text-white transition-colors">
            Lab #3
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