import React from 'react'

const Navbar = () => {
   const menu = [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Projects', link: '/projects' },
      { name: 'Contact', link: '/contact' },
   ]

  return (
    <div className='max-w-7xl mx-auto py-3 flex items-center absolute w-full top-0 justify-between px-[2em] md:px-[3em] z-[999] text-[#f97b22]'>
         <h1 className='text-6xl animate-pulse'>V</h1>
         
    </div>
  )
}

export default Navbar