"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Terms() {
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
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 mt-5">
        <div className="row justify-content-center w-100">
          <div className="col-lg-7">
            <div className="text-center mb-4">
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                Terms & Conditions
              </p>
            </div>
            <div className="card custom-hover-card h-100 p-4 border-0 shadow-sm">
              <ul className="list-style-disc ps-3 text-start">
                <li>
                  Cloudheard Consultancy is a boutique Oracle Cloud partner.
                </li>
                <li>
                  Founded by industry experts with 30+ years of combined cloud
                  experience.
                </li>
                <li>
                  We bring offshore cost-efficiency guided by seasoned
                  Architects and Delivery Managers.
                </li>
                <li>
                  Our focus is on quality, transparency, and long-term client
                  success.
                </li>
                <li>
                  Experienced in delivering HCM, ERP, and Cloud projects across
                  industries.
                </li>
                <li>
                  A small, agile team that works like an extension of your own.
                </li>
                <li>
                  Enterprise-grade expertise, without the enterprise-level price
                  tag.
                </li>
                <li>
                  Your trusted advisors for every step of the Oracle Cloud
                  journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
