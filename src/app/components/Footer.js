"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <div
      className="container-fluid text-light footer mt-5 py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">CLOUDHEARD</h4>
            <p className="mb-2">
              Your gateway to seamless cloud hosting solutions. Experience
              unmatched reliability and performance with our cutting-edge
              infrastructure.
            </p>
            <div className="d-flex pt-2">
              <Link href="#" className="btn btn-square btn-outline-light rounded-circle me-2">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="btn btn-square btn-outline-light rounded-circle me-2">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="btn btn-square btn-outline-light rounded-circle me-2">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="#" className="btn btn-square btn-outline-light rounded-circle me-2">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Contact Info</h4>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 7305083773
            </p>
            <p className="mb-2 ms-4">+91 8807703773</p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>admin@cloudheard.org
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Cloudheard, Cumbum
            </p>
            <p className="mb-2 ms-4">Cloudheard, Chennai</p>
            <p className="mb-2 ms-4">Cloudheard, Hyderabad</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>
            <Link href="/" className="btn btn-link">Home</Link>
            <Link href="/about-us" className="btn btn-link">About Us</Link>
            <Link href="/services/department-tree" className="btn btn-link">Services</Link>
            <Link href="/careers" className="btn btn-link">Career</Link>
            <Link href="/contact-us" className="btn btn-link">Contact Us</Link>
          </div>

          {/* Other Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Other Links</h4>
            <Link href="/privacy-policy" className="btn btn-link">Privacy Policy</Link>
            <Link href="/terms&conditions" className="btn btn-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
