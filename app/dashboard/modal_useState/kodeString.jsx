import React, { useEffect } from 'react'
// this for saving variable code of component and to export it in another component using function nad useEffect but this is child component
//this child component need to receive `handleChange` from parent component(page.jsx)
const KodeString = ({handleChange}) => {
  const kode = ` 
'use client'
import { assets } from '@/assets/assets'
import Modal from '@/Components/extraComponents/Modal'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {'use client'
import { assets } from '@/assets/assets'
import Modal from '@/Components/extraComponents/Modal'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

  //modal slider
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0

  //create an array to store images
  const images = [assets.block_pic_1, assets.block_pic_2,assets.step1_step2,assets.step3_step4,assets.step5_step6_step7]; // Add more if needed

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-1 flex-col overflow-auto h-[100vh] ">
      <div className="flex sm:flex-row flex-col mx-auto mt-8 gap-4 ">
        <Image
          onClick={() => openModal(0)}
          src={assets.block_pic_1}
          alt={"image"}
          className="rounded-lg cursor-pointer hover:scale-95 duration-300"
          width={300}
          height={300}
        />
        <Image
          onClick={() => openModal(1)}
          src={assets.block_pic_2}
          alt={"image"}
          className="rounded-lg cursor-pointer hover:scale-95 duration-300"
          width={300}
          height={300}
        />
      </div>
      <div className="mx-auto mt-8 ">
        {isOpen ? (
          <>
          {/* Modal rendering */}
            <Modal
              isOpen={isOpen}
              closeModal={closeModal}
              setIsOpen={setIsOpen}
              images={images} // Pass the images array
              currentIndex={currentIndex} // Pass the current index
              setCurrentIndex={setCurrentIndex} // Allow updating the index
            >
              <Image
                src={images[currentIndex]} // Pass the current image
                alt={"image"}
                className="rounded-lg"
                width={600}
                height={600}
                draggable="false"
              />
            </Modal>
          </>
        ) : null}
      </div>
      <div className="mt-4 pl-4">
        <h1>
          <b>Modal.jsx</b> component
        </h1>
        <pre className="border border-black ">
          <code>{codeString}</code>
        </pre>
        <h1 className="mt-4 mb-4">
          <b>page.jsx</b> dashboard/modal_useState
        </h1>
        <pre className="border border-black pb-4 ">
          <code>{codeString2}</code>
        </pre>
      </div>

      <div className="mt-4 pl-4 ">
        <h1>
          <b>.::Modal.jsx::.</b> with Slider Next and Prev
        </h1>
        <h1 className="mt-4 mb-4">
          <b>Step by step</b>
        </h1>
        <h2>click btn below to read guide</h2>
        <div className='flex flex-row gap-4'>
             <button onClick={() => openModal(2)} className='border border-black'>Step1&2</button>
             <button onClick={() => openModal(3)} className='border border-black'>Step3&4</button>
             <button onClick={() => openModal(4)} className='border border-black'>Step5&6&7</button>
        </div>
      </div>
      <div className="mt-4 pl-4 ">
        <h1>
          <b>.::Full Code::.</b> with Slider Next and Prev
        </h1>
        
        <h2>click btn below to read guide</h2>
        
      </div>
    </div>
  );
}

export default Page`;

const kode1 = `
import React from 'react'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({children,isOpen,closeModal,images,currentIndex,setCurrentIndex}) => {

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); // Loop back to the last image
  };



  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg relative">
        {/* Close button */}
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-black" >{<RiCloseCircleFill className='text-3xl' />}</button>
        <div className='absolute transform -translate-x-1/2 -translate-y-1/2  left-1/2 bottom-0'>
          <button onClick={goToPrevious}>{<GrCaretPrevious className='text-4xl'/>}</button>
          <button onClick={goToNext}>{<GrCaretNext className='text-4xl'/>}</button>
        </div>
       
        {/* Modal content */}
        {children}
      </div>
    </div>
  )
}

export default Modal
`;

  // Call the onKodeChange function to pass the kode back to Page.jsx
  useEffect(() => {
    handleChange(kode,kode1); // Pass the kode string back to the parent when the component mounts

  }, [handleChange]); // Make sure the function is called only when the component mounts

  return (
   <>
   </>
  );
}

export default KodeString
