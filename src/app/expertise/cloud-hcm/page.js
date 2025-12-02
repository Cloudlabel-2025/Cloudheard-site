"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Cloudhcm() {
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
          <h1 className="display-6 display-md-5 mb-4 animated slideInDown">
            Our Expertise
          </h1>

          <p className="mb-2">
            At Cloudheard Consultancy, we bring 30+ years of combined cloud
            experience and <br className="d-none d-md-block" /> multiple proven
            deliveries to help organisations simplify, optimise, and scale with{" "}
            <br className="d-none d-md-block" />
            Oracle Cloud and beyond.
          </p>

          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0 flex-wrap">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Oracle HCM Fusion
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Oracle HCM Fusion Section */}
      <div className="container-fluid">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="display-6 mb-2">Oracle HCM Fusion</h3>
          <p className="mb-4">
            Transform HR into seamless, compliant experience. Cloudheard
            delivers HCM solutions that fit your business perfectly, cost
            effectively.
          </p>
        </div>

        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">Oracle HCM Fusion</h3>

          {/* Image */}
          <div className="mt-3 mb-2 col-12 col-md-6 col-xl-5 d-flex justify-content-center">
            <Image
              className="rounded mt-4 img-fluid"
              src="/img/hcm-images.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              priority
            />
          </div>

          {/* Text */}
          <div className="col-12 col-md-6 col-xl-6 p-3 p-md-5">
            <ul className="list-unstyled ps-3">
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Oracle HCM Fusion is a comprehensive cloud-based HR solution
                covering core HR, payroll, absence, talent, and workforce
                management.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                It enables organisations to centralise HR processes,
                <br className="d-none d-md-block" /> improve compliance, and
                deliver a unified employee experience.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Cloudheard has delivered HCM implementations across industries,
                ensuring accurate requirement gathering to avoid costly rework.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                Our team focuses on configuring HR processes that align with
                your organisation&apos;s structure and local compliance needs.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                With our offshore model guided by senior Architects, you gain
                high-quality delivery at a fraction of typical costs.
              </li>
              <li>
                 <i className="bi bi-check text-dark me-2"></i>
                We make Oracle HCM Fusion work as a perfect fit-gap solution
                tailored to your business.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Start */}
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
            <h1 className="display-6 display-md-5 mb-5">
              Our Latest Projects
            </h1>
          </div>
          <OracleCarousel/>
        </div>
      </div>
    </>
  );
}
