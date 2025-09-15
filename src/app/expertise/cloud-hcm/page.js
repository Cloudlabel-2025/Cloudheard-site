"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Cloudhcm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);

  if (!isClient) return null;

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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
                Oracle HCM Fusion
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
          <h3 className="display-5 mb-2">Oracle HCM Fusion</h3>
          <p className="mb-4">
            Transform HR into seamless, compliant experience. Cloudheard
            delivers HCM solutions that fit your business perfectly, cost
            effectively.
          </p>
        </div>

        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2">Oracle HCM Fusion</h3>

          {/* Image */}
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/hcm-images.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Text */}
          <div className="col-12 col-md-6 col-xl-6 p-5 animated slideInLeft">
            <ul>
              <li>
                Oracle HCM Fusion is a comprehensive cloud-based HR solution
                covering core HR, payroll, absence, talent, and workforce
                management.{" "}
              </li>
              <li>
                It enables organisations to centralise HR processes, <br />
                improve compliance, and deliver a unified employee experience.
              </li>
              <li>
                Cloudheard has delivered HCM implementations across industries,
                ensuring accurate requirement gathering to avoid costly rework.{" "}
              </li>
              <li>
                Our team focuses on configuring HR processes that align with
                your organisation's structure and local compliance needs.{" "}
              </li>
              <li>
                With our offshore model guided by senior Architects, you gain
                high-quality delivery at a fraction of typical costs.{" "}
              </li>
              <li>
                We make Oracle HCM Fusion work as a perfect fit-gap solution
                tailored to your business.{" "}
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
            <h1 className="display-5 mb-5">
              We Have Completed Latest Projects
            </h1>
          </div>

          {/* ✅ Replaced Owl with Slick */}
          <Slider {...settings}>
            {/* Project 1 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-1.jpg"
                  alt="Oracle HCM Fusion"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/cloud-hcm">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle HCM Fusion</h4>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-2.jpg"
                  alt="Oracle ERP Fusion"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/cloud-erp">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle ERP Fusion</h4>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-3.jpg"
                  alt="On Premises to Cloud"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/on-prem-to-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">OnPremises to Cloud</h4>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-4.jpg"
                  alt="Oracle Integration Cloud"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/oracle-integration-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle Integration Cloud</h4>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-1.jpg"
                  alt="Fusion Data Intelligence"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/fusion-data-intelligence">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Fusion Data Intelligence</h4>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-2.jpg"
                  alt="Automation Testing"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/automation-testing">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Automation Testing</h4>
              </div>
            </div>

            {/* Project 7 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-3.jpg"
                  alt="Version Control System"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/version-control-system">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Version Control System</h4>
              </div>
            </div>

            {/* Project 8 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-4.jpg"
                  alt="Application Development"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/application-development">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Application Development</h4>
              </div>
            </div>

            {/* Project 9 */}
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <Image
                  src="/img/service-4.jpg"
                  alt="Oracle Subscription Management"
                  width={600}
                  height={350}
                  className="img-fluid rounded w-100 h-auto"
                />
                <Link href="/expertise/oracle-subscription">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle Subscription Management</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
