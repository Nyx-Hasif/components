"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]); // This effect runs every time 'count' changes, but will stop after the first render

  return (
    <div className="flex  flex-1 flex-col">
      <div className="flex justify-center items-center h-[25%] border border-black mt-24 px-2 sm:px-4  w-full  max-w-[800px] mx-auto ">
        useEffect Hook that is dependent on a variable. If the count variable
        updates, the effect will run again
      </div>
      <div className="flex justify-center items-center  border border-black mt-4 px-2 py-4 sm:px-4 sm:py-6  w-full  max-w-[150px] mx-auto ">
        {count} and {calculation}
      </div>
      <div className="flex justify-center items-center p-4 border border-black  w-full  max-w-[100px] mt-4 mx-auto ">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center h-[25%] border border-black mt-4 px-2 sm:px-4  w-full  max-w-[800px] mx-auto ">
        <ul className='list-none sm:list-disc'>
          <li><b>No Dependency Array</b>: Runs after every render</li>
          <li><b>Empty Array [ ]</b>: Runs only once after the initial render.</li>
          <li><b>Array with Dependencies</b> [count]: Runs only when count changes.</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
