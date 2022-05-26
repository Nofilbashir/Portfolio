import React from 'react'
import './Testimonials.css'
import {Pagination ,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const Testimonials = () => {

  const data = [{
    id:1,
    name:'Shahab',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione, asperiores aperiam suscipit ut facere placeat quidem praesentium incidunt laborum. Necessitatibus ducimus quaerat magni quos dolor. Nemo tempore sed quam.',
    awatar: require('../../assets/me1.png')
  },
{
    id:2,
    name:'Ehtisham',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione, asperiores aperiam suscipit ut facere placeat quidem praesentium incidunt laborum. Necessitatibus ducimus quaerat magni quos dolor. Nemo tempore sed quam.',
    awatar: require('../../assets/me1.png')
  },
{
    id:3,
    name:'Saad',
    review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione, asperiores aperiam suscipit ut facere placeat quidem praesentium incidunt laborum. Necessitatibus ducimus quaerat magni quos dolor. Nemo tempore sed quam.',
    awatar: require('../../assets/me1.png')
  }]
  return (

    <section id='testimonials'>
     <h5 id='start__of__section'>Reviews & Feedback</h5>
    <h2 className='about__me-h2'>About Me</h2>

    <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      autoplay={{delay:2000}}
      pagination={{ clickable: true }}>
      {data.map((obj)=>{
        return(

      <SwiperSlide key={obj.id} className='testimonials'>
        <div className="testimonial__avatar">
          <img src={obj.awatar} alt="" />
        </div>
        <h5 className='client__name'>{obj.name}</h5>
        <small className='client__review'>{obj.review}</small>
      </SwiperSlide>

        )
      })}
    
    </Swiper>

    </section>
  )
}

export default Testimonials
