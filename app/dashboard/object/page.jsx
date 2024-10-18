'use client'
import React,{ useState } from 'react'



const Page = () => {


  const [data, setData] = useState({
    name: "Hasif",
    age: 25,
    born: "1997",
    hometown: "Kota Bharu",
    status: "single",
    about: "I am a student",
    interests: "I love coding",
    languages: "Malay",
    education: "Degree",
    sport: "football",
    country: "Malaysia",
  });

  return (
    <div className="flex flex-1 flex-col  ">
      <div className="flex justify-center items-center border border-black w-full max-w-[200px] scale-75 sm:scale-100 h-[200px] m-auto rounded-full  px-4 py-4 ">
        <h1>image here</h1>
      </div>
      <div className="border border-black w-full max-w-[1200px] h-[600px] m-auto px-4 py-4">
        <h1 className='mb-4'>Name : {data.name}</h1>
        <h1 className='mb-4'>Age : {data.age}</h1>
        <h1 className='mb-4'>Born :{data.born}</h1>
        <h1 className='mb-4'>Hometown :{data.hometown}</h1>
        <h1 className='mb-4'>Status : {data.status}</h1>
        <h1 className='mb-4'>About : {data.about}</h1>
        <h1 className='mb-4'>Interests : {data.interests}</h1>
        <h1 className='mb-4'>Languages : {data.languages}</h1>
        <h1 className='mb-4'>Education : {data.education}</h1>
        <h1 className='mb-4'>Sport : {data.sport}</h1>
        <h1 className='mb-4'>Country : {data.country}</h1>
        
      </div>
    </div>
  );
}

export default Page
