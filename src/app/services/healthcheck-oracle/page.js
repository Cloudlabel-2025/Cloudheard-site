"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Serviceslider from "../slider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Healthoracle() {
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
                Health Check – Oracle Fusion
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
          <h3 className="display-5 mb-2">Health Check – Oracle Fusion </h3>

          <p className="mb-4">
            A Health Check is the foundation of a stable and cost-effective
            Oracle Cloud environment. At Cloudheard, we conduct in-depth reviews
            of both HCM and ERP Fusion applications to ensure your system is
            optimised, compliant, and future-ready.
          </p>
        </div>
        <div className="m-3 p-3 row rounded shadow-lg">
          <h3 className="text-center mt-2 w-100">Health Check – Oracle Fusion </h3>
          {/* Responsive columns */}
          <div className="mt-3 mb-2 col-12 col-xl-5 animated slideInRight">
                      <Image
                        className="rounded mt-4"
                        src="/img/servicepage-9.jpg"
                        alt="cloud-hcm"
                        width={600}
                        height={350}
                        style={{ maxWidth: "100%", height: "auto" }}
                        priority
                      />
                    </div>
          <div className="col-12 col-md-6 col-xl-6 p-5 animated slideInLeft">
            <ul className="list-unstyled ps-3">
              <li>
                <strong>Areas covered in our Health Check include:</strong>
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Configuration Review → Validation of current HCM and ERP setups.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Security & Roles Analysis → Ensuring RBAC, data security, and
                compliance frameworks are robust.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Integrations & Extensions → Assessing performance, scalability,
                and maintenance of OIC and custom solutions.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Data Integrity & Reporting → Checking for accuracy, consistency,
                and alignment with analytics requirements.
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Process Fit-Gap Review → Identifying inefficiencies,
                redundancies, and opportunities for automation.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Why it matters: Essential before introducing new modules,
                critical prior to system transformations, and best practice
                before handing over to a managed service provider.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Go-Live → Smooth, structured transition into production. 
                </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                Timeline: Depending on the modules and number of Legal Entities,
                the Health Check typically takes 5 to 10 weeks.{" "}
              </li>
              <li>
                <i className="bi bi-check text-dark me-2"></i>
                With Cloudheard, you gain a clear roadmap to reduce risks,
                eliminate unnecessary costs, and ensure your Oracle Fusion
                environment is ready for the next stage of its journey.{" "}
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
          <Serviceslider/>
          </div>
        </div>
      
    </>
  );
}
