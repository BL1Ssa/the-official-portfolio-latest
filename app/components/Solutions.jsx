import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Solutions = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="solutions">

      <h4 className="text-center mb-2 text-lg">This is</h4>
      <h2 className="text-center text-5xl font-medium">What can I do</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        This is what I can do as a fresh developer and what I have learned
        during my journey as a web and mobile developer.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({icon, title, description}, index)=>(
            <div key={index} className="border border-gray-800 rounded-lg px-8 py-12
            hover:shadow-xl hover:-translate-y-1 duration-500 cursor-pointer hover:bg-amber-100">
                <Image src={icon} alt="icon" className="w-10"/>
                <h3 className="text-lg my-4 text-gray-800 font-extrabold">{title}</h3>
                <p className="text-sm text-gray-700 leading-5 font-medium">{description}</p>
                
            </div>
        ))}
      </div>

    </div>
  )
}

export default Solutions
