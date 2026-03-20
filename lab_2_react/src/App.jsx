import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <Header />
        <main>
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;