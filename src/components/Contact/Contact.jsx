import React from 'react';
import "./contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="contact-details">
      <form onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea rows="7" cols="20" name="comment">
              Enter your message here...
            </textarea>
            <button>Submit</button>
          </form>
        </div>
  )
}

export default Contact