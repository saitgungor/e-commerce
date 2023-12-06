"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { carouselItems } from "@/constants/carouselItems";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlideHandler = (type) => {
    if (type === "increment") setActiveIndex(activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1);
    if (type === "decrement") setActiveIndex(activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1);
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
    <div className="w-screen h-[700px] overflow-hidden relative -top-16">
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-4">
        {carouselItems.map((item, index) => (
          <div
            key={item.href}
            className={cn(
              "h-3.5 w-3.5 rounded-full hover:scale-125 cursor-pointer transition-colors duration-300",
              activeIndex === index ? "bg-white" : "border border-white"
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <ChevronLeft
        className="absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer"
        size={120}
        strokeWidth={0.6}
        color="#ffffffbd"
        onClick={() => changeSlideHandler("decrement")}
      />
      <ChevronRight
        className="absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        size={120}
        strokeWidth={0.6}
        color="#ffffffbd"
        onClick={() => changeSlideHandler("increment")}
      />
    </div>
  );
};

export default Carousel;
