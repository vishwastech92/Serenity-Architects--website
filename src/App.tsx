import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResidentialConstruction from './pages/ResidentialConstruction';
import GreenHomes from './pages/GreenHomes';
import InteriorDesign from './pages/InteriorDesign';
import { ConfigProvider } from './lib/config';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ConfigProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/residential-construction" element={<ResidentialConstruction />} />
              <Route path="/green-homes" element={<GreenHomes />} />
              <Route path="/interior-design" element={<InteriorDesign />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  );
}

