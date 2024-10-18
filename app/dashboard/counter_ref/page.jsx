"use client";
import React, { useEffect, useState ,useRef} from "react";

const Page = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
 console.log(count)// display {current: 0} as object

  const handleAdd =()=>{
    setValue(prev=>prev+1);
  }

  useEffect(() => {
    count.current ++;
  },[value]); // This ensures count only increments when value changes (i.e., button click)


  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col justify-center items-center h-[25%] border border-black mt-24 px-2 sm:px-4 w-full max-w-[800px] mx-auto">
       <h1> count the number of times the button is clicked by using <b>useRef =</b> {value}</h1>
       <h1 className='mt-8 text-red-600'>if u re using next.js,make sure u disable react strict in next.config.js setting it to false so that render page count will start intialize to 1 instead of 2 </h1>
      </div>
      <div className="flex justify-center items-center border border-black mt-4 px-2 py-4 sm:px-4 sm:py-6 w-full max-w-[250px] mx-auto">
        Page render  count after clicked button = {count.current}
      </div>
      <div className="flex flex-row gap-2 justify-center items-center p-4 border border-black w-full max-w-[100px] mt-4 mx-auto user-select-none">
         <button onClick={handleAdd} className=' border border-black px-2 '>+1</button>
         <button onClick={() => {setValue(prev=>prev-1)}} className=' border border-black px-2 '>-1</button>
        
      </div>
     
    </div>
  );
};

export default Page;
