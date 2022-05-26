import React, { useEffect } from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef, useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const[sent, setSent] = useState('')
  const form = useRef()
  const [input, setInput] = useState({
    name:'',
    email:'',
    message:''
  })

    const fillDetails=(e)=>{
  
          const inputName=e.target.name;
          const inputValue=e.target.value;
          setInput({...input,[inputName]:inputValue})
      }


  const sendEmail = (e) => {
    e.preventDefault();

    if(input.name && input.email && input.message){
    emailjs.sendForm('service_1dfhyni', 'template_fs9nue9', form.current, 'kBxhbgyOTkvwm01I-')
      .then((result) => {
          console.log(result.text);
          // e.target.reset();
          setSent(true)
          setInput({
          name:'',
          email:'',
          message:''
        })
      }, (error) => {
          console.log(error.text);
          setSent(false)
      })}
  };

  useEffect(()=>{
    if (!sent==''){
      setTimeout(()=>{
        setSent((prev)=>{
          return ''
        })
      },8000)
    }
  })

  return (
    <section id='contact'>
    <h5 id='start__of__section'>Get In Touch</h5>
    <h2 className='about__me-h2'>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
        <HiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>nofil.bashiir@gmail.com</h5>
        <a href="mailto:nofil.bashiir@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className='contact__option'>
        <AiOutlineWhatsApp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+92 305 4106689</h5>
        <a href="https://wa.me/923054106689" target="_blank">Send a message</a>
        </article>
      </div>
      <form ref={form}>
        <input type="text" name='name' placeholder='Your Full Name' required value={input.name} onChange={fillDetails} />
        <input type="email" name='email' placeholder='Your Email' value={input.email} onChange={fillDetails}required/>
        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' value={input.message} onChange={fillDetails} required ></textarea>
        <div className='contact__button-div'>
        <button type='submit' className='btn btn-primary' onClick={sendEmail}>Send Message</button>
        {sent===''?<p></p>:sent===true?<p>Message sent</p>: sent===false?<p>Message not sent, Please try Whatsapp</p>:null}
        </div>
      </form>
    </div>

    </section>
  )
}

export default Contact
