import Navbar from './components/Navbar'
import Gradients from './components/Gradients'
import Orbs3D from './components/Orbs3D'
import Hero from './components/Hero'
import SearchFilters from './components/SearchFilters'
import CategoryShowcase from './components/CategoryShowcase'
import FeaturedGrid from './components/FeaturedGrid'
import HowItWorks from './components/HowItWorks'
import TrustIndicators from './components/TrustIndicators'
import ReviewsCarousel from './components/ReviewsCarousel'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 relative">
      <Gradients />
      <Navbar />
      <div className="relative">
        <Orbs3D />
        <Hero />
      </div>
      <div id="categories">
        <SearchFilters />
        <CategoryShowcase />
      </div>
      <FeaturedGrid />
      <div id="how">
        <HowItWorks />
      </div>
      <TrustIndicators />
      <div id="reviews">
        <ReviewsCarousel />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
