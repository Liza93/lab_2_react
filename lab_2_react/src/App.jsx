import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main>
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;