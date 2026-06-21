import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Rooms from './sections/Rooms'
import Amenities from './sections/Amenities'
import About from './sections/About'
import Location from './sections/Location'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Rooms />
        <Amenities />
        <About />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
