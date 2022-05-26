import React from 'react'
import './Cube.css'
import react_logo from '../../../assets/cube-images/react.png'
import js from '../../../assets/cube-images/js.png'
import python from '../../../assets/cube-images/python.png'
import node from '../../../assets/cube-images/node.jpg'
import html from '../../../assets/cube-images/html.png'
import css from '../../../assets/cube-images/css.png'

const Cube = () => {
  return (
    <div className='wrapper'>
        <div className="cube-box">
            <img src={react_logo} alt="" />
            <img src={node} alt="" />
            <img src={js} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={python} alt="" />
        </div>
      
    </div>
  )
}

export default Cube
