"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Versioncontrol() {
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
        suppressHydrationWarning
        className="container-fluid page-header mb-5 wow fadeIn shadow-sm"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-5 mb-4 animated slideInDown">Our Expertise</h1>
          <p className="mb-2">
            At Cloudheard Consultancy, we bring 30+ years of combined cloud
            experience and <br /> multiple proven deliveries to help
            organisations simplify, optimise, and scale with <br />
            Oracle Cloud and beyond.
          </p>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Version Control for Oracle Fusion
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container-fluid">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="display-5 mb-2">Version Control for Oracle Fusion</h3>
          <p className="mb-4">
            Keep configurations clean, controlled, and auditable. Cloudheard
            brings structure and governance to your Oracle environments.
          </p>
        </div>

        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">
            Version Control for Oracle Fusion
          </h3>

          {/* Image Column */}
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/version-control.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-xl-6 p-5 animated slideInLeft">
            <ul className="list-unstyled ps-3">
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Version control in Oracle Fusion tracks configuration changes
                across environments to maintain consistency and auditability.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                It prevents errors caused by uncontrolled changes and simplifies
                environment management.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Cloudheard implements structured version control practices
                tailored for Oracle Cloud clients.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                We use automated trackers, controlled migrations, and fit-gap
                analysis to reduce rework.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Our offshore delivery model provides efficiency, while our
                Architects ensure governance and security.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                With Cloudheard, version control becomes a safeguard against
                costly errors and compliance risks.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Our Projects
            </p>
            <h1 className="display-5 mb-5">Our Latest Projects</h1>
          </div>
          <OracleCarousel />
        </div>
      </div>
    </>
  );
}
