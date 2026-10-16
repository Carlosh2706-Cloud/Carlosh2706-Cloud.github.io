"use client";

import React, { useEffect } from "react";
import "glightbox/dist/css/glightbox.css";
import "./hero3.css";
import HeroBtn from "../components/HeroBtn";

export default function Hero3() {
  useEffect(() => {
    let lightbox: any;

    const initLightbox = async () => {
      const GLightbox = (await import("glightbox")).default;

      lightbox = GLightbox({
        selector: ".glightbox",
      });
    };

    initLightbox();

    return () => {
      lightbox?.destroy();
    };
  }, []);

  return (
    <section
      id="hero3"
      className="d-flex align-items-center justify-content-center text-center"
    >
      <div
        className="container position-relative"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-12">
            <h2>
              What is <span>Equine</span> Facilitated Wellness?
            </h2>
            <span className="hero-divider"></span>
            <p>
              Equine Facilitated Wellness offers a gentle, welcoming space to
              slow down, reconnect with yourself, and explore personal growth
              alongside horses. Through simple, ground-based activities such as
              observing, grooming, or walking beside a horse, you can discover
              new ways to build confidence, practice mindfulness, understand
              your emotions, and develop a deeper sense of connection. There is
              no riding involved and no experience with horses is needed—just an
              opportunity to show up as you are, move at your own pace, and
              explore what feels right for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
