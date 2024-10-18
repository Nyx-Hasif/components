'use client'
import { assets } from '@/assets/assets'
import Modal from '@/Components/extraComponents/Modal'
import Image from 'next/image'
import React, { useState } from 'react'
import KodeString from './kodeString'

const Page = () => {
  const codeString = `
import React from 'react'

const Modal = ({children,isOpen,closeModal}) => {


  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg relative">
        {/* Close button */}
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-black" >X</button>

        {/* Modal content */} 
        {children}   // this children prop will be passed from the parent component
      </div>         //lets say any child component that used modal component will be render here
    </div>
  )
}

export default Modal`;

  const codeString2 = `  
'use client'
import { assets } from '@/assets/assets'
import Modal from '@/Components/extraComponents/Modal'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {

const [isOpen, setIsOpen] = useState(false);

      const closeModal = () => {
        setIsOpen(false);
      }

      const openModal = () => {
        setIsOpen(true);
      }

  return (

    <div className='flex flex-1 flex-col overflow-auto h-[100vh] '>
        <div className='mx-auto mt-8 '>
            <Image onClick={openModal} src={assets.block_pic_1} alt={'image'} className='rounded-lg' width={300} height={300}/>
        </div>
        <div className='mx-auto mt-8 '>
            {isOpen? <>  // use ternary operator to decide open or close
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}>
                <Image src={assets.block_pic_1} alt={'image'} className='rounded-lg' width={600} height={600}/>
            </Modal></>
            :null}   
        </div>
        <div className='mt-4'>
            <h1><b>Modal.jsx</b> component</h1>
            <pre className='border border-black '><code>{codeString}</code></pre>
            <h1 className='mt-4 mb-4'><b>page.jsx</b> dashboard/modal_useState</h1>
            <pre className='border border-black pb-4 '><code>{codeString}</code></pre>
        </div>
    </div>
  )
}

export default Page`;

  const [isOpen, setIsOpen] = useState(false);
  const [kode,setKode] = useState('')
  const [kode1,setKode1] = useState('')


  //modal slider
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0

  //create an array to store images
  const images = [assets.block_pic_1, assets.block_pic_2,assets.step1_step2,assets.step3_step4,assets.step5_step6_step7]; // Add more if needed

   // Callback function to receive `kode` from kodeString component
  const handleChange = (newKode,newKode1) =>{
    setKode(newKode);
    setKode1(newKode1);

  }

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
                alt={`image ${currentIndex + 1}`} // Pass the alt text
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
        <h1><b>.::Full Code::.</b> with Slider Next and Prev</h1>
        <div className='border-t border-black mt-4'>
          <h2>this is from <b>page.jsx</b></h2>
          {/* hantar ke kodeString component handleChange function sebagai prop */}
          <KodeString handleChange={handleChange}/> 
          <pre><code>{kode}</code></pre>
        </div>

        <div className='border-t border-black mt-4'>
          <h2>this is from <b>Modal.jsx</b></h2>
          <pre><code>{kode1}</code></pre>
        </div>
      </div>
    </div>
  );
}

export default Page
