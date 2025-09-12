"use client";

import { useEffect, useState } from "react";

export default function Home() {
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
        setForm({ name: "", mail: "",mobileNumber:"", subject: "", message: "" });
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
      {/* Carousel Start */}
      <div
        suppressHydrationWarning
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="/img/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8">
                      <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                        Your Oracle Cloud Implementation Experts
                      </p>
                      <h1 className="display-5 mb-4 animated slideInDown text-dark">
                        “Big-firm expertise. <span className="text-primary">Boutique-firm attention.</span> Offshore pricing.”
                      </h1>
                      <a href="/about-us" className="btn btn-primary py-3 px-5 animated slideInDown">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item"> {/* Removed the “actives” typo and only one active slide */}
              <img
                className="w-100"
                src="/img/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                        Your Oracle Implementation Experts
                      </p>
                      <h1 className="display-5 mb-4 animated slideInDown text-dark">
                        Empowering <span className="text-primary">Businesses</span> with scalable, secure and innovative solutions
                      </h1>
                      <a href="#" className="btn btn-primary py-3 px-5 animated slideInDown">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Features Start */}
      <div className="container-xxl feature py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              suppressHydrationWarning
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                Why Choose Us!
              </p>
              <h1 className="display-7 mb-4">
                Your Trusted Partner in Oracle Cloud Transformation!
              </h1>
              <p className="mb-4">
                At Cloudheard, we bring deep domain expertise in Oracle applications
                to empower organisations on their digital journey. With years of experience, we have
                successfully guided clients through:
              </p>
              <a className="btn btn-primary py-3 px-5" href="#">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div
                      suppressHydrationWarning
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <div className="feature-box border rounded p-4">
                        <i className="fa fa-check fa-3x text-primary mb-3"></i>
                        <h4 className="mb-3">Oracle Cloud ERP</h4>
                        <p className="mb-3">
                          Simplifying enterprise processes with intelligent financials, procurement, and project management.
                        </p>
                        <a className="fw-semi-bold" href="/expertise/cloud-erp">
                          Read More <i className="fa fa-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>

                    <div
                      suppressHydrationWarning
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <div className="feature-box border rounded p-4">
                        <i className="fa fa-check fa-3x text-primary mb-3"></i>
                        <h4 className="mb-3">Oracle Cloud HCM</h4>
                        <p className="mb-3">
                          Streamlining human capital management, payroll, workforce planning, and talent strategies.
                        </p>
                        <a className="fw-semi-bold" href="/expertise/cloud-hcm">
                          Read More <i className="fa fa-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="feature-box border rounded p-4">
                    <i className="fa fa-check fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">On-Premise to Cloud Migration</h4>
                    <p className="mb-3">
                      Helping businesses modernise operations by moving from legacy systems to Oracle Cloud Infrastructure.
                    </p>
                    <a className="fw-semi-bold" href="/expertise/on-prem-to-cloud">
                      Read More <i className="fa fa-arrow-right ms-1"></i>
                    </a>
                  </div>

                  <div className="col-12 mt-4 wow fadeIn" data-wow-delay="0.9s">
                    <div className="feature-box border rounded p-4">
                      <i className="fa fa-check fa-3x text-primary mb-3"></i>
                      <h4 className="mb-3">Oracle Subscription Management</h4>
                      <p className="mb-3">
                        Unlocking revenue opportunities with advanced subscription lifecycle management.
                      </p>
                      <a className="fw-semi-bold" href="/expertise/oracle-subscription">
                        Read More <i className="fa fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* Features End */}

      {/* Service Start */}
      <div className="container-xxl service py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Our Services
            </p>
            <h1 className="display-11 mb-5">
              Deliver comprehensive Oracle Cloud solutions that streamline operations, enhance workforce management, and simplify business processes.
            </h1>
          </div>
          {/* Tabs */ }
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            {/* Tab buttons & content here */}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Callback / Contact Start */}
      <div className="container-fluid callback my-5 pt-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="bg-white border rounded p-4 p-sm-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div
                  className="text-center mx-auto wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ maxWidth: "600px" }}
                >
                  <h1 className="display-5 mb-5">Contact Us</h1>
                  <p className="d-inline-block text-primary fw-semi-bold py-1 px-2">
                    Have a query in your mind? Connect with us by filling out the form below!
                  </p>
                </div>
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
            </div>
          </div>
        </div>
      </div>
      {/* Callback End */}
    </>
  );
}
