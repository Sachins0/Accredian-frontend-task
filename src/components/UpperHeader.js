import React from 'react'

const UpperHeader = () => {
  return (
    <nav className="bg-blue-100 w-full py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center md:justify-center md:gap-4 justify-between">
        <span className="text-neutral-800 text-sm md:text-base font-medium">
          Navigate your ideal career path with tailored expert advice
        </span>
        <a
          href="https://accredian.com/"
          className="text-blue-500 font-semibold text-sm md:text-base whitespace-nowrap"
        >
          Contact Expert
        </a>
      </div>
    </nav>
  )
}

export default UpperHeader