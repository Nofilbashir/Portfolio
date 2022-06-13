import React ,{useState}from "react";
import Header from './components/header/Header'
import About from'./components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Navigation from './components/nav/Navigation'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Portfolio from "./components/portfolio/Portfolio";
import {AppContext} from './contexts/AppContexts'

const App = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
    <AppContext.Provider value={{activeNav, setActiveNav}}>
    <Header/>
    <Navigation/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </AppContext.Provider>
    </>
  )
};

export default App