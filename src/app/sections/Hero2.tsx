'use client';

import React, {useEffect} from 'react';
import 'glightbox/dist/css/glightbox.css';
import './hero2.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero2() {

  return (
   <section
      id="hero2"
      className="d-flex align-items-center justify-content-center text-center"
      >
      <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
      >
          <div className="row justify-content-center">
          <div className="col-12">
  
              <h6>What we do</h6>
  
              <h2>
              At grounded in the willows
              </h2> 
            <p>We offer ground-based Equine Facilitated Wellness focused on grounding, sensory awareness, nervous-system education, present-moment attention, self-regulation skills, connection, choice, and strengths-based reflection through safe, respectful interaction with horses.</p>
              <div className="btns d-flex justify-content-center">
              <HeroBtn name="Book a Session" target="book session" />
              </div>
          </div>
          </div>
      </div>
      </section>
  )
}
