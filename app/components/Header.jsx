import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import styled from 'styled-components'

const ShakeImage = styled(Image)`
  animation: shake 0.5s infinite alternate;

  @keyframes shake {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(20deg); }
  }
`;

const Header = () => {

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-3">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full
        w-32"/>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl
        mb-3 ">
            Hi There! It's Brandon on the spot
            <ShakeImage src={assets.hand_icon} alt="Hand Icon" className="w-6" id="hand-picture"/>
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] ">
        Web & Mobile Developer From #INDONESIA
      </h1>
      <p>
        I am a fresh web & mobile developer starting a new journey
        to the next level. Within 1 year of experience working
        on several projects.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact"
        className="px-10 py-3 border border-white rounded-full
         bg-gray-800 text-white flex items-center gap-2">
            Contact me <Image src={assets.right_arrow_white} alt="" className="w-4"/>
        </a>
        <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full
         border-gray-500 flex items-center gap-2">
            The Resume <Image src={assets.download_icon} alt="" className="w-4"/>
        </a>
      </div>
    </div>
  )
}

export default Header
