import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <p>harshavardhanracha9@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 6309646299</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-details">
                <h3>Location</h3>
                <p>HYDERABAD,TELANGANA,INDIA</p>     
              </div>
            
            </div>
            <div>
              <p class="footertxt" > Designed and Handcoded with <span > <span class="semibold">♥</span></span> by Harsha © 2025 </p>
            </div>
          </div>          
        </div>
        
    </section>
  );
};

export default Contact;