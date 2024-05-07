import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>The University of London is the UK’s leading provider of digital and blended distance education internationally, offering programmes to around 40,000 students in 190 countries across the world. Although proudly rooted in London, our community and impact are global. </p>
        <p>True to our long tradition of distance learning, we deliver teaching from our federation of world-renowned London universities to students across the globe all while leading the national conversation in humanities research.</p>
        <p>True to our long tradition of distance learning, we deliver teaching from our federation of world-renowned London universities to students across the globe – all while leading the national conversation in humanities research.</p>

      </div>
    </div>
  )
}

export default About
