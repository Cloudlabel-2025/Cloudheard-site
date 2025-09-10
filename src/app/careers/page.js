"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Career() {
  const [isClient, setIsClient] = useState(false);
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW({ live: false }).init();
    }
  }, []);

  if (!isClient) return null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setSubmitted(true);
      console.log("File ready to be sent:", file);
    }
  };

  return (
    <>
      {/* Page Header */}
      <div
        suppressHydrationWarning
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-6 mb-4 animated slideInDown">
            Culture and Careers at Cloudheard
          </h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Careers
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* === Main Content === */}
      <div className="container-xxl py-5">
        <div className="row mb-5 align-items-start">
          {/* Left: Text (7 columns) */}
          <div className="col-lg-7">
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "700px" }}
            >
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3 mb-3">
                Join Our Family
              </p>
              <h1 className="display-6 mb-4">Careers at Cloudheard</h1>
            </div>
            <div
              className="wow fadeInUp justify"
              data-wow-delay="0.3s"
              style={{ maxWidth: "900px", margin: "0 auto" }}
            >
              <p>
                At Cloudheard, we believe talent is more than a resume. We
                don&apos;t measure you by degrees or past job titles — we want
                to know your story, your journey, and your drive.
              </p>
              <p>
                If you come from an unprivileged background, if you&apos;re just
                waiting for that one chance to step into the exciting world of
                Oracle Fusion, we want to hear from you.
              </p>

              <h5 className="mt-4">What makes us different?</h5>
              <ul className="list-unstyled ps-3">
                <li>
                  We hire for passion, potential, and persistence — not for
                  polished CVs.
                </li>
                <li>
                  We provide end-to-end training in technical and communication
                  skills.
                </li>
                <li>You&apos;ll work on real projects with global exposure.</li>
                <li>
                  We&apos;re not just a team — we&apos;re a family, driven by
                  purpose and impact.
                </li>
              </ul>

              <p>
                Your career at Cloudheard is not just about learning — it&apos;s
                about transformation, growth, and giving back.
              </p>
              <p>
                <strong>
                  Bring your story, bring your spark. Let&apos;s build your
                  future together.
                </strong>
              </p>
            </div>
          </div>

          {/* Right: Card (5 columns) */}
          <div className="col-lg-5 d-flex flex-column justify-content-start">
            {/* Card 1 */}
            <div className="card custom-hover-card p-4 border-0 shadow-sm mb-3 text-center">
              <div className="mb-2">
                <i className="fa fa-users fa-lg text-primary"></i>
              </div>
              <h6 className="fw-bold">Why Join Cloudheard</h6>
              <p className="text-muted small">
                We believe in stories, not CVs. Your journey, values, and
                passion define your future with us.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card custom-hover-card p-4 border-0 shadow-sm mb-3 text-center">
              <div className="mb-2">
                <i className="fa fa-briefcase fa-lg text-primary"></i>
              </div>
              <h6 className="fw-bold">Real Projects, Real Impact</h6>
              <p className="text-muted small">
                From day one, work on client-facing Oracle Cloud projects with
                mentorship and support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card custom-hover-card p-4 border-0 shadow-sm text-center">
              <div className="mb-2">
                <i className="fa fa-heart fa-lg text-primary"></i>
              </div>
              <h6 className="fw-bold">A Culture That Cares</h6>
              <p className="text-muted small">
                We are a close-knit team that balances career growth with social
                impact and compassion.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 align-items-start">
          {/* Left: Value Cards (5 columns) */}
          <div className="col-lg-7">
            <div className="card custom-hover-card h-50 p-4 border-0 shadow-sm">
              <h4 className="fw-bold mb-3">Why Join Cloudheard?</h4>
              <ul className="list-style-disc ps-3">
                <li>We don&apos;t want your CV. We want your story.</li>
                <li>No degrees required. Just passion and persistence.</li>
                <li>Your journey matters more than your resume.</li>
                <li>
                  This is not a job application. It&apos;s your chance to change
                  your life.
                </li>
                <li>
                  Cloudheard Careers: Stories over CVs, People over titles.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form (7 columns) */}
          <div className="col-lg-5 d-flex flex-column justify-content-start">
            <h4 className="mb-3">Share Your Story</h4>
            <p>
              Instead of uploading a traditional CV, tell us who you are and why
              you want to join.
            </p>
            <ol className="mb-4 small">
              <li>What&apos;s your personal story?</li>
              <li>Why are you passionate about Oracle Fusion?</li>
              <li>
                Have you overcome barriers (social, financial, educational)?
              </li>
              <li>
                What motivates you — learning, impact, stability, or giving
                back?
              </li>
              <li>Where do you want to grow in 3 years?</li>
              <li>Why is Cloudheard your chosen path?</li>
            </ol>

            <form onSubmit={handleSubmit}>
              <div className="mb-4" style={{ maxWidth: "400px" }}>
                <label htmlFor="fileUpload" className="form-label fw-semibold">
                  Upload Your Story (Word, PDF, or short video):
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="fileUpload"
                  accept=".doc,.docx,application/pdf,video/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary py-2 px-4">
                Submit
              </button>
            </form>

            {submitted && (
              <div className="alert alert-success mt-4" role="alert">
                Thank you! Your story has been submitted successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
