'use client'
import { assets, card_data } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'; // Import the CSS module
import { motion } from "framer-motion";

const Card = () => {

  const [loadImage,setLoadImage] = useState(true);


 useEffect(()=>{
  setTimeout(()=>{
    setLoadImage(false)
  },2000)
 },[])

 //apabila buka section ini, loadImage akan menjalankan terlebih dahulu akan memaparkan statement TRUE iaitu
 //iaitu menggunakan className styles.loader dengan tag <hr/> yg disetkan dgn ternary operation d bawah
 //selepas settimeout selesai selama 3 saat iaakan memaparkan statement FALSe iaitu akan memaparkan 
 //statement <Image/>,h1,p,dan button pada layar screen...kerana ia ditempat dlm ternary operation else (FALSE)

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="flex justify-center items-center w-full h-[100vh]  gap-y-8 gap-x-8 py-2 md:py-4 flex-1 flex-wrap border border-black overflow-auto scrollbar-hide"
    >
      {card_data.map((item, index) => {
        return (
          <div
            key={index}
            className="border border-black rounded-lg w-[200px] sm:w-[300px]  "
          >
            {loadImage ? (
              <div className={styles.loader}>
                <hr className={styles["image-loader"]} />
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <>
                <div className="relative w-full h-full">
                  <Image
                    draggable={false}
                    src={item.img}
                    alt="card-image"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <h1 className="text-2xl font-bold mt-4">{item.title}</h1>
                <p className=" sm:text-md text-ellipsis mt-4">{item.desc}</p>
                <button className="max-w-[130px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  {item.button}
                </button>
              </>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

export default Card
