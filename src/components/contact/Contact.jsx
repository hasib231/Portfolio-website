import React, {useRef} from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          "service_ti7uv6p",
          "template_vhxthg1",
          form.current,
          "OUdXhTStcLEMiQN_v"
        );
        e.target.reset();
    };
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>hhasibul231@gmail.com</h5>
              <a href="mailto:hhasibul231@gmail.com">Email me!</a>
            </article>
            <article className="contact__option">
              <BsLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>in/Hasibul</h5>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGtOoy1i9IMQwAAAYkgy_XoJgQY52Wf0-izOef5HUqvNd3qQ7SaVIzclhuMscMVARxxhHMwg_J0E_QjdmY4ySsq6le6zsUCZxMiPi-yRU8i6BG7-zm8CnoMg7KsOOZ_ZYfncAg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhasibul-hasan-699230190"
                target="_blank"
              >
                Message me on LinkedIn!
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message..."
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
}

export default Contact;