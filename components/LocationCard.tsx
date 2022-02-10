import Image from 'next/image'
import React from 'react'

type Props = {
  name: string
  path: string
  location: string
  num: number
}
const LocationCard = ({ name, path, location, num }: Props) => {
  return (
    <div>
      <div className="relative flex justify-center duration-300 hover:scale-125">
        <div className="relative">
          <Image src={path} alt={name} width={292} height={510} />
        </div>
        <span className="absolute top-[50%] mx-auto rounded-full bg-blue-400 px-5 py-3">
          {num}
        </span>
        <div className="absolute bottom-4 text-center ">
          <h3 className="text-xl">{name}</h3>
          <span className="text-gray-400 [text-shadow:3px_3px_3px_#000]">
            {location}
          </span>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
