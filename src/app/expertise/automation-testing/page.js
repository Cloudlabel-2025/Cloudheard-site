"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Automate() {
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

          {/* ✅ Replaced Owl with Slick */}
          <Slider {...settings}>
            {/* Project 1 */}
            <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Oracle HCM Fusion"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Oracle ERP Fusion"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="On Premises to Cloud"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Oracle Integration Cloud"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
                <Link href="/expertise/oracle-integration-cloud">
                  <i className="fa fa-link fa-3x text-primary"></i>
                </Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Oracle Integration Cloud </h4>
              </div>
            </div>
            {/* Project 5 */}
             <div className="project-item pe-5 pb-5 px-4">
              <div className="project-img mb-3">
                <Image
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Fusion Data Intelligence"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Automation Testing"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="Version Control System"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="Application Development"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
                  className="img-fluid rounded"
                  src="/img/service-4.jpg"
                  alt="oracle-subscription"
                  width={600}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
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
