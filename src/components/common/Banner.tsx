import Image from 'next/image'
import React from 'react'
import banner from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <Image
        src={banner}
        alt="banner"
        fill
        sizes="(max-width: 768px) 100%,
              100%"
      />
    </div>
  )
}

export default Banner