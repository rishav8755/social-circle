import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
const App = () => {
  
  return (
    <div>
  <Navbar/>
      <Hero/>
      <div className='ram'>
      <Title subTitle='Your Program' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
