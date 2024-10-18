"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Page = () => {
  const slides = [
    assets.block_pic_1,
    assets.block_pic_2,
    assets.block_pic_3,
    assets.block_pic_4,
    assets.block_pic_5,
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // New state for animation control
  const imageRef = useRef(null);

  const handleNext = useCallback(() => {
    if (isAnimating) return; // Prevent action if currently animating
    setIsAnimating(true);
    setLoadingIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [isAnimating, slides.length]);

  const handlePrev = () => {
    if (isAnimating) return; // Prevent action if currently animating
    setIsAnimating(true);
    setLoadingIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to next slide every 10 seconds
    }, 10000);

    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    // Trigger the animation for the current slide
    setLoadingIndex(currentSlideIndex);

    // Apply transform to the image reference
    if (imageRef.current) {
      imageRef.current.style.transition = "transform 0.5s ease-in-out";
      imageRef.current.style.transform = `translateX(${0}px)`;

      // Reset the isAnimating flag after the transition
      setTimeout(() => {
        setIsAnimating(false); // Reset after the animation duration
      }, 500); // Match this duration with your CSS transition time
    }
  }, [currentSlideIndex]);

  const handleClickImage = (imageSrc) => {
    if (isAnimating) return; // Prevent action if currently animating
    const index = slides.indexOf(imageSrc);
    if (index !== -1) {
      setIsAnimating(true);
      setCurrentSlideIndex(index);
      setLoadingIndex(index);

      // Reset animation state after duration
      setTimeout(() => {
        setIsAnimating(false); // Reset after the animation duration
      }, 500); // Match this duration with your CSS transition time
    }
  };

  return (
    <div className="flex flex-col sm:flex-row p-6 rounded-lg shadow-lg mx-auto sm:mt-10 h-[100vh] sm:max-h-[650px] lg:max-h-[750px] border border-black">
      <div className="flex-1 relative">
        <div className="relative text-white text-lg font-semibold">
          {/* Image Carousel */}
          <div ref={imageRef} className="inline-block pr-4">
            <Image
              src={slides[currentSlideIndex]}
              alt="#"
              className="object-cover w-[300px] h-full sm:w-[400px] sm:h-full lg:w-[500px] lg:h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <div className="flex gap-2 absolute bottom-0 right-7">
              <button onClick={handlePrev}>Prev</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>

        {/* AOS Section */}
        <div
          className="mt-4"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
            EA SPORTS FC™ 25
          </h2>
          <p className="text-muted-foreground text-lg">Ultimate Edition</p>
          <p className="text-xl font-semibold mt-2">MYR 349</p>
          <div className="flex space-x-2 mt-4">
            <button className="bg-primary text-primary-foreground p-2 rounded-lg shadow hover:bg-primary/80 transition duration-300">
              Buy Now
            </button>
            <button className="bg-secondary text-secondary-foreground p-2 rounded-lg shadow hover:bg-secondary/80 transition duration-300">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Similar Games Section */}
      <div className="mt-6 md:mt-0 md:ml-6 flex flex-col space-y-4 overflow-y-auto md:overflow-visible">
        <h3 className="text-lg font-semibold text-foreground">Similar Games</h3>
        <div className="flex flex-col space-y-2 overflow-y-auto md:overflow-y-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => handleClickImage(slide)}
              className="p-4 rounded-lg flex items-center hover:bg-slate-100 cursor-pointer transition-shadow duration-300 relative"
            >
              <Image
                src={slide}
                alt=""
                width={50}
                height={50}
                className="rounded-lg mr-2"
              />
              <span className="text-muted-foreground">
                {index === 0 && "God of War Ragnarök"}
                {index === 1 && "Until Dawn™"}
                {index === 2 && "LEGO® Horizon Adventures™"}
                {index === 3 && "Genshin Impact"}
                {index === 4 && "Genshin Impact"}
              </span>
              {/* Loading background animation */}
              {loadingIndex === index && <div className="loading-bar"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
