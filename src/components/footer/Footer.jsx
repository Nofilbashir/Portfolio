import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsArrowBarRight} from 'react-icons/bs'
import {BsArrowBarLeft} from 'react-icons/bs'



const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer__logo'>Nofil Bashir</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className="footer__socials">
           <a href="https://www.facebook.com/nofil.bashir.7" target='_blank'><FaFacebookSquare/></a>
          <a href="https://twitter.com/bashirnofil" target='_blank'><AiOutlineTwitter/></a>
          <a href="https://www.instagram.com/nofilbashir/" target='_blank'><AiFillInstagram/></a>
        </div>

      </footer>
    </div>
  )
}

export default Footer
