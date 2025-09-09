"use client";
import { useEffect, useState } from "react";

export default function Integration() {
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
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-5 mb-4 animated slideInDown">
            Cloud Integration Services
          </h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cloud Integration Services
              </li>
            </ol>
          </nav>
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
            {/* 6 Project Items */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Cloud Managed Services"
                />
                <a href="/services/managed-services">
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
                  alt="Cloud Implementation Services"
                />
                <a href="/services/implementation-services">
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
                  alt="Cloud Integration Services"
                />
                <a href="/services/integration-services">
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
                  src="/img/service-1.jpg"
                  alt="Healthcheck-Oracle Fusion"
                />
                <a href="/services/healthcheck-oracle">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </a>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Healthcheck - Oracle Fusion</h4>
              </div>
            </div>

            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Healthcheck-FDI"
                />
                <a href="/services/healthcheck-fdi">
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
                  src="/img/service-4.jpg"
                  alt="Department-tree"
                />
                <a href="/services/department-tree">
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
