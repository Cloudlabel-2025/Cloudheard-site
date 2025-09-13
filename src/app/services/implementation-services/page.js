"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
                <a href="/" className="text-decoration-none">Home</a>
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
                        style={{ maxWidth: "100%", height: "auto"}}
                        priority
                      />
                    </div>

          <div className="col-xl-7 col-lg-6 col-md-12 p-5 animated slideInLeft">
            <ul>
              <ol>
                <strong>Our Implementation Framework: </strong>
              </ol>
              <li>
                Pre-Planning Phase → Aligning stakeholders, timelines, and
                success metrics.
              </li>
              <li>
                Requirements Gathering & Scope Alignment → Preventing rework
                through accurate fit-gap analysis.
              </li>
              <li>
                Pilot Demo → Early validation of solution design with business
                teams.
              </li>
              <li>
                Configuration → Agile, offshore-led build with expert oversight.
              </li>
              <li>
                Second Pilot → Refined demo showcasing aligned functionality.
              </li>
              <li>
                User Acceptance Testing (UAT) → Ensuring business readiness and
                process integrity.
              </li>
              <li>Go-Live → Smooth, structured transition into production.</li>
              <li>
                Our Commitment: Every implementation is backed by 2 months of
                free Hypercare support (or 200 hours of assistance) — ensuring
                stability, issue resolution, and user confidence post-go-live.
              </li>
              <li>
                With Cloudheard, implementation isn’t just about go-live — it’s
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
              We Have Completed Latest Projects
            </h1>
          </div>

          <div
            className="owl-carousel project-carousel wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {/* Project 1 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3 position-relative">
                <div className="w-100 position-relative" style={{ height: "auto", minHeight: "300px" }}>
                  <Image
                    className="img-fluid rounded"
                    src="/img/service-1.jpg"
                    alt="Oracle HCM Fusion"
                    layout="responsive"
                    width={600}
                    height={350}
                  />
                </div>
                <a href="/expertise/cloud-hcm">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Cloud Managed Services</h4>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3 position-relative">
                <div className="w-100 position-relative" style={{ height: "auto", minHeight: "300px" }}>
                  <Image
                    className="img-fluid rounded"
                    src="/img/service-2.jpg"
                    alt="Oracle ERP Fusion"
                    layout="responsive"
                    width={600}
                    height={350}
                  />
                </div>
                <a href="/expertise/cloud-erp">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Cloud Implementation Services</h4>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3 position-relative">
                <div className="w-100 position-relative" style={{ height: "auto", minHeight: "300px" }}>
                  <Image
                    className="img-fluid rounded"
                    src="/img/service-3.jpg"
                    alt="On Premises to Cloud"
                    layout="responsive"
                    width={600}
                    height={350}
                  />
                </div>
                <a href="/expertise/on-prem-to-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Cloud Integration Services</h4>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3 position-relative">
                <div className="w-100 position-relative" style={{ height: "auto", minHeight: "300px" }}>
                  <Image
                    className="img-fluid rounded"
                    src="/img/service-4.jpg"
                    alt="Oracle Integration Cloud"
                    layout="responsive"
                    width={600}
                    height={350}
                  />
                </div>
                <a href="/expertise/oracle-integration-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Healthcheck - Oracle Fusion</h4>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3 position-relative">
                <div className="w-100 position-relative" style={{ height: "auto", minHeight: "300px" }}>
                  <Image
                    className="img-fluid rounded"
                    src="/img/service-1.jpg"
                    alt="Fusion Data Intelligence"
                    layout="responsive"
                    width={600}
                    height={350}
                  />
                </div>
                <a href="/expertise/fusion-data-intelligence">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">FDI - Healthcheck</h4>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3 position-relative">
                <div className="w-100 position-relative" style={{ height: "auto", minHeight: "300px" }}>
                  <Image
                    className="img-fluid rounded"
                    src="/img/service-2.jpg"
                    alt="Automation Testing"
                    layout="responsive"
                    width={600}
                    height={350}
                  />
                </div>
                <a href="/expertise/automation-testing">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">
                  Department-Tree & Organisation Framework
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
