"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OracleCarousel from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Applicationdevelopment() {
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
            experience and <br />
            multiple proven deliveries to help organisations simplify, optimise,
            and scale with <br />
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
                Application Development
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
          <h3 className="display-5 mb-2">Application Development </h3>

          <p className="mb-4">
            Smart apps for real business problems. From hot seat booking to
            payroll and admin automation, we deliver scalable, cost-effective
            solutions.
          </p>
        </div>
        <div className="m-3 p-3 row rounded shadow-lg ">
          <h3 className="text-center mt-2">Application Development </h3>
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight d-flex justify-content-center">
            <Image
              className="rounded mt-4"
              src="/img/application-development.jpg"
              alt="cloud-hcm"
              width={600}
              height={350}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 p-5 animated slideInLeft">
            <ul className="list-unstyled ps-3">
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                At Cloudheard, we go beyond Oracle to build custom applications
                that solve everyday business challenges.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Our team has developed apps such as a Hot Seat Booking app for
                flexible workplaces, a Payroll solutions app for small
                businesses, and an Admin panel app to automate routine tasks in
                growing organisations.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                We specialise in designing lightweight, scalable, and
                cost-effective apps tailored to your unique needs.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                With our offshore model, development is rapid and affordable,
                without sacrificing quality.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Every project is guided by senior architects to ensure robust
                design, security, and ease of use.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Whether it&apos;s a productivity tool, process automation, or a
                business-specific app — Cloudheard delivers solutions that work.{" "}
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
              Our Latest Projects
            </h1>
          </div>
          <OracleCarousel/>
        </div>
      </div>
    </>
  );
}
