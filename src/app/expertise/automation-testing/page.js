"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";

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
      {/* Header */}
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
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Automated Testing
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Section */}
      <div className="container-fluid">
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
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/test-automation.jpeg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
          <div className="col-xl-6 p-5 animated slideInLeft">
            <ul>
              <li>
                Automated Testing in Oracle Cloud reduces manual effort during
                upgrades, patching, and new implementations.
              </li>
              <li>
                It ensures that core processes like payroll, approvals, and
                finance remain intact after system changes.
              </li>
              <li>
                Cloudheard builds automated test scripts to accelerate regression
                testing and improve accuracy.
              </li>
              <li>
                We design frameworks that reduce testing cycles from weeks to
                days, cutting project costs significantly.
              </li>
              <li>
                Our offshore teams deliver automation quickly while senior
                consultants ensure test coverage is robust.
              </li>
              <li>
                With Cloudheard, you gain confidence in every upgrade — without
                the overhead of endless manual testing.
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
          <OracleCarousel/>
        </div>
      </div>
    </>
  );
}
