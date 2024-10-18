import React from 'react'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({children,closeModal,images,setCurrentIndex}) => {

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
