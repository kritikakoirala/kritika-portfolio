import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experiences from './components/Experience'
import Summary from './components/Summary'
import Footer from './components/Footer'


function App() {
  return (
    <>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10'>


        <Navbar />
        <Hero />
        <Projects />
        <div className='flex flex-wrap mt-15 md-10 md:mb-2'>
          <Experiences />
          <Summary />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default App
