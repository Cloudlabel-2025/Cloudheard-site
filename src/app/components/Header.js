"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
           
        </div>
      
      <nav
        className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link className="navbar-brand ms-4 ms-lg-0" href="/">
          <img
            src="/img/chc-logo.png"
            alt="Brand Logo"
            width="100px"
            height="100px"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "nav-item nav-link  active"
                  : "nav-item nav-link"
              }
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={
                pathname === "/about-us"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
            >
              About Us
            </Link>

            <div className="nav-item dropdown">
              <Link
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Expertise +
              </Link>
              <div className="dropdown-menu border-light m-0">
                <Link href="/expertise/cloud-hcm" className={`dropdown-item ${
                    pathname === "/expertise/cloud-hcm" ? "active" : ""
                  }`}>
                   Oracle HCM Fusion
                </Link>
                <Link href="/expertise/cloud-erp" className={`dropdown-item ${   
                    pathname === "/expertise/cloud-erp" ? "active" : ""
                  }`}>
                  Oracle ERP Fusion
                </Link>
                <Link
                  href="/expertise/on-prem-to-cloud"
                  className={`dropdown-item ${
                    pathname === "/expertise/on-prem-to-cloud" ? "active" : ""
                  }`}
                >
                  On Premise to Cloud
                </Link>
                <Link
                  href="/expertise/oracle-integration-cloud"
                  className={`dropdown-item ${
                    pathname === "/expertise/oracle-integration-cloud" ? "active" : ""
                  }`}
                >
                  Oracle Integration Cloud
                </Link>
                <Link href="/expertise/fusion-data-intelligence" className={`dropdown-item ${
                    pathname === "/expertise/fusion-data-intelligence" ? "active" : ""
                  }`}>
                  Fusion Data Intelligence
                </Link>
                 <Link href="/expertise/automation-testing" className={`dropdown-item ${
                    pathname === "/expertise/automation-testing" ? "active" : ""
                  }`}>
                  Automation Testing
                </Link>
                <Link href="/expertise/version-control-system" className={`dropdown-item ${
                    pathname === "/expertise/version-control-system" ? "active" : ""
                  }`}>
                  Version Control System
                </Link>
                <Link href="/expertise/application-development" className={`dropdown-item ${
                    pathname === "/expertise/application-development" ? "active" : ""
                  }`}>
                  Application Development
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Services +
              </Link>
              <div className="dropdown-menu border-light m-0">
                <Link
                  href="/services/managed-services"
                  className={`dropdown-item ${
                    pathname === "/services/managed-services" ? "active" : ""
                  }`}
                >
                  Cloud Managed Services
                </Link>
                <Link
                  href="/services/implementation-services"
                  className={`dropdown-item ${
                    pathname === "/services/implementation-services" ? "active" : ""
                  }`}
                >
                  Cloud Implementation Services
                </Link>
                <Link
                  href="/services/integration-services"
                  className={`dropdown-item ${
                    pathname === "/services/integration-services" ? "active" : ""
                  }`}
                >
                  Cloud Integration Services
                </Link>
                <Link
                  href="/services/healthcheck-oracle"
                  className={`dropdown-item ${
                    pathname === "/services/healthcheck-oracle" ? "active" : ""
                  }`}
                >
                  Health Check - Oracle Fusion
                </Link>
                <Link href="/services/healthcheck-fdi" className={`dropdown-item ${
                    pathname === "/services/healthcheck-fdi" ? "active" : ""
                  }`}>
                FDI - Health Check
                </Link>
                <Link href="/services/department-tree" className={`dropdown-item ${
                    pathname === "/services/department-tree" ? "active" : ""
                  }`}>
                  Department Tree & Organisation Framework
                </Link>
              </div>
            </div>
            <Link href="/careers" className={
                pathname === "/careers"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }>
              Careers
            </Link>
            <Link href="/contact-us" className={
                pathname === "/contact-us"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
