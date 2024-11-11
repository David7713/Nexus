import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedView from './components/DetailedView/DetailedView';
import React from 'react'
import './App.css'
import { AudioProvider } from '../src/context/AudioContext'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import FAQ from './components/FAQ/FAQ'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader'


const App = () => {
  return (
    <AudioProvider>
      <Router>
        <div>
          <Preloader>
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <About />
                  <Portfolio />
                  <Services />
                  <FAQ />
                  <div className='footer-contact-section'>
                    <Contact />
                    <Footer />
                  </div>
                </>
              } />
              <Route path="/portfolio/:id" element={<DetailedView />} />
            </Routes>
          </Preloader>
        </div>
      </Router>
    </AudioProvider>
  )
}

export default App;
