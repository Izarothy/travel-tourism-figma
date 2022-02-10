import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex w-full border-b border-gray-400">
      <ul className="flex border-r border-gray-400 py-6 px-12">
        <li>
          <Link href="/" passHref>
            <div className="flex cursor-pointer items-center gap-4">
              <Image src="/images/logo.png" width={61} height={61} />
              <h2 className="text-2xl font-semibold">
                Cubic<span className="text-blue-300">Travels</span>
              </h2>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex grow items-center justify-between px-4 text-gray-400">
        <li className="flex items-center">
          <input
            type="text"
            placeholder="Search For The Trip Or Destination"
            className="h-1/4 bg-transparent text-xl focus:outline-none"
          />
          {/* Search SVG  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </li>
        <li className="flex items-center gap-2 text-xl text-white">
          {/* Phone SVG  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>+1 237 878 659</span>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
