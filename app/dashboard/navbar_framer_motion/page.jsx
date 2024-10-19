"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
//add framer motion import
//after that add motion tag at parent div
import { motion } from "framer-motion";
import Modal from "@/Components/extraComponents/Modal";


const Page = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [isOpen,setIsOpen] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);

  const images = [assets.navbar_framer,assets.about_navbar,assets.contact_navbar,assets.home_navbar];

  const openModal = (index) =>{
    setIsOpen(true);
  
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleRotate = () => {
    setIsRotate(!isRotate); // use negate value to toggle rotate...isRotate initial = true when click !isRotate = false and click again !isRotate = true
  };

  return (
    <div className="flex flex-col w-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", transition: { duration: 0.1 } }}
        className="flex flex-row justify-between items-center  py-2 px-4 border border-black w-full h-max"
      >
        <Link href={"/"}>
          <Image src={assets.logo} width={40} height={40} alt={"logo"} />
        </Link>

        <div className="sm:flex hidden  flex-row gap-4">
          <Link href={"/"}>{"Home"}</Link>
          <Link href={"/about"}>{"About"}</Link>
          <Link href={"/contact"}>{"Contact"}</Link>
        </div>
        <div className="flex  flex-row gap-4 ">
          <Link
            href={"/dashboard"}
            className="px-2 py-1 border border-black shadow-md rounded-full hover:bg-black hover:text-white"
          >
            {"Sidebar"}
          </Link>
        </div>
        {/* Hamburger menu in mobile view */}
        <div
          className="sm:hidden border border-black cursor-pointer "
          onClick={handleRotate}
        >
          <IoMenu
            className={`text-4xl transition-transform duration-300 ${
              isRotate ? "rotate-360" : ""
            }`}
          />
        </div>
      </motion.div>

      {/* modal rendering interface */}
      <div>
        {isOpen?<>
        <Modal isOpen={isOpen} closeModal={closeModal} images={images} setCurrentIndex={setCurrentIndex}>
          <Image src={images[currentIndex]} alt={'navbar_framer'}/>
        </Modal>
        </>:''}
        
      </div>


      <div className="pl-4 pt-4">
          <h1 className="text-xl font-medium">Navbar full-Code</h1>
          <h2>Above Navbar is just for UI but not finish yet</h2>
          <h2>Get Full <b>animated</b> like homepage navbar framer motion below !</h2>
          <div onClick={openModal} className="cursor-pointer bg-black text-white px-4 py-2 max-w-[150px] text-center mt-4 hover:bg-red-400 transition-all duration-700">
            View full Code
          </div>
          <p className="mt-4">Replace <b className="border border-black px-1">window.innerWidth to 100%</b> every component in that code</p> 
          <p className="mt-1">it is because it could cause an error if not replace it</p> 
      </div>
    </div>
  );
};

export default Page;
