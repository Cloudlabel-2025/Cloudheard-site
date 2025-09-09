"use client";

import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Run only on client and if WOW.js is loaded via script
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
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
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
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
            <a className="btn btn-link" href="#">Home</a>
            <a className="btn btn-link" href="#">About Us</a>
            <a className="btn btn-link" href="#">Services</a>
            <a className="btn btn-link" href="#">Career</a>
            <a className="btn btn-link" href="#">Contact Us</a>
          </div>

          {/* Other Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Other Links</h4>
            <a className="btn btn-link" href="#">Privacy Policy</a>
            <a className="btn btn-link" href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
