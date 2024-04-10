import {React, useState} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const VerifYNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <div className='w-screen'>
      <nav className='flex flex-row xl:justify-between items-center border border-b border-gray-200 vsm:flex-col-reverse md:p-7
       xl:p-3 md:flex-row md:items-center md:justify-center'>
        
        <ul className= {`flex items-center gap-4 ${
            menuOpen ? "flex-col" : "hidden"
          } sm:flex-col vsm:gap-6 md:flex-col md:gap-3 xs:gap-4 lg:flex lg:flex-row`}>
          <a href="#">
            <img src="https://logowik.com/content/uploads/images/dribbble.jpg" className=' w-20 mix-blend-multiply ml-4'/>
            </a> 
            
          <div className={` flex items-center ${menuOpen ? "hidden" : "w-7"} lg:hidden`}>
            <IoSearchOutline className='size-8 text-gray-400 bg-gray-200 pl-2 rounded-s-md '/>
            <input type="search" placeholder='Search' className=' placeholder:text-sm placeholder w-24 bg-gray-200 outline-none p-1 rounded-e-md '/>
          </div>

          <a href='#'><li className='p-3'>Inspiration</li></a>
          <a href='#'><li className='p-3'>Find Work</li></a>
          <a href='#'><li className='p-3'>Learn Design</li></a>
          <a href='#'><li className='p-3'>Go Pro</li></a>
          <a href='#'><li className='p-3'>Hire Designers</li></a>
        </ul>
        <div className='flex items-center gap-4'>
          <div className={`flex items-center xs:hidden lg:flex`}>
          <IoSearchOutline className='size-8 text-gray-400 bg-gray-200 pl-2 rounded-s-md'/>
          <input type="search" placeholder='Search' className=' placeholder:text-sm placeholder w-24 bg-gray-200 outline-none p-1 rounded-e-md'/>
          </div>
          <IoBagRemoveSharp/>
          <FcBusinessman/>
          <button className="bg-pink-500 text-white p-1 w-20 mr-10 xs:text-xs xl:text-base">Upload</button>
        {menuOpen ? (
            <IoMdClose
              className="size-5 cursor-pointer md:flex lg:hidden"
              onClick={handleMenuClick}
            />
          ) : (
            <HiOutlineMenu
              className="size-5 md:flex lg:hidden cursor-pointer xs:size-4"
              onClick={handleMenuClick}
            />
          )}
        </div>
        
      </nav>
      </div>
    </>
  )
}

export default VerifYNav