import { useEffect, useState } from 'react';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [barsVisible, setBarsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'certificates', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white">
      {barsVisible && (
        <div className="fixed inset-0 z-50 flex">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="flex-1 bg-primary animate-[hide-bars_0.5s_ease-in-out_both]"
              style={{ animationDelay: `calc(0.1s * ${i})` }}
            ></div>
          ))}
        </div>
      )}
      
      <Header activeSection={activeSection} />
      <Home />
      <Certificates />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;