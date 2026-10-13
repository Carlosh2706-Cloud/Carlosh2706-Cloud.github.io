"use client";
import React from "react";
import aboutImage from "../../../public/assets/images/gallery/gallery_6.jpeg";
import "./about2.css";
import Image from "next/image";
import HeroBtn from "../components/HeroBtn";
import Link from "next/link";

export default function About2() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-1"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content">
            <h6 className="fst-italic">
                Why Horses?
            </h6>
            <h3>Connection, growth, and healing through horses.</h3>
            <p>
              Horses have a unique ability to connect with people in ways that
              words sometimes cannot. As highly perceptive and social animals,
              they respond to our emotions, body language, and presence,
              offering honest feedback that encourages self-awareness and
              personal growth. Working alongside horses creates opportunities to
              practice trust, patience, boundaries, communication, and
              confidence in a supportive, nonjudgmental environment. Through
              these experiences, we can slow down, reconnect with ourselves, and
              discover new ways of relating to others. At Grounded in the
              Willows, we believe horses can be powerful partners in personal
              growth, helping us find greater connection, balance, and
              understanding—one moment at a time.
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
