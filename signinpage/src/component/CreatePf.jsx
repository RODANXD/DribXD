import React, { useState } from "react";
import { PiCameraPlusFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CreatePf = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAvatarClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setMenuOpen(false); // Close the default avatars menu
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white text-black h-screen gap-12 md:gap-8">
        <div className="flex items-start w-full">
        <img src="https://logowik.com/content/uploads/images/dribbble.jpg" className=' w-20 mix-blend-multiply ml-4'/>
        </div>

        <div className="h-full flex items-center flex-col gap-12 sm:gap-8 lg:gap-10">
          <div className="flex flex-col items-start justify-center xs:text-center xs:items-center xl:items-start">
            <h1 className="text-4xl font-semibold xs:text-lg vsm:text-xl sm:text-2xl">
              Welcome! Let's create your profile
            </h1>
            <span className="vsm:px-5 sm:text-lg xl:px-0 xs:text-wrap">Let others get to know you better! You can do these later</span>
          </div>
          <div className="flex flex-col items-start w-full gap-7 xs:items-center xl:items-start">
            <span className="text-2xl font-bold xs:text-base vsm:text-lg md:text-xl">Add an avatar</span>
            <div className="flex items-center gap-9 xs:flex-col md:flex-row lg:gap-16 xl:gap-9">
              <div className="flex items-center justify-center size-40 rounded-[100%] outline-dashed outline-gray-400 bg-white xs:size-24 vsm:size-28 sm:size-32 md:size-36 xl:size-40">
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="w-full h-full rounded-full" />
                ) : (
                  <PiCameraPlusFill className="size-8 xs:size-4 text-gray-400 sm:size-6" />
                )}
              </div>
              <div className="flex flex-col gap-6 xs:items-center">
                <input
                  type="file"
                  required
                  aria-required="true"
                  accept="image/*"
                  className="file:cursor-pointer file:bg-white file:text-black file:border file:outline-none file:px-4 file:py-2 file:font-semibold file:border-gray-300 file:rounded-lg xs:w-28 xl:w-[7.5rem]"
                  onChange={handleImageChange}
                />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center flex-row gap-2 font-semibold text-gray-500 cursor-pointer" onClick={toggleMenu}>
                    <IoIosArrowForward />
                    <span className="font-semibold text-gray-500 cursor-pointer">Or choose one of our defaults</span>
                  </div>
                  <div className={menuOpen ? "flex flex-wrap gap-5" : "hidden"}>
                    <div className="flex items-center justify-center size-20 rounded-[100%] bg-white cursor-pointer" onClick={() => handleAvatarClick("https://storage.googleapis.com/pai-images/3da0144354ee48bf822d37c996c89c3e.jpeg")}>
                      <img src="https://storage.googleapis.com/pai-images/3da0144354ee48bf822d37c996c89c3e.jpeg" alt="" className="w-full h-full rounded-full" />
                    </div>
                    <div className="flex items-center justify-center size-20 rounded-[100%] bg-white cursor-pointer" onClick={() => handleAvatarClick("https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg")}>
                      <img src="https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg" alt="" className="w-full h-full rounded-full" />
                    </div>
                    <div className="flex items-center justify-center size-20 rounded-[100%] bg-white cursor-pointer" onClick={() => handleAvatarClick("https://static1.personality-database.com/profile_images/c4e920c22cf2452daa6ce72206bf3c53.png")}>
                      <img src="https://static1.personality-database.com/profile_images/c4e920c22cf2452daa6ce72206bf3c53.png" alt="" className="w-full h-full rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full xs:items-center md:items-start lg:gap-10">
              <span className="text-xl font-bold md:text-lg xl:text-xl">Add your location</span>
              <input
                type="search"
                required
                aria-required="true"
                placeholder="Enter a location"
                className="bg-white outline-none w-full border-b border-b-gray-400 py-2 xs:w-36 sm:w-44 sm:placeholder:text-center md:w-full xl:placeholder:text-start"
              />
              <Link to="/createpf2"><button className="w-52 bg-pink-500 text-white p-1 xs:w-40 lg:w-52">Next</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePf;
