import Header from './components/Header'
import Herobanner from './components/Herobanner'
import Collections from './components/Collections'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="w-full bg-gray-200 ">
      <Header />
      
      <div className='grid gap-10'>
        <Herobanner />
        <AboutUs/>
        <Collections />
        <Services/>
        <Contact/>
      </div>
      
      <Footer />
    </div>
  )

}

export default App
