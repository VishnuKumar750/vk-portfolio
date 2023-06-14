import React, { useState } from 'react'
import player2 from '/assets/player2.png'
import programmer from '/assets/programmer.png'
import prog1 from '/assets/prog1.png'
import proj1 from '/assets/proj1.png'

const Projects = () => {
  const [expandedItem, setExpandedItem] = useState(1);

  const handleItemHover = (index) => {
    setExpandedItem(index);
  };

  const handleItemLeave = () => {
    setExpandedItem(1);
  };

  const renderProjects = () => {
    const projects = [
      {
        image: prog1,
        title: 'Blog App',
        url: 'https://vk-blog.vercel.app/',
      },
      {
        image: proj1,
        title: 'Vedic Ecommerce',
        url: 'https://vedic-ecommerce.netlify.app/'
      },
      {
        image: programmer,
        title: 'Algo Visualizer',
        url: 'https://algo-visualizer-app.netlify.app/'
      },
    ];

    return projects.map((project, index) => (
      <div
        key={index}
        className={`flex justify-center items-center text-[#1B9C85] 
        text-3xl
        relative group ${
          expandedItem === index ? `col-span-2
          group-hover:opacity-70` : 'opacity-80'
        } 
        transform
        transition-all delay-300 ease-in-out duration-500 cursor-pointer
        flex
        flex-col
        overflow-hidden
        `}
        onMouseEnter={() => handleItemHover(index)}
        onMouseLeave={handleItemLeave}
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {project.title}
        {expandedItem === index && (
          <div
            className={`absolute bg-gray-800 bg-opacity-50 w-full h-full 
            translate-y-[100rem]
            group-hover:translate-y-0 transition-all delay-500 ease-in-out duration-500 flex items-center justify-center
            text-white text-2xl
            `}
          >
            <a href={project.url}>View</a>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={`max-w-7xl mx-auto w-full h-screen grid  grid-cols-3 gap-2`}>

      <h1 className='absolute right-10 top-8'>
        <span className='text-[#41644A] text-4xl'>Projects</span>
      </h1>

      <div className='col-span-3 md:col-span-2 grid grid-cols-4 text-center gap-2'>
      {renderProjects()}
      </div>

      <div className='
        col-span-1
        text-center
        opacity-30
        hidden
        md:block
      '
        style={{  
          backgroundImage: `url(${player2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
      </div>
      

    </div>
  )
}

export default Projects