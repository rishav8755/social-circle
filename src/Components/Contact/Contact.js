import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  

   const [, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "40218f80-6a2e-4726-9ff0-133925d94d71");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
  
      if (res.success) {
        
        console.log("Succes", res);
        setResult(res.message);

      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };
    return (

    <div className='Contact'>
        <div className="Contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>At the end of the day, users want to know from brands that their voices will be heard one way or another. Adding in additional elements like phone numbers, email addresses, and social links gives users the opportunity to reach out on multiple platforms.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />
                    +91 123-456-7890
                </li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave,Cambridge<br/> MA 02151, United States</li>
            </ul>
        </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <lable>Your Name</lable>
        <input type="text" name='name' placeholder='Enter Your Name'
        required/>
        <lable>Phone Number</lable>
        <input type="tel" name='phone' placeholder='Enter Your mobile number' required/> 
        <label className='1'>Write your messages here </label> 
        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form> 
        <span>sending</span>
      </div>
    </div>
  )
}

export default Contact
