import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="project">
      
      <h4 className="text-center mb-2 text-lg">Welcome to</h4>
      <h2 className="text-center text-5xl font-medium">Portfolio Nest</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        This is what I can do as a fresh developer and what I have learned
        during my journey as a web and mobile developer.
      </p>

      <div className="grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 grid">
        {workData.map((project, index)=>(
            <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
            cursor-pointer group">
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2
                -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
                group-hover:bottom-7">
                    <div>
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <a href={project.link}></a>
                    </div>
                    <div className="border rounded-full border-black w-9 aspect-square flex
                    items-center justify-center shadow-[2px_2px_0_#252525]
                    group-hover:bg-amber-100 transition duration-300">
                        <Image src={assets.send_icon} alt="send-icon" className="w-5"/>
                    </div>
                </div>
            </div>
        ))}
      </div>
        <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700
        border-[1px] border-gray-700 rounded-full y-3 px-10 mx-auto py-4 hover:bg-amber-200
        duration-500">
            Show More <Image src={assets.right_arrow_bold} alt="right-arrow" className="w-4"/>
        </a>
    </div>
  )
}

export default Projects
