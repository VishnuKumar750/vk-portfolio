import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'

import arrowRight from '/assets/arrow-right.svg'
import linkedin from '/assets/linkedin.svg'
import github from '/assets/github.svg'
import codechef from '/assets/codechef.svg'
import downloadOption from '/assets/download.svg'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)
  const [index, setindex] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, component: <Home /> },
    { id: 2, component: <Projects />},
    { id: 3, component: <About /> },
    { id: 4, component: <Contact /> },
    
  ]

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='relative'>
      <Navbar />
      {/* slider  */}
      <div className='h-screen overflow-hidden relative'>
        <div className='slide-container'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-item ${index === currentSlide ? 'active' : ''}`}>
              {slide.component} 
              </div>
          ))}
        </div>
        
      </div>

      {/* social media links with icons */}
      <div className='absolute bottom-5 left-6 md:left-12 h-[12em] md:h-[15em] w-[3em] flex flex-col items-center justify-center border-[#F97B22] border-2 '>
        <a href='https://www.linkedin.com/in/vishnu-kumar-370349253/'>
         <img className='h-[3em] md:h-[5em] w-[2.2em] object-contain cursor-pointer
         ' src={linkedin} alt='linkedin' />
        </a>

        <a href='https://github.com/VishnuKumar750'>
         <img className='h-[3em] w-[1.5em] object-contain cursor-pointer' src={github} alt='github' />
        </a>


        <a href='https://www.codechef.com/users/vishnukumar902'>
         <img className='h-[3em] md:h-[5em] w-[1.8em] object-contain cursor-pointer' src={codechef} alt='codechef' />
        </a>

         <img className='h-[3em] w-[1.5em] object-contain cursor-pointer' src={downloadOption}
         onClick={handleDownload} 
         alt='download' />
      </div>


      <div className='absolute bottom-0  right-0 rounded-full px-4 mx-8 my-4 sp-pulse cursor-pointer' onClick={nextSlide}>
         <img
            className='w-[3em] h-[5em] object-contain'
            src={arrowRight}
            alt='arrow-right'
         />
      </div>
    </div>
  )
}

export default App
