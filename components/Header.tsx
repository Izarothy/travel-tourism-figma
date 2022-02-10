import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-semibold">Explore The World With Ease.</h1>
      <button className="rounded-full bg-[#357B95] py-5 px-[75px]">
        Discover Top Destinations
      </button>
      <span className="flex items-center gap-2 text-lg">
        Featured Trips
        {/* > SVG  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </header>
  )
}

export default Header
