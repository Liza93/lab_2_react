function Experience() {
  return (
    <section className="bg-white p-8 my-8 border-2 border-slate-100 rounded-3xl shadow-lg transition-all hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <span className="w-8 h-8 bg-blue-600 rounded-full"></span>
        Технічні навички
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['SQL (MySQL)', 'Linux CLI', 'Cisco Packet Tracer', 'Cyber Kill Chain'].map((skill) => (
          <div key={skill} className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500 hover:bg-blue-50 hover:scale-105 transition-transform cursor-default">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;