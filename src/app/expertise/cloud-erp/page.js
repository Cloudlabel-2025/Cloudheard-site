"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

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
                <Link href="/" className="text-decoration-none">Home</Link>
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
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/erp-image.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
          <div className="col-xl-6 p-5 animated slideInLeft">
            <ul className="list-unstyled ps-3">
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Oracle ERP Fusion provides a full suite of finance, procurement,
                projects, and supply chain capabilities in the Cloud.{" "}
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                It streamlines financial reporting, automates procurement, and
                enables real-time decision making.{" "}
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Cloudheard helps organisations transition from legacy finance
                systems to ERP Fusion with minimal disruption.{" "}
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                We emphasise proper scope definition and health checks to reduce
                errors and downstream issues.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Our cost-effective model blends offshore execution with
                expert-led governance, ensuring reliability and savings.{" "}
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
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
          <OracleCarousel/>
          </div>
        </div>
     
    </>
  );
}
