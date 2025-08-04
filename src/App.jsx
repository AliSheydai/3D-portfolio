import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from './components/Header'
import HeroSectoin from './components/HeroSectoin'
import CustomCursor from './components/CustomCursor'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import './css/App.css'
import "./css/index.css"

function App() {

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when the page is fully Loaded
    ScrollTrigger.refresh()

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  })

  return (
    <>
      <Header />
      <HeroSectoin />
      <CustomCursor />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ProgressBar />
    </>
  )
}

export default App
