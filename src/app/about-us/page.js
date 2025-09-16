"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Aboutus() {
  const [isClient, setIsClient] = useState(false);

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
          <h1 className="display-3 mb-4 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            About Us
          </p>
        </div>
        <div className="row g-4">
          {/* Who We Are */}
          <div className="col-lg-6 col-md-12">
            <div className="card custom-hover-card h-100 p-4 border-0 shadow-sm">
              <h4 className="fw-bold mb-3">Who We Are</h4>
              <ul className="list-unstyled ps-3">
                <li>
                  <i className="bi bi-check text-dark me-2"></i>{" "}
                  Cloudheard Consultancy is a boutique Oracle Cloud partner.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> Founded
                  by industry experts with 30+ years of combined cloud
                  experience.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> We bring
                  offshore cost-efficiency guided by seasoned Architects and
                  Delivery Managers.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> Our
                  focus is on quality, transparency, and long-term client
                  success.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i>{" "}
                  Experienced in delivering HCM, ERP, and Cloud projects across
                  industries.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> A small,
                  agile team that works like an extension of your own.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i>{" "}
                  Enterprise-grade expertise, without the enterprise-level price
                  tag.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> Your
                  trusted advisors for every step of the Oracle Cloud journey.
                </li>
              </ul>
            </div>
          </div>

          {/* What We Do */}
          <div className="col-lg-6 col-md-12">
            <div className="card custom-hover-card h-100 p-4 border-0 shadow-sm">
              <h4 className="fw-bold mb-3">What We Do</h4>
              <ul className="list-unstyled ps-3">
                <li>
                  <i className="bi bi-check text-dark me-2"></i> We
                  specialize in Oracle Fusion Cloud solutions that empower
                  individuals and transform businesses.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> From HCM
                  and ERP to cloud migration and managed services, our approach
                  is hands-on, human-first, and impact-driven.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> We train
                  and mentor future consultants from all walks of life and help
                  them make a mark in the Oracle Cloud ecosystem.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> Our
                  mission is to create careers and uplift communities.
                </li>
                <li>
                  <i className="bi bi-check text-dark me-2"></i> Whether
                  you&apos;re a client or a candidate, we deliver more than
                  service — we deliver transformation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Our Team
            </p>
            <h1 className="display-5 mb-5">Exclusive Team</h1>
          </div>

          <div className="row g-4">
            {/* Team Member 1 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item h-100 d-flex flex-column">
                <div className="position-relative">
                  <Image
                    src="/img/team-1.jpg"
                    alt="Kate Winslet"
                    width={400}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="team-text mt-3">
                  <h4 className="mb-0">Kate Winslet</h4>
                  <div className="team-social d-flex">
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item h-100 d-flex flex-column">
                <div className="position-relative">
                  <Image
                    src="/img/team-2.jpg"
                    alt="Jac Jacson"
                    width={400}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="team-text mt-3">
                  <h4 className="mb-0">Jac Jacson</h4>
                  <div className="team-social d-flex">
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item h-100 d-flex flex-column">
                <div className="position-relative">
                  <Image
                    src="/img/team-3.jpg"
                    alt="Doris Jordan"
                    width={400}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="team-text mt-3">
                  <h4 className="mb-0">Doris Jordan</h4>
                  <div className="team-social d-flex">
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="btn btn-square rounded-circle mx-1"
                      href="#"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
