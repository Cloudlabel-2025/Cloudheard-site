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

export default function Serviceslider() {
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
            <Link href="/services/managed-services" className="text-decoration-none">
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-1.jpg"
                alt="Oracle Managed Services"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Cloud Managed Services
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link href="/services/implementation-services" className="text-decoration-none">
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-2.jpg"
                alt="Cloud Implementation Services"
                width={240}
                height={600}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Cloud Implementation Services
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/services/integration-services"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-3.jpg"
                alt="Cloud Integration Services"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Cloud Integration Services
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/services/healthcheck-oracle"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-4.jpg"
                alt="Healthcheck - Oracle Fusion"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Healthcheck - Oracle Fusion
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/services/healthcheck-fdi"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-1.jpg"
                alt="FDI - Healthcheck"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                FDI - Healthcheck
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card custom-card">
            <Link
              href="/expertise/department-tree"
              className="text-decoration-none"
            >
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <FaLink size={40} className="text-primary" />
              </div>
              <Image
                src="/img/service-2.jpg"
                alt="Department-Tree & Organisation Framework"
                width={600}
                height={350}
                className="card-img-top custom-image"
              />
            </Link>
            <div className="card-body text-center">
              <p className="card-text fw-semibold text-dark">
                Department-Tree & Organisation Framework
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
