function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-900 text-white p-12 shadow-2xl rounded-b-[40px] border-b-4 border-blue-500">
      <h1 className="text-5xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        Єлизавета Пузанська
      </h1>
      <p className="text-xl mt-4 font-mono tracking-wide opacity-80">
        [ Security Analyst in training ]
      </p>
    </header>
  );
}
export default Header;