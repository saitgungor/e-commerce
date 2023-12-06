"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { carouselItems } from "@/constants/carouselItems";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="w-screen h-[700px] overflow-hidden">
      <div
        className="flex transition-all duration-1000 relative"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <Link key={item.href} href={item.href}>
            <div className={`relative w-screen h-[700px]`}>
              <Image src={item.imgSrc} alt={item.alt} fill style={{ objectFit: "cover" }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
