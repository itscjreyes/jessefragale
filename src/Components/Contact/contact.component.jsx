import React from 'react';
import { ReactComponent as Envelope } from '../../Assets/icons/envelope.svg';
import Social from '../Social/social.component';
import Instagram from '../Instagram/instagram.component';
import Form from '../Form/form.component';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <a href="mailto:jesse@theworkingcapitalpodcast.com"><Envelope /> jesse@theworkingcapitalpodcast.com</a>
        <Social />
        <div className="contact-wrapper">
          <Form />
          <Instagram />
        </div>
      </div>
    </div>
  )
}

export default Contact;