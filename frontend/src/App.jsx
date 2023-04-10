import React from 'react'

import Header from './components/layout/Header'
import Hero from './components/pages/Hero'
import Skills from './components/pages/Skills'
import Technologies from './components/pages/Technologies'
import Projects from './components/pages/Projects'
import Education from './components/pages/Education'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Technologies />
      <Projects />
      <Education />
    </div>
  )
}
