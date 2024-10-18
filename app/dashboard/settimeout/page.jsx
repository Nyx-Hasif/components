'use client'
import React,{ useEffect, useState} from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1); //Runs only on the first render //And any time any dependency value changes
    }, 1000);
  }, [count]); // This will keep updating the count every second if has array with count
                //without second argument as arrray and if has array [0]/[] then it will run only once

  return (
    <div className="flex  flex-1 flex-col">
      <div className="flex justify-center items-center h-[25%] border border-black mt-24 w-full  max-w-[800px] mx-auto ">
        Use setTimeout() to count {count} second after initial render:
      </div>
      <div className="flex justify-center items-center p-4 border border-black  w-full  max-w-[300px] mt-4 mx-auto ">
        The useEffect Hook allows you to perform side effects in your
        components.
      </div>
      <div className="flex justify-center items-center p-4 border border-black  w-full  max-w-[300px] mt-4 mx-auto ">
        Some examples of side effects are: fetching data, directly updating the
        DOM, and timers.
      </div>
      <div className="flex justify-center items-center p-4 border border-black  w-full  max-w-[300px] mt-4 mx-auto ">
        useEffect accepts two arguments. The second argument is optional.
      </div>
      <div className="flex justify-center items-center p-4 border border-black  w-full  max-w-[300px] mt-4 mx-auto ">
        The first argument is a function that contains all of your useEffect
        logic.
      </div>
      <div className="flex justify-center items-center p-4 border border-black  w-full  max-w-[300px] mt-4 mx-auto ">
        The second argument is an array of dependencies. If the values in the
        array change, then the useEffect will run again.
      </div>
    </div>
  );
};

export default Page;
