import React, { useState } from 'react'
import { Hamburger, X } from 'lucide-react'

const Navbar = () => {
  const [showTabs, setShowTabs] = useState(false)
  const navStyle = `
cursor-pointer
relative
transition-all
duration-300
hover:text-[var(--primary)]

after:content-['']
after:absolute
after:left-0
after:-bottom-1
after:w-0
after:h-[2px]
after:bg-[var(--primary)]
after:transition-all
after:duration-300

hover:after:w-full
`

  return (
    <nav className="w-full text-white px-5 py-3">

      {/* Top Navbar */}
      <div className="flex justify-between items-center">

        <span className="font-dancing text-[10px] border border-[var(--primary)] rounded-full px-2 py-2">
          Jisha
        </span>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          <span className={navStyle}>About</span>
          <span className={navStyle}>Skills</span>
          <span className={navStyle}>Projects</span>
          <span className={navStyle}>Contact</span>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden"
          onClick={() => setShowTabs(!showTabs)}
        >
          {showTabs ? (
            <X className="text-[var(--primary)]" />
          ) : (
            <Hamburger className="text-[var(--primary)]" />
          )}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {showTabs && (
        <div
          className="
          md:hidden
          mt-4
          flex
          flex-col
          gap-4
          bg-[#111]
          p-5
          rounded-2xl
          border border-gray-700
          shadow-lg
          "
        >
          <span>About</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      )}

    </nav>
  )
}

export default Navbar