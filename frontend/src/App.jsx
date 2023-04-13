import React from 'react'

import Header from './components/layout/Header'
import Hero from './components/pages/Hero'
import Skills from './components/pages/Skills'
import Technologies from './components/pages/Technologies'
import Projects from './components/pages/Projects'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Technologies />
      <Projects />
      {/* <Education /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}
