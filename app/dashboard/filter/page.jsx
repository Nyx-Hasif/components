'use client'
import React, { useState } from 'react'

const Page = () => {

    const texts = ['India','Japan','China','Korea','Malay','Arab','West'];

    const [active,setActive] = useState('All');


  return (
    <div className='flex flex-col border border-black h-screen w-screen'>
        {/* title */}
     <div className='border border-black py-6 px-6 text-center'>
        <h1>Filter with buttons ! </h1>
        <p>output with text...can put image with array</p>
     </div>


     {/* filter */}
     <div className='flex flex-col border border-black items-center h-[500px]'>
        {/* buttons */}
        <div className='flex flex-row gap-3 border border-black py-4 px-4 w-full justify-center'>
           <button onClick={()=> setActive('All')} className={`${active === 'All'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>All</button>
           <button onClick={()=> setActive('India')} className={`${active === 'India'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>India</button>
           <button onClick={()=> setActive('Japan')} className={`${active === 'Japan'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Japan</button>
           <button onClick={()=> setActive('China')} className={`${active === 'China'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>China</button>
           <button onClick={()=> setActive('Korea')} className={`${active === 'Korea'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Korea</button>
           <button onClick={()=> setActive('Malay')} className={`${active === 'Malay'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Malay</button>
           <button onClick={()=> setActive('Arab')} className={`${active === 'Arab'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Arab</button>
           <button onClick={()=> setActive('West')} className={`${active === 'West'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>West</button>  
        </div>
        {/* images result */}
        <div className='flex flex-wrap justify-start items-center border border-red py-4 px-4 w-full gap-4'>
            {texts.filter(item=> active === 'All' || item === active).map((item,index)=>(
                 <div key={index}>
                 <h1>{item}</h1>
            </div> 
            ))}       
        </div>
     </div>
    </div>
  )
}

export default Page
