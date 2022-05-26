import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/portfolio1.png'

const Portfolio = () => {

  const data=[{
    id:1,
    name:'This is a portfolio item title',
    image: require('../../assets/portfolio1.png'),
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },{
    id:2,
    name:'This is a portfolio item title',
    image: require('../../assets/portfolio2.png'),
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },
{
    id:3,
    name:'This is a portfolio item title',
    image: require('../../assets/portfolio3.png'),
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },
{
    id:4,
    name:'This is a portfolio item title',
    image: require('../../assets/portfolio4.png'),
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },
{
    id:5,
    name:'This is a portfolio item title',
    image: require('../../assets/portfolio5.png'),
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },
{
    id:6,
    name:'This is a portfolio item title',
    image: require('../../assets/portfolio6.png'),
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  }
]




  return (
  <section id='portfolio'>
      <h5 id='start__of__section'>What Recent Work</h5>
      <h2>Portfolio</h2>
    <div className="container portfolio__container">
    {data.map((obj)=>{
      return(
      <article className='portfolio__items' key={obj.id}>
        <div className='portfolio__item-image'>
          <a href={obj.viewProject} target='_blank'>
            <img src={obj.image} alt="" />
          </a>
         </div>
          <h3>{obj.name}</h3>
          <div className="portfolio__items-cta">
          <a className='btn' href={obj.githubLink} target='_blank'>Code</a>
          <a className='btn btn-primary' href={obj.viewProject} target='_blank'>View Project</a>
          </div>
      </article>
      )
    })}
      
    </div>
  </section>
  )
}
export default Portfolio
