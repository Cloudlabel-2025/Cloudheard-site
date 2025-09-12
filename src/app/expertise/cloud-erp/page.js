"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Clouderp() {
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
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Oracle ERP Fusion
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
          <h3 className="display-5 mb-2">Oracle ERP Fusion</h3>

          <p className="mb-4">
            Finance, procurement, and operations in one Cloud suite. We
            implement ERP Fusion with precision, reducing risks and costs.{" "}
          </p>
        </div>
        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">Oracle ERP Fusion</h3>
          <div className="mt-3 mb-2 col-xl-5  animated slideInRight">
            <Image
              className="rounded mt-4"
              src="/img/erp-image.jpg"
              width={600}
              height={350}
              alt="cloud-hcm"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-xl-6 p-5 animated slideInLeft">
            <ul>
              <li>
                Oracle ERP Fusion provides a full suite of finance, procurement,
                projects, and supply chain capabilities in the Cloud.{" "}
              </li>
              <li>
                It streamlines financial reporting, automates procurement, and
                enables real-time decision making.{" "}
              </li>
              <li>
                Cloudheard helps organisations transition from legacy finance
                systems to ERP Fusion with minimal disruption.{" "}
              </li>
              <li>
                We emphasise proper scope definition and health checks to reduce
                errors and downstream issues.
              </li>
              <li>
                Our cost-effective model blends offshore execution with
                expert-led governance, ensuring reliability and savings.{" "}
              </li>
              <li>
                With Cloudheard, ERP implementations are faster, scalable, and
                built to support long-term growth.{" "}
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
            {/* Project 1 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Oracle HCM Fusion"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/cloud-hcm">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle HCM Fusion</h4>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Oracle ERP Fusion"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/cloud-erp">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle ERP Fusion</h4>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="On Premises to Cloud"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/on-prem-to-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">OnPremises to Cloud</h4>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Oracle Integration Cloud"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/oracle-integration-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle Integration Cloud </h4>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Fusion Data Intelligence"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/fusion-data-intelligence">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Fusion Data Intelligence</h4>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Automation Testing"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/automation-testing">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Automation Testing</h4>
              </div>
            </div>

            {/* Project 7 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="Version Control System"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/version-control-system">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Version Control System</h4>
              </div>
            </div>

            {/* Project 8 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Application Development"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/application-development">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Application Development</h4>
              </div>
            </div>

            {/* Project 9 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="oracle-subscription"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <a href="/expertise/oracle-subscription">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle Subscription Management</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
