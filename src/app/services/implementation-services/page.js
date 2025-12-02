"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Serviceslider from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Implementation() {
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
                Cloud Implementation Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container-fluid">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="display-5 mb-2">Cloud Implementation Services</h3>
          <p className="mb-4">
            At Cloudheard, we deliver end-to-end Oracle Cloud Implementations
            using the Oracle Unified Methodology (OUM) and proven best
            practices. Our approach ensures clarity, control, and cost
            efficiency from day one.
          </p>
        </div>

        {/* Framework Section */}
        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">Cloud Implementation Services</h3>

          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight">
            <Image
              className="rounded mt-4"
              src="/img/servicepage-2.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>

          <div className="col-xl-7 col-lg-6 col-md-12 p-5 animated slideInLeft">
            <ul className="list-unstyled ps-3">
              <li>
                <strong>Our Implementation Framework: </strong>
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Pre-Planning Phase → Aligning stakeholders, timelines, and
                success metrics.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Requirements Gathering & Scope Alignment → Preventing rework
                through accurate fit-gap analysis.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Pilot Demo → Early validation of solution design with business
                teams.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Configuration → Agile, offshore-led build with expert oversight.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Second Pilot → Refined demo showcasing aligned functionality.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                User Acceptance Testing (UAT) → Ensuring business readiness and
                process integrity.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Go-Live → Smooth, structured transition into production.
                </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Our Commitment: Every implementation is backed by 2 months of
                free Hypercare support (or 200 hours of assistance) — ensuring
                stability, issue resolution, and user confidence post-go-live.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                With Cloudheard, implementation isn&apos;t just about go-live — it&apos;s
                about delivering a stable, cost-effective, and business-aligned
                Oracle Cloud solution from start to finish.
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
            <h1 className="display-5 mb-5">
              Our Latest Projects
            </h1>
          </div>
          <Serviceslider/>
        </div>
      </div>
    </>
  );
}
