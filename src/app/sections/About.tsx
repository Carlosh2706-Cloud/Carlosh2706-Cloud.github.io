import React from "react";
import aboutImage from "../../../public/assets/images/hero_background.jpeg";
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
              I offer ground-based Equine Facilitated Wellness focused on
              grounding, sensory awareness, nervous-system education,
              present-moment attention, self-regulation skills, connection,
              choice, and strengths-based reflection through safe, respectful
              interaction with horses
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
