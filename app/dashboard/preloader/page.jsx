'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Card from '@/Components/Card';

const Page = () => {

const [show,setShow] = useState(true);

useEffect(()=>{
 setTimeout(()=>{
  setShow(false)
 },1000)
},[])


  return (
    <div className='flex flex-1 justify-center items-center w-full  '>
        {
            show? <Image src={assets.gear_spinner} alt={'spinner'}/>: <> <Card/></>
        }
    </div>
  )
}

export default Page
