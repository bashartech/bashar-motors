"use client";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import styles from "./section-2.module.css";

const SwiperComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperWrapperRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref for all slides
  const [slideWidth, setSlideWidth] = useState(0);

  const maxIndex = slideRefs.current.length - 1;

  // Function to update slider position
  const updateSlider = () => {
    if (swiperWrapperRef.current && slideWidth > 0) {
      swiperWrapperRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
    }
  };

  // Effect to handle window resizing and setting initial slide width
  useEffect(() => {
    const updateDimensions = () => {
      if (slideRefs.current[0]) {
        const width = slideRefs.current[0]?.offsetWidth || 0;
        setSlideWidth(width);
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions(); // Initial call to set dimensions

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Handle Next Button Click
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Handle Previous Button Click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  // Effect to update the slider position on currentIndex change
  useEffect(() => {
    updateSlider();
  }, [currentIndex, slideWidth]);

  return (
    <div className={styles.box} id="services">
      <div className={styles.swipercontainer}>
        <div className={styles.heading}>Explore Our Luxury Collections </div>
        <button
          className={`${styles.swiperbutton} ${styles.left}`}
          onClick={handlePrev}
        >
          &lt;
        </button>

        <div className={styles.swiperwrapper} ref={swiperWrapperRef}>
          {/* Dynamic Slides */}
          {[
            {
              src: "https://clipart-library.com/image_gallery2/Car-Free-Download-PNG.png",
              name: "Audi Etron GT",
              luxuryPrice: "100k$",
            },
            {
              src: "https://di-enrollment-api.s3.amazonaws.com/toyota/models/2023/GR+Supra/Trims/A-91+trim.png",
              name: "Mercedes-Benz S-Class",
              luxuryPrice: "120k$",
            },
            {
              src: "https://assets.meinauto.de/image/upload/q_auto:eco/f_auto/dpr_1.0/c_scale,h_614,w_920/v1//prod/toyota/grsupra/5/5coupe-pure/toyota_21grsuprapackpremcp5e_angularfront.png",
              name: "BMW 7 Series",
              luxuryPrice: "130k$",
            },
            {
              src: "https://static.wixstatic.com/media/261cbb_373cc916ed314c808b8742f7bb40d00f~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
              name: "Porsche Panamera",
              luxuryPrice: "150k$",
            },
            {
              src: "https://clipart-library.com/image_gallery2/Car-Free-Download-PNG.png",
              name: "Bentley Continental GT",
              luxuryPrice: "200k$",
            },
            {
              src: "https://assets.meinauto.de/image/upload/q_auto:eco/f_auto/dpr_1.0/c_scale,h_614,w_920/v1//prod/toyota/grsupra/5/5coupe-pure/toyota_21grsuprapackpremcp5e_angularfront.png",
              name: "Rolls-Royce Ghost",
              luxuryPrice: "250k$",
            },
            {
              src: "https://di-enrollment-api.s3.amazonaws.com/toyota/models/2023/GR+Supra/Trims/A-91+trim.png",
              name: "Lamborghini Urus",
              luxuryPrice: "220k$",
            },
            {
              src: "https://clipart-library.com/image_gallery2/Car-Free-Download-PNG.png",
              name: "Ferrari Roma",
              luxuryPrice: "230k$",
            },
          ].map((slide, index) => (
            <div
              className={styles.swiperslide}
              ref={(el) => {
                slideRefs.current[index] = el; // No need to return anything
              }}
              key={index} // Always use a unique key in JSX when mapping
            >
              <img src={slide.src} alt={slide.name} />
              <h4>{slide.name}</h4>
              <h2>{slide.luxuryPrice}</h2>
            </div>
          ))}
        </div>
        <button
          className={`${styles.swiperbutton} ${styles.right}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      <div className={styles.btn3}>
      <Link href={"/services"}>
      <button>Show More</button>
      </Link>
      </div>
    </div>
  );
};

export default SwiperComponent;
