import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/34912345678" 
        className="whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>📱</span>
      </a>
    </div>
  );
}

export default App;
