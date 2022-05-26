import React from 'react'
import './About.css'
import ME from '../../assets/about_me.jpg'
import {BiAward} from'react-icons/bi'
import {RiUserStarLine} from'react-icons/ri'
import {CgFolder} from'react-icons/cg'


const About = () => {
  return (
  <section id='about'>

    <h5 id='start__of__section'>Get To Know</h5>
    <h2 className='about__me-h2'>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <BiAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Experience</small>
              </article>

                <article className='about__card'>
                <RiUserStarLine className='about__icon'/>
                <h5>Clients</h5>
                <small>3 Worldwide Clients</small>
              </article>

                <article className='about__card'>
                <CgFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>50+ Projects Completed</small>
              </article>
              
            </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quibusdam distinctio, animi omnis a sint enim quos tempora adipisci qui at eligendi, deleniti ea nihil aliquam tempore dignissimos, repudiandae sequi!</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
      </div>  
  </section>
  )
}

export default About
