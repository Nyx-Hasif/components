import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <div className='flex flex-1 flex-col  h-[100vh] overflow-auto bg-black '>
      <Marquee pauseOnHover={false} speed={100} gradient={true} gradientWidth={300} gradientColor='black'  >
        <div className='mx-6'>
          <Image src={assets.block_pic_4} width={300} height={300} alt={'block_pic_4'}/>
        </div>
        <div className='mx-6'>
          <Image src={assets.block_pic_5} width={300} height={300} alt={'block_pic_5'}/>
        </div>
        <div className='mx-6'>
           <Image src={assets.block_pic_6} width={300} height={300} alt={'block_pic_6'}/>
       </div>
        <div className='mx-6'>
           <Image src={assets.block_pic_7} width={300} height={300} alt={'block_pic_7'}/>
        </div>
        <div className='mx-6'>
           <Image src={assets.block_pic_8} width={300} height={300} alt={'block_pic_7'}/>
        </div>
      </Marquee>
      <Link href={'https://www.npmjs.com/package/react-fast-marquee'} className=' py-2 px-2 border border-white  mt-5 cursor-pointer text-center max-w-[200px] mx-auto'>
         <h1 className='text-white font-bold size-8 w-full hover:text-red-500 '>Visit References</h1>
      </Link>
    </div>
  )
}

export default page
