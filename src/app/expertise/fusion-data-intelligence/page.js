"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";

export default function Fusiondata() {
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
                Fusion Data Intelligence
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
          <h3 className="display-5 mb-2">Fusion Data Intelligence</h3>

          <p className="mb-4">
            Turn data into decisions with clarity. Cloudheard powers reporting,
            compliance, and analytics with FDI.
          </p>
        </div>

        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2 w-100">Fusion Data Intelligence</h3>

          {/* Image column */}
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/Expertise-OraclecloudHCM.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Text content column */}
          <div className="col-12 col-md-6 p-5 animated slideInLeft">
            <ul>
              <li>
                Oracle Fusion Data Intelligence provides a data warehouse layer
                and prebuilt analytics on HCM and ERP data.{" "}
              </li>
              <li>
                It supports reporting, compliance, pay transparency, and
                advanced workforce and financial analytics.{" "}
              </li>
              <li>
                Cloudheard enables clients to leverage FDI for accurate insights
                by ensuring proper data mapping and governance.{" "}
              </li>
              <li>
                We bring expertise in harmonising job structures, hierarchies,
                and data models for meaningful analytics.
              </li>
              <li>
                Our approach reduces rework by clarifying scope upfront and
                validating data during implementation.{" "}
              </li>
              <li>
                With Cloudheard, you turn Oracle data into actionable
                intelligence cost-effectively.{" "}
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
          <OracleCarousel />
        </div>
      </div>
    </>
  );
}
