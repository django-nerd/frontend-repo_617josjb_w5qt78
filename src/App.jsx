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
    <div className="min-h-screen text-gray-100 relative bg-[radial-gradient(1200px_600px_at_80%_-200px,rgba(255,137,100,0.12),transparent_60%),radial-gradient(900px_500px_at_-200px_200px,rgba(255,214,102,0.10),transparent_60%),#0e0a10]">
      <Gradients />
      <Navbar />
      <div className="relative">
        <Orbs3D />
        <Hero />
      </div>
      <div id="categories">
        <div id="search">
          <SearchFilters />
        </div>
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
