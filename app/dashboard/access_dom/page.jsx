"use client";
import React, { useEffect, useState, useRef } from "react";

const Page = () => {

  const inputRef = useRef(null); // useRef returns an object with a .current property which is initialized to the passed argument ( initialValue ).
console.log(inputRef) // {current: 0} as object


  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col justify-center items-center h-[25%] border border-black mt-24 px-2 sm:px-4 w-full max-w-[800px] mx-auto">
        <h1>
          Access DOM element using<b> useRef</b>
        </h1>
        <br />
        <input type="text" ref={inputRef}  className='border pl-2 border-black' placeholder='text here'/>
      </div>
      <div className="flex justify-center items-center border border-black mt-4 px-2 py-4 sm:px-4 sm:py-6 w-full max-w-[250px] mx-auto">
        <button onClick={()=>console.log(inputRef.current.style.backgroundColor='yellow')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
      </div>
    </div>
  );
};

export default Page;
