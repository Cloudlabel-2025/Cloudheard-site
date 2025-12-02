"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Serviceslider from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Managed() {
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
      <div
        suppressHydrationWarning
        className="container-fluid page-header mb-5 wow fadeIn shadow-sm"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-5 mb-4 animated slideInDown">Our Services</h1>

          <p className="mb-2">
            At Cloudheard Consultancy, we bring 30+ years of combined cloud
            experience and <br /> multiple proven deliveries to help
            organisations simplify, optimise, and scale with <br />
            Oracle Cloud and beyond.
          </p>

          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Oracle Fusion Managed Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-fluid">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="display-5 mb-2">Oracle Fusion Managed Services</h3>

          <p className="mb-4">
            At Cloudheard, we provide comprehensive Oracle Fusion Managed
            Services designed to keep your Cloud applications stable, optimised,
            and continuously improving.
          </p>
        </div>
        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">Oracle Fusion Managed Services</h3>

          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight">
            <Image
              className="rounded mt-4"
              src="/img/servicepage-1.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto"}}
              priority
            />
          </div>
         
          <div className="col-12 col-xl-6 p-5 animated slideInLeft">
            <ul className="list-unstyled ps-3">
              <li>
                <strong>Key components of our Managed Services include:</strong>
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Upgrades & Regression Testing → Ensuring business processes
                remain intact with every Oracle quarterly release.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Patch Deployment & Monitoring → Seamless patch application with
                proactive validation and issue resolution.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Technical Expertise → Support for customisations, extensions,
                and integrations with ongoing optimisation.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Continuous Improvements (ITIL-based) → Structured service
                delivery using ITIL best practices for stability and efficiency.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                What sets Cloudheard apart? We begin every engagement with a
                Free 5-week Health Check of your configuration and Fusion
                application. This helps us identify risks, gaps, and
                opportunities before Managed Services officially start —
                ensuring maximum value and minimal surprises for our clients.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                With Cloudheard, you get a partner who goes beyond support — we
                deliver stability, cost savings, and continuous innovation in
                your Oracle Cloud journey.
              </li>
            </ul>
          </div>
        </div>
      </div>

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
          <Serviceslider/>
        </div>
      </div>
    </>
  );
}
