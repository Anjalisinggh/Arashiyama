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
      <div className='w-full overflow-y-auto -mt-20 md:-mt-28 no-scrollbar'>
        <HeroSection />
        {/* Mobile View */}
        <FeaturedExperiencesMobile />
        {/* Desktop View */}
        <div className="hidden md:block">
          <FeaturedExperiences />
        </div>
        {/* Mobile View */}
        <ExperiencesMobile />
        {/* Desktop View */}
        <div className="hidden md:block">
          <Experiences />
        </div>
        {/* Mobile View */}
        <BusinessCTAMobile />
        {/* Desktop View */}
        <BusinessCTA />
        <LatestNews />
        <AccessSection />
        <ContactSection />
        <Footer />
      </div>
      
    </div>

  )
}