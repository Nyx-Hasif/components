"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  const images = [
    { img: assets.block_pic_1, title: "I Love Picnic" },
    { img: assets.block_pic_2, title: "Metro Exodus" },
    { img: assets.block_pic_3, title: "A Florist" },
  ];

  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const pageTransition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="flex flex-col justify-start items-center min-h-[100vh]"
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
    
    >
      {/* Image Cards Section */}
      <div className="flex flex-col sm:flex-row py-4 px-4 border border-black gap-4 mt-5">
        {images.map((item, index) => (
          <div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-5 border border-black h-max text-center"
          >
            <Image
              draggable={false}
              src={item.img}
              width={300}
              height={300}
              alt={item.title}
            />
            <h1 className="text-2xl font-bold">{item.title}</h1>
          </div>
        ))}
      </div>

      {/* Subscription Section */}
      <div className="flex flex-col sm:flex-row justify-between border border-black mt-8">
        <div className="flex flex-col items-center justify-center py-4 px-4 max-w-[500px]">
          <h1 className="text-2xl font-bold">15 Best Fall Baking Recipes</h1>
          <p className="mt-4">
            I have hundreds of fall baking recipes on my website, and by signing
            up below, I’ll send you the 15 most popular, highest rated recipes
            that readers and I make every single autumn season!
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 w-max">
            <input
              type="text"
              className="border border-black font-thin pl-2 outline-none"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="border border-black font-thin pl-2 outline-none"
              placeholder="Your Email"
            />
          </div>
          <button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold px-2 rounded mt-3"
          >
            Subscribe
          </button>
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </div>
        <div>
          <Image
            src={assets.block_pic_4}
            className="w-[full] md:w-[300px] h-[400px] md:h-[300px] object-cover mx-auto"
            alt="block_pic_4"
          />
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="p-6 bg-background rounded-lg shadow-md border border-black mt-8">
        <h2 className="text-lg font-semibold mb-4">Latest Posts</h2>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Image
              src={assets.block_pic_5}
              alt="block_pic_5"
              className="rounded-lg mb-2"
              width={300}
              height={300}
            />
            <h3 className="font-medium">Maple-Roasted Squash & Kale Salad</h3>
            <span className="text-muted-foreground">25 Comments</span>
          </div>
          <div className="flex-1">
            <Image
              src={assets.block_pic_6}
              alt="block_pic_6"
              className="rounded-lg mb-2"
              width={300}
              height={300}
            />
            <h3 className="font-medium">Pumpkin Cream Cheese Bundt Cake</h3>
            <span className="text-muted-foreground">69 Comments</span>
          </div>
          <div className="flex-1">
            <Image
              src={assets.block_pic_7}
              alt="block_pic_7"
              className="rounded-lg mb-2"
              width={300}
              height={300}
            />
            <h3 className="font-medium">Brown Sugar Shortbread Cookies</h3>
            <span className="text-muted-foreground">27 Comments</span>
          </div>
        </div>
        <a href="#" className="mt-4 inline-block text-primary hover:underline">
          VIEW more POSTS
        </a>
      </div>
    </motion.div>
  );
};

export default Main;
