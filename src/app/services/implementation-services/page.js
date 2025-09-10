"use client";
import { useEffect, useState } from "react";

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
      <div
        suppressHydrationWarning
        className="container-fluid page-header mb-5 wow fadeIn shadow-sm"
        data-wow-delay="0.1s"
      >
        <div className="container ">
          <h1 className="display-5 mb-4 animated slideInDown">Our Services</h1>

          <p className="mb-2">
            At Cloudheard Consultancy, we bring 30+ years of combined cloud
            experience and <br /> 3 years of proven delivery to help
            organisations simplify, optimise, and scale with <br />
            Oracle Cloud and beyond.
          </p>

          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cloud Implementation Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="cointainer-fluid">
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
        <div className="m-3 p-3 row rounded shadow-lg ">
          <h3 className="text-center mt-2">Cloud Implementation Services</h3>
          <div className="mt-3 mb-2 col-xl-5  animated slideInRight">
            <img
              className="rounded mt-4"
              src="/img/Expertise-OraclecloudHCM.jpg"
              style={{ height: "350px", width: "600px" }}
              alt="cloud-hcm"
            />
          </div>
          <div className="col-xl-6 p-5 animated slideInLeft">
            <ul>
              <ol>
               <strong>Our Implementation Framework: </strong> 
              </ol>
              <li>
                Pre-Planning Phase → Aligning stakeholders, timelines, and success metrics. {" "}
              </li>
              <li>
                 Requirements Gathering & Scope Alignment → Preventing rework through accurate fit-gap analysis.{" "}
              </li>
              <li>
                Pilot Demo → Early validation of solution design with business teams. {" "}
              </li>
              <li>
                Configuration → Agile, offshore-led build with expert oversight. 
              </li>
              <li>
               Second Pilot → Refined demo showcasing aligned functionality. {" "}
              </li>
              <li>
                User Acceptance Testing (UAT) → Ensuring business readiness and process integrity. {" "}
              </li>
              <li>
               Go-Live → Smooth, structured transition into production.{" "}
              </li>
               <li>
               Our Commitment: Every implementation is backed by 2 months of free Hypercare support (or 200 hours of assistance) — ensuring stability, issue resolution, and user confidence post-go-live.{" "}
              </li>
               <li>
               With Cloudheard, implementation isn’t just about go-live — it’s about delivering a stable, cost-effective, and business-aligned Oracle Cloud solution from start to finish. {" "}
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
            <h1 className="display-5 mb-5">
              We Have Completed Latest Projects
            </h1>
          </div>
          <div
            className="owl-carousel project-carousel wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {/* Original 4 items */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Oracle HCM Fusion"
                />
                <a href="/expertise/cloud-hcm">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Cloud Managed Services</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Oracle ERP Fusion"
                />
                <a href="/expertise/cloud-erp">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Cloud Implementation Services</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="On Premises to Cloud"
                />
                <a href="/expertise/on-prem-to-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Cloud Integration Services</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Oracle Integration Cloud"
                />
                <a href="/expertise/oracle-integration-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Healthcheck - Oracle Fusion</h4>
              </div>
            </div>

            {/* Additional 4 items */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Fusion Data Intelligence"
                />
                <a href="/expertise/fusion-data-intelligence">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">FDI - Healthcheck</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Automation Testing"
                />
                <a href="/expertise/automation-testing">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0"> Department-Tree & Organisation Framework</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
