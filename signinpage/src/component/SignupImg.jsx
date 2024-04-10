import React from 'react';
import bgImg from '../assets/bgimg.png'; // Import the image file

const SignupImg = () => {
  return (
    <>
      <div className=' h-full flex flex-col items-start' style={{backgroundColor: '#f2cf81'}}>
        <h1 className='text-2xl font-bold pl-10 pt-10'>Dribbbble</h1>
        <div className='flex flex-col gap-9'>
          <p className='text-2xl font-bold p-10 text-amber-600'>
            Discover the world's top <br /> Designers & Creatives.
          </p>
          <div className=" w-full">
            <img src={bgImg} alt="" className=' w-full' />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupImg;