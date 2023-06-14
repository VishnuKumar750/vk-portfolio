import React from 'react'
import './Home.css'
import character from '/assets/character.png'
import css from '/assets/css.png'
import html from '/assets/html.png'
import js from '/assets/js.png'
import nodejs from '/assets/nodejs.png'
import react from '/assets/react.svg'

const Home = () => {
  const [hovered, setHovered] = React.useState(null)

  const handleMouseEnter = (index) => {
    console.log(index);
    setHovered(index)
  }

  return (
    <div className='h-screen w-full max-w-7xl relative flex bg-[#E8E8E8]
    opacity-90'
    >
      <div className='absolute w-full h-full
      opacity-70
      '
      style={{
         backgroundImage: `url(${character})`,
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'bottom 0 right 0',
         backgroundSize: 'contain'
       }}
      >

      </div>

      <div className='w-full h-full px-[2em] py-[4em] md:py-[6em] z-[99] '>
         <h1 className='text-4xl md:text-6xl font-bold leading-[1.5em]
         text-[#0E2954]
         '>Hi, I'm Vishnu Kumar</h1>
         <h2 className='text-2xl md:text-4xl font-semibold leading-[1.2em]
         text-purple-700'>I'm a Passionate Web Developer <br/> & Programmer</h2>
       </div>

       <div className='absolute right-10 top-6'>
            <div className='w-[2em] h-1 bg-green-500 animate-pulse'></div>
            <div className='w-[4em] h-1 bg-green-500 my-2 animate-pulse'></div>
            <div className='w-[6em] h-1 bg-green-500 animate-pulse'></div>
         </div>
      

         <div className='absolute bottom-5 left-10 md:left-28 flex h-[10em] items-end justify-center'>
            {[...Array(5)].map((_, i) =>  
              <div
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => setHovered(null)}
             className={`h-[2em] w-[2em]  mx-2 rounded-full   
             cursor-pointer
              ${i === hovered ? 'animate-bounce' : ''}
              `}
              style={{
                backgroundImage: `url(${i === 0 ? html : i === 1 ? css : i === 2 ? js : i === 3 ? react : i === 4 ? nodejs : '' })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
            </div>
            )}
         </div>
    </div>
  )
}

export default Home