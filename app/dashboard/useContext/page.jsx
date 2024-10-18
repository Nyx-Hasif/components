'use client'
import { assets } from '@/assets/assets'
import { AppContext } from '@/context/AppContext'
import Image from 'next/image'
import React, { useContext } from 'react'


const Page = () => {

  const codeString2 = `
'use client'
import Sidebar from "@/Components/extraComponents/Sidebar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContextProvider from "@/context/AppContext";



export default function Layout({ children }) {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

    return (
      <ContextProvider>
        <div className="flex ">
          <Sidebar />

          {children}
        </div>
      </ContextProvider>
    );
}`;

const codeString = `
// first import createContext from react
import { createContext } from "react";

// create a context Name and export it
export const AppContext = createContext();

// create a context Provider and export it
const ContextProvider = ({children}) => {

// can add any variables u like to pass to 
//the components
// for example number phone
// can also pass functions
// can also pass objects
// can also pass arrays
// can also pass useState variables
// if more variables wrap in object {}

    const phone = '012-3456789';
    return (

// put variables inside the provider in the value
// if more variables wrap in object {}
        <AppContext.Provider value={phone}>
            {children}
        </AppContext.Provider>
    )
}

// export the provider
export default ContextProvider;
  `;

  const FullCode = `
//first import createContext from react
import { createContext } from "react";

//create a context Name and export it
export const AppContext = createContext();

//create a context Provider and export it
const ContextProvider =({children})=>{

    //can add any variables u like to pass to the components
    //for example number phone
    //can also pass functions
    //can also pass objects
    //can also pass arrays
    //can also pass useState variables
    //if more variables wrap in object {}
    const phone = '012-3456789';
    const name = 'Hasif'

    return(
        //put variables inside the provider in the value
        //if more variables wrap in object {}
        <AppContext.Provider value={{phone,name}}>
                {children}
        </AppContext.Provider>
    )
}

//export the provider
export default ContextProvider`;

  const {phone,name} = useContext(AppContext);

  return (
    <div className='flex flex-1 flex-col pl-10 overflow-auto h-[100vh]'>
      <div className='max-w-[800px] mb-8'>
        <Image src={assets.use_context} alt='usecontext'/>
        <h1 className='font-bold text-lg'>useContext</h1>
        <p className='mt-4 max-w-[400px]'>useContext is a React Hook that allows you access data from any component without explicitly passing it down through props at every leve</p>
        <p className='mt-4'>useContext is used to manage Global data in the React App</p>
        <p className='mt-4'>it also can pass data without using props</p>
      </div>
      <div className='max-w-[800px]'>
        <Image src={assets.file_context} alt='usecontext'/>
        <h1 className='font-bold text-lg'>create folder and save in root-file</h1>
        <p className='mt-4 max-w-[400px]'>create another a new file and save name as AppContext.jsx</p>
      </div>
      <div className='mt-8 max-w-[500px]'>
        <h1 className='font-bold text-lg'>context/AppContext.jsx (make this as DEFAULT)</h1>
        <pre className='sm:border border-black  scale-75 sm:scale-100 '><code>{codeString}</code></pre>
        <h1 className='font-bold text-lg'>create folder and save in root-file</h1>
        <p className='mt-4 max-w-[400px]'>create another a new file and save name as AppContext.jsx</p>
      </div>
      <div className='mt-8 max-w-[600px]'>
        <h1 className='font-bold text-lg'>dashboard/useContext/page.jsx</h1>
        <pre className='sm:border border-black  scale-75 sm:scale-100 '><code>{codeString2}</code></pre>
        <h1 className='font-bold text-lg'>create folder and save in root-file</h1>
        <p className='mt-4 max-w-[400px]'>create another a new file and save name as AppContext.jsx</p>
      </div>
      <div className='mt-8 max-w-[500px]'>
        <h1 className='font-bold text-lg'>TEST data Access from AppContext</h1>
        <p className='mt-4 max-w-[400px]'>phone Number: {phone}</p>
        <p className='mt-4 max-w-[400px]'>phone Number: {name}</p>
        <p className='mt-4 max-w-[400px]'>wow its working</p>
      </div>
      <div className='pb-10 max-w-[600px]'>
        <h1 className='font-bold text-lg'>Full Code AppContext.jsx Below </h1>
        <pre className='sm:border border-black  scale-75 sm:scale-100 '><code>{FullCode}</code></pre>
      </div>
    </div>
  )
}

export default Page
