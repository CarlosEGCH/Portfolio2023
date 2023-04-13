import React, { useEffect, useState } from 'react'

import Header from './components/layout/Header'
import Hero from './components/pages/Hero'
import Skills from './components/pages/Skills'
import Technologies from './components/pages/Technologies'
import Projects from './components/pages/Projects'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'

export default function App() {

  function useViewport() {
    const [viewportSize, setViewportSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      function handleResize() {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return viewportSize;
  }

  const viewport = useViewport();
  
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Technologies />
      <Projects />
      {viewport.width > 1100 ? <Education /> : ""}
      <Contact />
      <Footer />
    </div>
  )
}
