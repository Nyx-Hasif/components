"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []); // Empty array ensures this runs only once

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center items-center h-[25%] border border-black mt-24 px-2 sm:px-4 w-full max-w-[800px] mx-auto">
        Clean up the timer at the end of the useEffect Hook:
      </div>
      <div className="flex justify-center items-center border border-black mt-4 px-2 py-4 sm:px-4 sm:py-6 w-full max-w-[150px] mx-auto">
        {count}
      </div>
      <div className="flex justify-center items-center p-4 border border-black w-full max-w-[100px] mt-4 mx-auto"></div>
      <div className="flex justify-center items-center h-[25%] border border-black mt-4 px-2 sm:px-4 w-full max-w-[800px] mx-auto">
        <ul className="list-none sm:list-disc">
          <li>Some effects require cleanup to reduce memory leaks.</li>
          <li>
            Timeouts, subscriptions, event listeners, and other effects that are
            no longer needed should be disposed.
          </li>
          <li>
            We do this by including a return function at the end of the
            useEffect Hook.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
