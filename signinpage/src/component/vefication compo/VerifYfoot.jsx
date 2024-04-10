import React from 'react'
import { CiBasketball } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const VerifYfoot = () => {
  return (
    <>
    <div className=' flex flex-row flex-wrap justify-evenly md:items-baseline vsm:items-center bg-gray-50 pt-20'>
        <div className=' flex flex-col w-[15%] gap-7 xs:w-36'>
            <img src="https://logowik.com/content/uploads/images/dribbble.jpg" className=' w-20 mix-blend-multiply' />
            <span>Dribble is the world's leading community for
                creatives to share, grow ,and get hired.
            </span>
            <div className=' flex flex-wrap gap-3'>
                <CiBasketball className=' size-4'/>
                <FaTwitter className=' size-4'/>
                <FaFacebook className=' size-4'/>
                <FaInstagram className=' size-4'/>
                <FaPinterest className=' size-4'/>

            </div>
        </div>
        <div className=' flex flex-col text-sm gap-5'>
            <a href="#" className='foot font-bold text-sm'>For designer</a>
            <a href="#" className='foot'>Go Pro!</a>
            <a href="#" className='foot'>Explore design work</a>
            <a href="#" className='foot'>Design blog</a>
            <a href="#" className='foot'>Overtime podcast</a>
            <a href="#" className='foot'>Playoffs</a>
            <a href="#" className='foot'>Weekly Warm-Up</a>
        </div>
        <div className=' flex flex-col text-sm gap-5'>
        <a className='foot font-bold text-sm'>Hire designers</a>
            <a href="#" className=' foot'>Post a job opening</a>
            <a href="#" className=' foot'>Post a freelance project</a>
            <a href="#" className=' foot'>Search for designers</a>
            <a href="#"  className='foot font-bold'>Brands</a>
            <a href="#" className=' foot'>Advertis with us</a>
        </div>
        <div className=' flex flex-col text-sm gap-5'>
            <a href="#" className='foot font-bold text-sm'>Company</a>
            <a href="#" className='foot'>About</a>
            <a href="#" className='foot'>Careers</a>
            <a href="#" className='foot'>Support</a>
            <a href="#" className='foot'>Media Kit</a>
            <a href="#" className='foot'>testimonials</a>
            <a href="#" className='foot'>API</a>
            <a href="#" className='foot'>Terms of service</a>
            <a href="#" className='foot'>Privacy policy</a>
            <a href="#" className='foot'>Cookie policy</a>
        </div>
        
        <div className=' flex flex-col text-sm gap-5'>
            <a href="#" className='foot font-bold text-sm'>Directories</a>
            <a href="#" className='foot'>Design jobs</a>
            <a href="#" className='foot'>Designers for hire</a>
            <a href="#" className='foot'>Freelance designers for hire</a>
            <a href="#" className='foot'>Tags</a>
            <a href="#" className='foot'>Places</a>
            <a href="#" className='foot font-bold'>Design assets</a>
            <a href="#" className='foot'>Drrible Marketplace</a>
            <a href="#" className='foot'>Creative Market</a>
            <a href="#" className='foot'>Fontspring</a>
            <a href="#" className='foot'>Font Squirrel</a>
        </div>

        <div className=' flex flex-col text-sm gap-5'>
            <a href="#"  className='foot font-bold text-sm'>Design Resources</a>
            <a href="#" className='foot'>Freelancing</a>
            <a href="#" className='foot'>Design Hiring</a>
            <a href="#" className='foot'>Design Portfolio</a>
            <a href="#" className='foot'>Design Education</a>
            <a href="#" className='foot'>Creative Process</a>
            <a href="#" className='foot'>Design Industry Trends</a>
        </div>
    </div>
    </>
  )
}

export default VerifYfoot