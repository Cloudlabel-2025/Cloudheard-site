"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
                <a href="/" className="text-decoration-none">Home</a>
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
            <ul>
              <li>
                <strong>Areas covered in our Health Check include: </strong>
              </li>
              <li>
                Configuration Review → Validation of current HCM and ERP setups.{" "}
              </li>
              <li>
                Security & Roles Analysis → Ensuring RBAC, data security, and
                compliance frameworks are robust.{" "}
              </li>
              <li>
                Integrations & Extensions → Assessing performance, scalability,
                and maintenance of OIC and custom solutions.{" "}
              </li>
              <li>
                Data Integrity & Reporting → Checking for accuracy, consistency,
                and alignment with analytics requirements.
              </li>
              <li>
                Process Fit-Gap Review → Identifying inefficiencies,
                redundancies, and opportunities for automation.{" "}
              </li>
              <li>
                Why it matters: Essential before introducing new modules,
                critical prior to system transformations, and best practice
                before handing over to a managed service provider.{" "}
              </li>
              <li>Go-Live → Smooth, structured transition into production. </li>
              <li>
                Timeline: Depending on the modules and number of Legal Entities,
                the Health Check typically takes 5 to 10 weeks.{" "}
              </li>
              <li>
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
              We Have Completed Latest Projects
            </h1>
          </div>
          <div
            className="owl-carousel project-carousel wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {/* Projects */}
            {[
              {
                src: "/img/service-1.jpg",
                alt: "Oracle HCM Fusion",
                href: "/expertise/cloud-hcm",
                title: "Cloud Managed Services",
              },
              {
                src: "/img/service-2.jpg",
                alt: "Oracle ERP Fusion",
                href: "/expertise/cloud-erp",
                title: "Cloud Implementation Services",
              },
              {
                src: "/img/service-3.jpg",
                alt: "On Premises to Cloud",
                href: "/expertise/on-prem-to-cloud",
                title: "Cloud Integration Services",
              },
              {
                src: "/img/service-4.jpg",
                alt: "Oracle Integration Cloud",
                href: "/expertise/oracle-integration-cloud",
                title: "Healthcheck - Oracle Fusion",
              },
              {
                src: "/img/service-1.jpg",
                alt: "Fusion Data Intelligence",
                href: "/expertise/fusion-data-intelligence",
                title: "FDI - Healthcheck",
              },
              {
                src: "/img/service-2.jpg",
                alt: "Automation Testing",
                href: "/expertise/automation-testing",
                title: "Department-Tree & Organisation Framework",
              },
            ].map(({ src, alt, href, title }, idx) => (
              <div key={idx} className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                  <Image
                    className="img-fluid rounded"
                    src={src}
                    alt={alt}
                    width={600}
                    height={350}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <a href={href}>
                    <i className="fa fa-link fa-3x text-primary"></i>
                  </a>
                </div>
                <div className="project-title">
                  <h4 className="mb-0">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
