"use client";

import React, { useState, useEffect } from "react";
import "./subscribe.css";
import "glightbox/dist/css/glightbox.css";

export default function Subscribe() {
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

  const initialState = {
    name: "",
    email: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.name.trim() || !text.email.trim()) {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    setText({ ...text, validate: "loading" });

    try {
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: text.name,
          email: text.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setText({ ...initialState, validate: "success" });
    } catch (error) {
      setText((prev) => ({ ...prev, validate: "error" }));
    }
  };

  return (
    <section
      id="subscribe"
      className="subscribe_form_layout d-flex align-items-center justify-content-center text-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container position='relative' ">
        <div className="subscribe-content">
          <h1>Stay Connected</h1>

          <p>
            Subscribe to receive updates and news. Join us as we explore
            connection, growth, and wellness through horses.
          </p>

          <form onSubmit={handleSubmitBooking} className="subscribe-form">
            <div className="subscribe-fields">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={text.name}
                  className="form-control"
                  placeholder="Your Name"
                  onChange={handleTextChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={text.email}
                  className="form-control"
                  placeholder="Your Email"
                  onChange={handleTextChange}
                  autoComplete="email"
                  required
                />
              </div>

              <button type="submit" disabled={text.validate === "loading"}>
                {text.validate === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            <div className="subscribe-feedback" aria-live="polite">
              {text.validate === "incomplete" && (
                <div className="error-message">
                  Please enter your name and email.
                </div>
              )}

              {text.validate === "success" && (
                <div className="sent-message">Thanks for subscribing!</div>
              )}

              {text.validate === "error" && (
                <div className="error-message">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
