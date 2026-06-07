import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import CorporateProjects from './components/CorporateProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CatalogPage from './pages/CatalogPage';
import CatalogHeader from './components/CatalogHeader';

function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Track divs inside sections for slide-up reveal effect
    const divs = document.querySelectorAll('section > div');
    divs.forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => {
      divs.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <StatsBar />
      <AboutUs />
      <Services />
      <Projects />
      <CorporateProjects />
      <Contact />
    </>
  );
}


function AppHeader() {
  const location = useLocation();
  if (location.pathname === '/catalogo') {
    return <CatalogHeader />;
  }
  return <Header />;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-on-background">
        <AppHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
