import React from 'react'
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Connects } from './pages/Connects/Connects';
import { Nav } from './pages/NavBar/Nav';
export default function Content() {
  return (
    <>
    
        <Home />
        <About />
        <Projects />
        <Connects />
    </>
  )
}
