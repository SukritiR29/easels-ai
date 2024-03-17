import React from 'react'
import LoginForm from '@/components/loginForm';
const page = () => {

  const backgroundImageUrl = 'url("/office.jpeg")';

  return (
<div className="hero min-h-screen flex items-center justify-end bg-black" style={{backgroundImage: backgroundImageUrl, backgroundSize: 'cover'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <div className="max-w-md">
    <div className='max-h-screen'>
      <div className='flex justify-end p-20 mr-[100px]'>
      <LoginForm/>
      </div>
    </div>
    </div>
  </div>
</div>

 
  )
}

export default page