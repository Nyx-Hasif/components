'use client'
import { assets } from '@/assets/assets';
import { AppContext } from '@/context/AppContext'
import Image from 'next/image';
import React, { useContext } from 'react'

const Page = () => {

  //add context from AppContext.jsx
  const {content,changeNumber,title,phone} = useContext(AppContext);

  const codeString = `
//first import createContext from react
import { createContext, useState } from "react";

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

//============================================================    
/    const [content,setContent] = useState(true)             /
/    const [title,setTitle] = useState('Click me')           /
/                                                            /
/    //create a function                                     /
/    const changeNumber = () =>{                             /
/        setContent(false);                                  /
/        setTitle("Click Back");                             /
/        if(content === false && title === 'Click Back'){    /
/             setContent(true);                              /
/             setTitle("Click me");                          /
/        }                                                   /
/    }                                                       /
/============================================================/
    return(
        //put variables inside the provider in the value
        //if more variables wrap in object {}
        <AppContext.Provider value={{phone,name,changeNumber,title,content}}>
                {children}
        </AppContext.Provider>
    )
}

//export the provider
export default ContextProvider`;

  return (
    <div className='flex flex-1 h-[100vh] overflow-auto  '>
      <div className='pt-5 pl-5'>
        <h1><b>Access</b> data using useState from <b>AppContext.jsx</b></h1>
        <pre className='border border-black max-w-[550px]'><code>{codeString}</code></pre>
        <button  onClick={changeNumber} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8'>{title}</button>
        <div>
          <h2>{content?'This element will change to number if u clicked button':phone}</h2>
        </div>
        <Image src={assets.btn_click}  alt={'code'} className='max-w-[500px] pb-4 cursor-pointer'/>
      </div>
     
    </div>
  )
}

export default Page
