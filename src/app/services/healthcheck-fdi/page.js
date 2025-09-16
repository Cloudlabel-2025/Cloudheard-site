"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Serviceslider from "../slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Healthfdi() {
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
                FDI - Healthcheck
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Fix typo container-fluid */}
      <div className="container-fluid">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="display-5 mb-2">FDI - Healthcheck</h3>

          <p className="mb-4">
            Fusion Data Intelligence (FDI) is Oracle’s advanced reporting and
            analytics layer, built to provide unified insights across HCM and
            ERP. It enables businesses to generate powerful dashboards, comply
            with pay transparency requirements, and make data-driven decisions.
          </p>
        </div>
        <div className="m-3 p-3 row rounded shadow-lg ">
          <h3 className="text-center mt-2">FDI - Healthcheck</h3>
          {/* Add responsive col classes */}
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight">
                      <Image
                        className="rounded mt-4"
                        src="/img/servicepage-7.jpg"
                        alt="cloud-hcm"
                        width={600}
                        height={350}
                        style={{ maxWidth: "100%", height: "auto" }}
                        priority
                      />
                    </div>
          <div className="col-12 col-md-6 col-xl-6 p-5 animated slideInLeft">
            <ul>
              <li>
                <strong>
                  Many businesses go wrong when implementing FDI without a
                  proper Health Check. Common pitfalls include:
                </strong>
              </li>
              <li>
                Misaligned job structures, hierarchies, or departments, leading
                to inaccurate reporting.
              </li>
              <li>
                Poor data quality and mapping, resulting in inconsistent
                analytics.
              </li>
              <li>
                Overlooking security and compliance checks, which can expose
                sensitive information.
              </li>
              <li>
                Implementing without validating the scope and objectives,
                causing rework and increased costs.
              </li>
              <li>
                <strong>
                  A Health Check before FDI Implementation ensures:
                </strong>
              </li>
              <li>Data models and structures are harmonised.</li>
              <li>Security roles and reporting hierarchies are validated</li>
              <li>Go-Live → Smooth, structured transition into production.</li>
              <li>Fit-gap analysis is clear</li>
              <li>
                The business is set up for a smooth, cost-effective FDI rollout.
              </li>
              <li>
                At Cloudheard, we make the FDI Health Check a precursor to
                implementation, ensuring your organisation avoids costly
                mistakes and gains reliable, actionable intelligence from day
                one.
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
          <Serviceslider/>
          </div>
        </div>
    </>
  );
}
