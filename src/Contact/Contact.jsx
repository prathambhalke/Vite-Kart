import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="Contact-container">
      <div className="heading">
        <h2 className="contact-head">CONTACT US</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5602345341595!2d76.56411461315929!3d18.412855343085116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83f3b0f81e69%3A0xbea444e4bac8ad8d!2sCOCSIT%20College!5e0!3m2!1sen!2sin!4v1668239803365!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form
        action="https://formspree.io/f/mdojyqpd"
        method="POST"
        className="form"
      >
        <input type="text" name="Username" id="" placeholder="Username"required />
        <input type="email" name="Email"id="" placeholder="E-Mail" required />
        <textarea
          name="Message"
          placeholder="Enter your message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input className="Con-Btn" type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;
