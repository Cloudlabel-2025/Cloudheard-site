"use client";

import { useEffect, useState } from "react";

export default function Automate() {
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
          <h1 className="display-5 mb-4 animated slideInDown">Our Expertise</h1>

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
                Automated Testing
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
          <h3 className="display-5 mb-2">Automated Testing </h3>

          <p className="mb-4">
            Faster testing, fewer errors, lower costs. We build automation
            frameworks that streamline Oracle Cloud upgrades.
          </p>
        </div>
        <div className="m-3 p-3 row rounded shadow-lg ">
          <h3 className="text-center mt-2">Automated Testing </h3>
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
              <li>
                Automated Testing in Oracle Cloud reduces manual effort during
                upgrades, patching, and new implementations.{" "}
              </li>
              <li>
                It ensures that core processes like payroll, approvals, and
                finance remain intact after system changes.{" "}
              </li>
              <li>
                Cloudheard builds automated test scripts to accelerate
                regression testing and improve accuracy.{" "}
              </li>
              <li>
                We design frameworks that reduce testing cycles from weeks to
                days, cutting project costs significantly.
              </li>
              <li>
                Our offshore teams deliver automation quickly while senior
                consultants ensure test coverage is robust.{" "}
              </li>
              <li>
                With Cloudheard, you gain confidence in every upgrade — without
                the overhead of endless manual testing.{" "}
              </li>
              <li>
                Recommended Icon/Visuals: 🤖 Robot/checkmark, gear with a check,
                or automation progress bar.{" "}
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
                <h4 className="mb-0">Oracle HCM Fusion</h4>
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
                <h4 className="mb-0">Oracle ERP Fusion</h4>
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
                <h4 className="mb-0">OnPremises to Cloud</h4>
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
                <h4 className="mb-0">Oracle Integration Cloud </h4>
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
                <h4 className="mb-0">Fusion Data Intelligence</h4>
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
                <h4 className="mb-0">Automation Testing</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="Version Control System"
                />
                <a href="/expertise/version-control-system">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Version Control System</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Application Development"
                />
                <a href="/expertise/application-development">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Application Development</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
