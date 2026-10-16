"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { navs } from "../data/data";
import "./nav.css";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [activeTarget, setActiveTarget] = useState<string | null>(null);

  // Track scrolling without recreating the listener
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update the active navigation link
  useEffect(() => {
    if (pathname !== "/") {
      setActiveTarget(null);
      return;
    }

    const updateActiveLink = () => {
      const header = document.querySelector("#header");
      const offset = header?.getBoundingClientRect().height ?? 0;
      const position = window.scrollY + offset + 200;

      let currentTarget: string | null = null;

      navs.forEach((nav) => {
        const section = document.getElementById(nav.target);

        if (
          section &&
          position >= section.offsetTop &&
          position < section.offsetTop + section.offsetHeight
        ) {
          currentTarget = nav.target;
        }
      });

      setActiveTarget(currentTarget);
    };

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [pathname, scroll]);

  // Scroll to a section or navigate back to the homepage
  const handleScrollTo = (section: string) => {
    setOpen(false);

    if (pathname !== "/") {
      router.push(`/#${section}`);
      return;
    }

    const target = document.getElementById(section);

    if (!target) {
      console.warn(`Navigation section not found: #${section}`);
      return;
    }

    const header = document.querySelector("#header");
    const offset = header?.getBoundingClientRect().height ?? 0;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? "navbar-mobile" : ""}`}
    >
      <div className="mobile-nav-logo">
        {/* <a href="/" aria-label="Grounded in the Willows home">
          <img
            src="/assets/images/your-logo.png"
            alt="Grounded in the Willows"
          />
        </a> */}

         <h1 className='className="mobile-nav-logo'>
                <a href="/">Grounded in the Willows</a>
        </h1>
      </div>

      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <a
              href={pathname === "/" ? `#${nav.target}` : `/#${nav.target}`}
              className={`nav-link scrollto ${
                activeTarget === nav.target ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleScrollTo(nav.target);
              }}
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="mobile-nav-socials">

        <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">
          <i className="bi bi-facebook" />
        </a>
        <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">
          <i className="bi bi-instagram" />
        </a>
        <a href="YOUR_FACEBOOK_URL" aria-label="Youtube">
          <i className="bi bi-youtube" />
        </a>
        
      </div>

      <button
        type="button"
        className="mobile-nav-toggle"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="navbar"
        onClick={() => setOpen((previous) => !previous)}
      >
        <i className={open ? "bi bi-x-lg" : "bi bi-list"} />
      </button>
    </nav>
  );
}
