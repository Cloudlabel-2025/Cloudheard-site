"use client";

import {useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";

export default function Oraclesub() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);


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
                Oracle Subscription Management
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
          <h3 className="display-5 mb-2">Oracle Subscription Management</h3>
          <p className="mb-4">
            Simplify subscription lifecycles and boost recurring revenue. 
            Cloudheard helps you manage subscriptions seamlessly, improve billing accuracy, 
            and enhance customer experiences cost-effectively.
          </p>
        </div>

        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">Oracle Subscription Management</h3>

          {/* Responsive image column */}
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/sub-management.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Responsive text column */}
          <div className="col-12 col-xl-6 p-5 animated slideInLeft">
            <ul>
              <li>
                At Cloudheard Consultancy, we understand that Oracle Cloud investments must deliver maximum value, not just functionality.
              </li>
              <li>
                Our dedicated Oracle Subscription Management Services are designed to ensure organizations make the most of every license purchased.
              </li>
              <li>
                We analyze your current subscription usage to identify areas where licenses are under-utilized or deployed unnecessarily, thereby reducing waste and cutting costs.
              </li>
              <li>
                Our team reviews role allocations to eliminate mismatches that can artificially inflate license counts, ensuring compliance and accuracy.
              </li>
              <li>
                we deliver subscription governance that is both sustainable and value-driven.
              </li>
              <li>
                Cloudheard becomes your trusted partner in ensuring every license, role, and instance works for your success.
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
            <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
          </div>
          <OracleCarousel/>
        </div>
      </div>

    </>
  );
}
