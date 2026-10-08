"use client";

import { FormEvent, useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section className="lead-form-section" id="lead-form">

      <div className="section-container">

        <div className="lead-form-wrapper">

          <div className="lead-form-content">

            <p className="section-eyebrow">
              APPLY FOR THE PROGRAM
            </p>

            <h2>
              Ready to Build a More Structured Approach to Trading?
            </h2>

            <p>
              Share your details and the Mehta Insights team
              will get in touch with you about the 16-week
              live-mentored trading program.
            </p>

            <div className="form-trust">

              <div>
                ✓ 16 weeks of live mentorship
              </div>

              <div>
                ✓ Structured market learning
              </div>

              <div>
                ✓ Direct mentor interaction
              </div>

              <div>
                ✓ No guaranteed-return promises
              </div>

            </div>

          </div>


          <div className="lead-form-card">

            {submitted ? (

              <div className="form-success">

                <div className="success-icon">
                  ✓
                </div>

                <h3>
                  Application Received
                </h3>

                <p>
                  Thank you for your interest. The Mehta Insights
                  team will contact you shortly.
                </p>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                <div className="form-field">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />

                </div>


                <div className="form-field">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>


                <div className="form-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />

                </div>


                <div className="form-field">

                  <label htmlFor="experience">
                    Trading Experience
                  </label>

                  <select
                    id="experience"
                    name="experience"
                    required
                    defaultValue=""
                  >

                    <option value="" disabled>
                      Select your experience
                    </option>

                    <option value="beginner">
                      Beginner
                    </option>

                    <option value="intermediate">
                      Intermediate
                    </option>

                    <option value="advanced">
                      Advanced
                    </option>

                  </select>

                </div>


                <div className="form-field">

                  <label htmlFor="learningMode">
                    Preferred Learning Mode
                  </label>

                  <select
                    id="learningMode"
                    name="learningMode"
                    required
                    defaultValue=""
                  >

                    <option value="" disabled>
                      Select learning mode
                    </option>

                    <option value="online">
                      Online
                    </option>

                    <option value="offline">
                      Offline
                    </option>

                  </select>

                </div>


                <div className="form-field">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly about your trading goals"
                  />

                </div>


                <label className="consent-field">

                  <input
                    type="checkbox"
                    required
                  />

                  <span>
                    I agree to be contacted regarding the
                    Mehta Insights program.
                  </span>

                </label>


                <button
                  type="submit"
                  className="form-submit"
                >
                  Submit Application
                </button>

              </form>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}