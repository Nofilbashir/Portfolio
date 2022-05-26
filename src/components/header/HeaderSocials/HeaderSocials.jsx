import React from 'react'
import '../Header.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
      <a href="https://www.linkedin.com/in/muhammad-nofil-265171188" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Nofilbashir" target='_blank' rel="noreferrer"><AiFillGithub/></a>
      <a href="https://www.instagram.com/nofilbashir/" target='_blank' rel="noreferrer"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials
