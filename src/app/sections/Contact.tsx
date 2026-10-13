"use client";

import React, { useState } from "react";
import "./contact.css";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleSubmitBooking = async (e: Event | any) => {
    e.preventDefault();
    // simple form validation
    if (text.name === "" || text.email === "") {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    //POST request sent
    try {
      const response = await fetch("http://localhost:3000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      setText({ ...text, validate: "loading" });

      const result = await response.json();
      if (result) {
        setText({ ...text, validate: "success" });
        // console.log('Success:', result);
      }
    } catch (error) {
      setText({ ...text, validate: "error" });
      // console.error('Error:',error);
    }
  };

  return (
    <section id="contact" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="contact-layout">
          {/* Left column */}
          <div className="contact-info">
            <SectionTitle
              title="Ready to take the next step?"
              subtitle="GET IN TOUCH"
            ></SectionTitle>

            <p>
              Fill out the next form to ask questions, share your goals, or book
              your session. Let’s start a conversation about how equine-assisted
              wellness can support your journey. We’ll be in touch within 24
              hours.
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              <a href="mailto:your-email@example.com">
                WILLOWSEMAIL@yourmom.com
              </a>
            </p>

            <p>
              <i className="bi bi-geo-alt"></i>
              Kamloops, British Columbia
            </p>
          </div>

          {/* Right column */}
          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>
              Share a few details so we can start planning your session
              together.
            </p>
            <br></br>
            <form
              onSubmit={handleSubmitBooking}
              className="booking-form"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={text.name}
                  className="form-control"
                  placeholder="Your Name"
                  onChange={handleTextChange}
                ></input>
              </div>

              <div className="form-group mt-3">
                <p>Email</p>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={text.email}
                  placeholder="Your Email"
                  onChange={handleTextChange}
                ></input>
              </div>

              <div className="form-group mt-3">
                <p>Message</p>
                <textarea
                  className="form-control"
                  name="message"
                  value={text.message}
                  rows={5}
                  placeholder="Message"
                  onChange={handleTextChange}
                ></textarea>
              </div>

              <div className="mb-3">
                {text.validate === "loading" && (
                  <div className="loading">Send Booking</div>
                )}
                {text.validate === "incomplete" && (
                  <div className="error-message">
                    Please fill in all above details for booking a table
                  </div>
                )}
                {text.validate === "success" && (
                  <div className="sent-message">
                    Your booking request was sent.
                  </div>
                )}
                {text.validate === "error" && (
                  <div className="error-message">Server Error.</div>
                )}
              </div>
              <div className="text-center">
                <button type="submit">Book a Session</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
