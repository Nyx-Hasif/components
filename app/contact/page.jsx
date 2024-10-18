import Card from '@/Components/Card'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-auto scrollbar-hide">
      <Navbar />
      <div className="pt-14">
        <Card />
      </div>
    </div>
  );
}

export default page
