import React,{useState, useContext} from 'react'
import { AppContext } from '../../contexts/AppContexts'
import './Navigation.css'
import {CgHomeAlt} from 'react-icons/cg'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BsCodeSquare} from 'react-icons/bs'
import {BiMessageSquareDots} from 'react-icons/bi'




const Navigation = () => {

  const {activeNav, setActiveNav} = useContext(AppContext)
  
  return (
   <nav className='floting_Navigation'>
     
     <a href="/#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><CgHomeAlt/></a>
     <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
     <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBookAlt/></a>
     <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active':''}><BsCodeSquare/></a>
     <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageSquareDots/></a>
    
   </nav>
  )
}

export default Navigation
