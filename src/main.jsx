import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/Home'
import Bio from '../src/pages/Bio'
import Skills from './pages/Skills'
import Project from './pages/Projects'
import Contact from './pages/Contact'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Bio/>
    <Skills/>
    <Project/>
    <Contact/>
  </React.StrictMode>,
)
