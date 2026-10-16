import React from "react";
import aboutImage from "../../../public/assets/images/gallery/gallery_1.jpeg";
import "./about.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h6 className="fst-italic">What's Involved?</h6>
            <h3>Healing through connection</h3>
            {/* <ul>
                        <li>
                            <i className='bi bi-check-circle'></i> Becauseeeeee
                        </li>
                        <li>
                            <i className='bi bi-check-circle'></i> Becauseeeeee
                        </li>
                        <li>
                            <i className='bi bi-check-circle'></i> Becauseeeeee
                        </li>
                        <li>
                            <i className='bi bi-check-circle'></i> Becauseeeeee
                        </li>
                    </ul> */}
            <p>
              During a session, you’ll be guided through gentle, ground-based activities such as observing horse behaviour, mindful presence, grooming, or walking alongside a horse. Each experience is tailored to your comfort level, offering opportunities to explore communication, personal boundaries, confidence, and self-awareness in a calm, supportive environment. No previous horse experience is needed, and you can pause or step away at any time. Throughout the session, your wellbeing and the horse’s comfort remain the priority.
            </p>
            <Link href={`menu/about`} className="learn-more">
              Learn More
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
