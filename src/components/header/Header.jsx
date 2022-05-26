import React, { useState } from 'react'
import './Header.css'
import CV from '../../assets/CV.pdf'
import ME from '../../assets/me9.png'
import HeaderSocials from './HeaderSocials/HeaderSocials'
import Cube from './Cube/Cube'
import {BsSunFill} from 'react-icons/bs'
import {IoMdMoon} from 'react-icons/io'




const Header = () => {

  const [toogleTheme, setToogleTheme] = useState(true)

  const lightTheme = {
  "--color-bg": "#f5f3f4",
    "--color-bg-variant": "#fed0bb",
    "--color-primary": "#b23a48",
    "--color-primary-variant": "#fed0bb",
    "--color-white":"#fff",
    "--color-text": '#461220',
    "--color-light": "#660708",
    "--transition" : "all 400ms ease",
    "--cube-size": "2.5rem",
    "--swiper-theme-color": "#b23a48",
    "--color-service-card": "#fed0bb",
    "--color-service-card-border":"#b23a48",
    "--color-awatar-border":'#b23a48',
    "--conatiner-width-lg": "75%",
   " --conatiner-width-md": "86%",
    "--container-width-sm": "90%",
};
const darkTheme = {
 "--color-bg": "#1f1f38",
    "--color-bg-variant": "#2c2c6c",
    "--color-primary": "#4db5ff",
    "--color-primary-variant": "rgba(77,181,255,0.4)",
    "--color-white":"#fff",
    "--color-text": '#fff',
    "--color-light": "rgba(255,255,255, 0.6)",
    "--transition" : "all 400ms ease",
    "--cube-size": "2.5rem",
    "--swiper-theme-color": "rgba(77, 181, 255, 0.4)",
    "--color-awatar-border": 'rgba(77,181,255,0.4)',
    "--color-service-card": "rgba(77, 181, 255, 0.4)",
    "--color-service-card-border":" #4db5ff",
    "--conatiner-width-lg": "75%",
   " --conatiner-width-md": "86%",
    "--container-width-sm": "90%",
};


const applyTheme = () => {
  if(toogleTheme===false){
      Object.keys(lightTheme).map(key => {

    console.log(key)
    const value = lightTheme[key];
    console.log(value)
    document.documentElement.style.setProperty(key, value);
    setToogleTheme(!toogleTheme)
  });
  }


    else {
        Object.keys(darkTheme).map(key => {

    console.log(key)
    const value = darkTheme[key];
    console.log(value)
    document.documentElement.style.setProperty(key, value);
    setToogleTheme(!toogleTheme)
  });
    }

};
  

  return (
   <header>
     <div className='container header__container'>
       
      <div className='theme_toogle'>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={()=>applyTheme()}/>
        <label htmlFor="checkbox" className="label">
          <i className='fas fa-sun'><BsSunFill/></i>
          <i className="fas fa-moon"><IoMdMoon/></i>
        <div className='ball'></div>
        </label>
      </div>

       <h5>Hello I'm</h5>
       <h1>Nofil Bashir</h1>
       <div className='header__cube'>
       <h5 className='text-light'>Full Stack Developer | Data Scientist</h5>
       <Cube />
       </div>
       
       <div className='cta'>
         <a href={CV} download className='btn'>Download Resume</a>
         <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
       </div>

        <HeaderSocials/>

       <div className="me">
         <img src={ME} alt="Nofil bashir's image" />
       </div>

      
     </div>
   </header>
  )
}

export default Header
