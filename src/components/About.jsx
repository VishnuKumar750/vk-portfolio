import React from 'react'
import about from '/assets/about.png'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto w-full h-screen flex'
    >

      <div className='w-[12em] md:w-[24em] lg:w-[40em] h-full mx-16 my-16 '>
        <h1 className='text-4xl font-bold leading-[2em]
        text-[#466A6E]
        mb-2
        '>About Me</h1>

        <p className='text-[1rem] lg:text-2xl text-[#A4907C]'>Hello, I'm Vishnu, a passionate web developer with expertise in a wide range of technologies. I specialize in building dynamic and interactive web applications. My tech stack includes MongoDB, ReactJS, ExpressJS, Node.js, HTML, CSS, and Java.
        <br/>

        With a strong foundation in these technologies, I strive to create seamless user experiences and visually appealing websites. I enjoy working on challenging projects that push the boundaries of creativity and functionality.
        </p>
      </div>

      <div
        className='hidden md:block w-full h-full bg-cover lg:bg-contain'
        style={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 0 right 0',
          opacity: 0.8,
        }}
      >

      </div>
      

    </div>
  )
}

export default About