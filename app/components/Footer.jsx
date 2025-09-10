import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="w-56 text-5xl mx-auto mb-2">The Bliss Studio</h1>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="email" className="w-6"/>
            brandonlsantosa@gmail.com
        </div>
      </div>

       <div className="text-center sm:flex items-center justify-between border-t border-gray-500 mx-[5%] mt-12 py-8">
  <p className="sm:text-left sm:w-1/2">(c) 2025 Brandon Lim Santosa. All rights reserved</p>
  <ul className="flex items-center gap-10 justify-center sm:justify-end sm:w-1/2 mt-4 sm:mt-0">
    <li><a target='https://www.instagram.com/brndn_limm' href="https://www.instagram.com/brndn_limm">Instagram</a></li>
    <li><a target='https://github.com/BL1Ssa' href="https://github.com/BL1Ssa">GitHub</a></li>
    <li><a target='https://www.linkedin.com/in/brandon-lim-santosa-aa50a327b' href="https://www.linkedin.com/in/brandon-lim-santosa-aa50a327b">Linkedin</a></li>
  </ul>
</div>

    </div>
  )
}

export default Footer
