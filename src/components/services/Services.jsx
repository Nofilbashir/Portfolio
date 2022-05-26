import React from 'react'
import './Services.css'
import{BiCheckDouble} from 'react-icons/bi'
const Services = () => {

  const data=[{
  id:1,
  name:'Font-End Developement',
  services:[{id:1,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:2,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:3,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:4,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:5,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
  
  ]
},
{
  id:2,
  name:'Back-End Developement',
  services:[{id:1,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:2,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:3,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:4,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:5,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
  
  ]
},
{
  id:3,
  name:'Data Analytics & Dashboards',
  services:[{id:1,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:2,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:3,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:4,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
            {id:5,service:'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
  
  ]
}]



  return (
    <section id='services'>
      <h5 id='start__of__section'>What I Offer</h5>
      <h2>My Service</h2>

      <div className="container services__container">
      
    {data.map((obj)=>{

        return(
          <article className="services" key={obj.id}>
          <div className="services__head">
            <h3>{obj.name}</h3>
          </div>
            <div className="service__list">
        <ul>
            <li>
                
                {obj.services.map((obje)=>{

                  return (
                  <div className='services__list-li' key={obje.id}> 
                    <BiCheckDouble className='services__list-icon'/>
                    <p>{obje.service}</p>
                  </div>
                    )
                })}

              </li>
            </ul>

            </div>
            

        </article>
        )
      })}

      </div>

    </section>
  )
}





export default Services
