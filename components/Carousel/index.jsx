"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { carouselItems } from "@/constants/carouselItems";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCarouselItem = carouselItems[activeIndex];

  const changeSlideHandler = (type) => {
    if (type === "increment") setActiveIndex(activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1);
    if (type === "decrement") setActiveIndex(activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1);
    if (activeIndex === carouselItems.length) setActiveIndex(0);
    if (activeIndex < 0) setActiveIndex(carouselItems.length - 1);
  };

  useEffect(() => {
    let sliderTime = setTimeout(() => {
      changeSlideHandler("increment");
    }, 6000);

    return () => {
      clearTimeout(sliderTime);
    };
  }, [activeIndex]);

  return (
    <div className="overflow-hidden flex w-screen h-[700px] justify-center">
      {carouselItems.map((item, index) =>
        activeIndex === index ? (
          <Link key={item.href} href={item.href}>
            <div className={`relative w-screen h-[700px] next-slider-animation`}>
              <Image src={item.imgSrc} alt={item.alt} fill style={{ objectFit: "cover" }} />
            </div>
          </Link>
        ) : null
      )}
    </div>
  );
};

export default Carousel;
