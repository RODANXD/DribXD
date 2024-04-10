import React from 'react'
import VerifYNav from './vefication compo/VerifYNav'
import VerifYfoot from './vefication compo/VerifYfoot'
import { MdMarkEmailRead } from "react-icons/md";

const VerificationPage = () => {
  return (
    <div className='flex flex-col min-h-screen gap-40 md:gap-32 xl:gap-20'>
      <div className='flex flex-col items-center justify-center flex-grow'>
      <VerifYNav />
      <div className='flex flex-col items-center justify-center flex-grow'>
        <div className='max-w-3xl flex flex-col items-center justify-center mt-20'>
          <h1 className='text-4xl font-semibold text-center xs:text-base xl:text-4xl'>Please verify your email...</h1>
          <MdMarkEmailRead className='size-32 text-gray-400 xs:size-20 xl:size-32' />
          <div className='text-gray-400 flex flex-col items-center justify-center gap-6 mt-6 xs:text-center'>
            <span>please verify your email address. We've sent a confirmation email to:</span>
            <span className='font-bold text-black'>account@refero.design</span>
            <span>Click the confirmation link in that email to begin using Dribbble</span>
            <span className='text-center'>
              Didn't receive the email? Check your Spam folder, it may have been caught by a filter. <br />
              if you still don't see it, you can <a href="#" className='text-pink-500'>resend the confirmation email</a>
            </span>
            <p>Wrong email address? <a href="" className='text-pink-500'>Change it.</a></p>
          </div>
        </div>
      </div>
      </div>
      <VerifYfoot/>
    </div>
  )
}

export default VerificationPage