'use client';

import React, {useEffect} from 'react';
import 'glightbox/dist/css/glightbox.css';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {

     useEffect(() => {
        let lightbox: any;

        const initLightbox = async () => {
            const GLightbox = (await import('glightbox')).default;

            lightbox = GLightbox({
                selector: '.glightbox',
            });
        };

        initLightbox();

        return () => {
            lightbox?.destroy();
        };
    }, []);


  return (
    <section
    id="hero"
    className="d-flex align-items-center justify-content-center text-center"
    >
    <div
        className="container position-relative"
        data-aos="zoom-in"
        data-aos-delay="100"
    >
        <div className="row justify-content-center">
        <div className="col-12">

            <h2>Slow down, find balance, and connect through <span>horses.</span></h2>

            {/* <h1>
            and connect through <span>horses</span>
            </h1> */}

            

            <div className="btns d-flex justify-content-center gap-3">
            <HeroBtn name="Our Programs" target="our programs" />
            <HeroBtn name="Book Session" target="book session" />
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}
