import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-16'>
        <Header />
      </div>
    </div>
  );
}

export default page
