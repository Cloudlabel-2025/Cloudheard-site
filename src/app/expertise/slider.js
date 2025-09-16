"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ExpertiseSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="custom-swiper"
      >
        <SwiperSlide>
          <div className="card custom-card">
            <Link href="/expertise/cloud-hcm" className="text-decoration-none">
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-1.jpg"
                alt="Oracle HCM Fusion"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Oracle HCM Fusion
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link href="/expertise/cloud-erp" className="text-decoration-none">
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-2.jpg"
                alt="Oracle ERP Fusion"
                width={240}
                height={600}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Oracle ERP Fusion
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/on-prem-to-cloud"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-3.jpg"
                alt="OnPremises to Cloud"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                OnPremises to Cloud
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/oracle-integration-cloud"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-4.jpg"
                alt="Oracle Integration Cloud"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Oracle Integration Cloud
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/fusion-data-intelligence"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-1.jpg"
                alt="Fusion Data Intelligence"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Fusion Data Intelligence
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/automation-testing"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-2.jpg"
                alt="Automation-Testing"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Automation Testing
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/version-control-system"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-3.jpg"
                alt="Version Control System"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
               Version Control System
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/application-development"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-4.jpg"
                alt="Application Development"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Application Development
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/oracle-subscription"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-1.jpg"
                alt="Oracle Subscription Management"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Oracle Subscription Management
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
