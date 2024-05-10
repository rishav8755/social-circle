import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import emailjs from "emailjs-com";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setIsLoading(true);
    const { name,  email, message } = formData;

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      name,
      email,
    
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email is sent successfully!", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
        alert("Email sending failed. Please try again."); // Notify the user about the failure

      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email,  message } = formData;
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }
   
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(value);
  };

  return (
    <div className='Contact'>
      <div className="Contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>At the end of the day, users want to know from brands that their voices will be heard one way or another. Adding in additional elements like phone numbers, email addresses, and social links gives users the opportunity to reach out on multiple platforms.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
          <li><img src={phone_icon} alt="" /> +91 123-456-7890 </li>
          <li><img src={location_icon} alt="" />77 Massachusetts Ave,Cambridge<br /> MA 02151, United States</li>
        </ul>
      </div>
      <div className="contact-col">
      {!isSent && (
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name='name'
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <label>email</label>
          <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              disabled={isLoading}
            />
          {errors.email && <span className="error">{errors.email}</span>}
          <label className='1'>Write your messages here </label>
          <textarea
            name="message"
            rows="6"
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
          <button type='submit' className='btn dark-btn' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit now'}
            {!isLoading && <img src={white_arrow} alt="" />}
          </button>
          {isSent && <p>Email sent successfully!</p>}
        </form>
      )}      
      </div>
      
    </div>
  );
};

export default Contact;