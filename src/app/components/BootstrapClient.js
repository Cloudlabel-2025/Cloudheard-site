"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap only on client
    import("bootstrap/dist/js/bootstrap.bundle").then((bootstrap) => {
      const carouselElement = document.querySelector("#header-carousel");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 2000,
          ride: "carousel",
        });
      }
    });
  }, []);

  return null; // nothing to render
}
