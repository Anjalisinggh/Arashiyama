import HeroSection from './components/herosection'
import Navbar from './components/navbar'
import FeaturedExperiences from './components/featuredexperiences'
import FeaturedExperiencesMobile from './components/featuredexperiences-mobile'
import Experiences from './components/experiences'
import ExperiencesMobile from './components/experiences-mobile'
import LatestNews from './components/latestnews'

import BusinessCTA from './components/businesscta'
import BusinessCTAMobile from './components/businesscta-mobile'
import AccessSection from './components/accesssection'
import ContactSection from './components/contact'
import Footer from './components/footer'
export default function App() {
  return (
    <div className='grid grid-cols-1 grid-rows-[90px_calc(100vh-90px)] md:grid-rows-[128px_calc(100vh-128px)]'>
      <Navbar />
      <div id="main-scroll-container" className='w-full overflow-y-auto -mt-20 md:-mt-28 no-scrollbar'>
        <section id="about-section">
          <HeroSection />
        </section>
        
        <section id="floor-map-section-mobile" className="md:hidden">
          <FeaturedExperiencesMobile />
        </section>
       
        <div id="floor-map-section-desktop" className="hidden md:block">
          <FeaturedExperiences />
        </div>
       
        <section id="experience-section-mobile" className="md:hidden">
          <ExperiencesMobile />
        </section>
     
        <div id="experience-section-desktop" className="hidden md:block">
          <Experiences />
        </div>
       
        <BusinessCTAMobile />
        
        <BusinessCTA />
        <LatestNews />
        <section id="access-section">
          <AccessSection />
        </section>
        <section id="contact-section">
          <ContactSection />
        </section>
        <Footer />
      </div>
      
    </div>

  )
}