import React from 'react';
import "./contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="contact-details">
      <h3>Contact Form</h3>
      <div className="contact-container">
      <form onSubmit={handleSubmit}>
        
            <input type="text" required name="user_name" placeholder="Name" />
           
            <input type="text" required  name="user_subject" placeholder="Subject" />
          
            <input type="email" required name="user_email" placeholder="Email" />
           
            <textarea rows="7" placeholder="Enter your message here..."  cols="20" name="comment">
             
            </textarea>
            <button>Submit</button>
          </form>
          </div>
        </div>
  )
}

export default Contact