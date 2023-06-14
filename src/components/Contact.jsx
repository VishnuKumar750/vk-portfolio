import React from 'react';
import './Contact.css';
import blossom from '/assets/blossom.png'

const Contact = () => {
 
  return (
    <div className='max-w-7xl w-full h-screen inset-0'
    style={{
      backgroundImage: `url(${blossom})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom 0 right 0',
      backgroundSize: 'contain',
    }}
    >
       {/*contact details  */}
        <div className='my-20 mx-8 md:mx-16'>
          <h1 className={"text-[#F0A6B6] text-4xl my-4"}>Contact Me : </h1>
          <p className='text-[#BE6DB7] text-xl'>I'm excited to connect with you! If you have any questions, project inquiries, or just want to say hello, feel free to reach out to me using the following contact information:</p>
          <p className='my-2 text-[#BE6DB7] text-xl'>Email: vk9027024@gmail.com</p>
          
          <p className='text-[#BE6DB7] text-xl'>I'm always open to new opportunities and collaborations, so don't hesitate to get in touch.
            <br/>
Thank you for visiting my portfolio website. I look forward to hearing from you!"</p>
        </div>
    </div>
  )
}

export default Contact