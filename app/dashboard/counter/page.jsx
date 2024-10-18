'use client'
import React,{useState} from 'react'

const Page = () => {

  const [count,setCount] = useState(0);

   const handleClick = () => {
    setCount(prev=>prev+1); //1
    setCount(prev=>prev+1); //2
    setCount(prev=>prev+1); //3
    setCount(prev=>prev+1); //4
   } //total 4 count per click

   //negate value
   const handleDecrease = () => {
    setCount(prev=>prev-1);
   }

   //reset back to zero
   const handleReset = () => {
    setCount(0);
   }

  return (
    <div className="flex flex-1 flex-col ">
      <div className='flex justify-center items-center h-[25%] border border-black w-full max-w-[500px] mx-auto mt-24 '>
        <h1>Counter : {`${count}`}</h1>
      </div>
      <div className='flex gap-3 justify-center items-center h-[50px] border border-black w-full max-w-[300px] mx-auto mt-4 select-none '>
        <div className='cursor-pointer bg-black text-white px-4 py-2' onClick={handleClick}>Increase</div>
        <div className='cursor-pointer bg-black text-white px-4 py-2' onClick={handleReset}>Reset</div>
        <div className='cursor-pointer bg-black text-white px-4 py-2' onClick={handleDecrease} >Decrease</div>
      </div>
    </div>
  )
}

export default Page
