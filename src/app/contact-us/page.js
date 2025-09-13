"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactUs() {
  const [isClient, setIsClient] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mail: "",
    mobileNumber:"",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully");
        setForm({ name: "", mail: "", mobileNumber:"", subject: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Page Header */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 mb-4 animated slideInDown">Contact Us</h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div
              suppressHydrationWarning
              className="col-12 col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                Contact
              </p>
              <h1 className="display-5 mb-4">
                If You Have Any Query, Please Contact Us
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="mail"
                        placeholder="Your Email"
                        value={form.mail}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="mail">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="mobileNumber"
                        placeholder="Your Mobile Number"
                        value={form.mobileNumber}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="mail">Your Mobile Number</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>

                  {status && (
                    <div className="col-12">
                      <p className="mt-2 mb-0">{status}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Google Map */}
            <div
              suppressHydrationWarning
              className="col-12 col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "450px" }}
            >
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4784708940747!2d77.27169737478984!3d9.725475490366358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0701ce98bf8b89%3A0xe923947e50baf2eb!2sCloudheard%20Consultancy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757485982735!5m2!1sen!2sin"
                  style={{ minHeight: "450px", border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
