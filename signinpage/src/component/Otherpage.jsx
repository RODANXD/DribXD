import {React, useState} from "react";
import design2 from "../assets/design2.png";
import design1 from "../assets/design1.png";
import design3 from "../assets/design3.png";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
const Otherpage = () => {
  const [checkedOption, setCheckedOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setCheckedOption(option);
    setSelectedOption(option);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white text-black h-screen gap-4 ">
        <div className="flex items-start w-full">
        <img src="https://logowik.com/content/uploads/images/dribbble.jpg" className=' w-20 mix-blend-multiply ml-4'/>
        </div>
        <div className=" flex flex-col items-center h-screen gap-6">
          <div className=" flex flex-col gap-3 items-center justify-center">
            <h1 className=" text-4xl font-bold vsm:text-center">What brings you to Dribbble?</h1>
            <div className=" flex items-center">
            <span className=" text-center text-gray-400 vsm:text-sm">
              Select the option that best describe you. Don't worry, you can
              explore other option later
            </span>
            </div>
          </div>
          <div className=" flex flex-row flex-wrap items-center justify-center gap-3">
            <div className=" flex flex-col">
            <div className="w-80 h-full p-3 flex flex-col items-center justify-center gap-3 cursor-pointer border-2 rounded-xl border-gray-500 hover:border-pink-600 duration-500">
              <img src={design1}  className={`w-60 rounded-xl duration-500 ${
          selectedOption === "option1" ? "translate-y-[-80px]" : ""
        }`}/>
              <span className={` font-bold text-lg text-center duration-500 px-10 ${selectedOption==="option1" ? "translate-y-[-80px]" : ""}`}>I'm designer looking to share my work</span>
              <p className={`text-center text-sm duration-500 text-gray-400 px-10 ${selectedOption==="option1" ? "block translate-y-[-80px]" : "hidden"}`}>As a designer looking to share my work, Dribbble stands out as the platform where over you can share your work.</p>
              <Checkbox checkedOption={checkedOption} handleCheckboxChange={handleCheckboxChange} option="option1" />
            </div>
            </div>
            <div className=" flex flex-col">
            <div className="w-80 h-full p-3 flex flex-col items-center justify-center gap-3 cursor-pointer border-2 rounded-xl border-gray-500 hover:border-pink-600 duration-500">
              <img src={design3} className={`w-60 rounded-xl duration-500 ${
          selectedOption === "option2" ? "translate-y-[-80px]" : ""
        }`}/>
              <span className={` font-bold text-lg text-center duration-500 px-10 ${selectedOption==="option2" ? "translate-y-[-80px]" : ""}`}>I'm looking to hire a designer</span>
              <p className={`text-center text-sm duration-500 text-gray-400 px-10 ${selectedOption==="option2" ? "block translate-y-[-80px]" : "hidden"}`}>
I'm looking to hire a designer from Dribbble, the leading source where over 7 million designers have been hired from the vast community.</p>
              <Checkbox checkedOption={checkedOption} handleCheckboxChange={handleCheckboxChange} option="option2" />
            </div>
            </div>
            <div className=" flex flex-col">
            <div className="w-80 h-full p-3 flex flex-col items-center justify-center gap-3 cursor-pointer border-2 rounded-xl border-gray-500 hover:border-pink-600 duration-500">
              <img src={design2} className={`w-60 rounded-xl duration-500 ${
          selectedOption === "option3" ? "translate-y-[-80px]" : ""
        }`} />
              <span className={` font-bold text-lg text-center duration-500 px-10 ${selectedOption==="option3" ? "translate-y-[-80px]" : ""}`}>I'm designer for design inspiration</span>
              <p className={`text-center text-sm duration-500 text-gray-400 px-10 ${selectedOption==="option3" ? "block translate-y-[-80px]" : "hidden"}`}>with ovver 7 million shots from the vast community of designers, Dribbles is the leading source for design inspiration</p>
              <Checkbox checkedOption={checkedOption} handleCheckboxChange={handleCheckboxChange} option="option3" />
            </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" flex flex-col gap-3 items-center">
              <span className=" font-bold">Anything else? You can select multiple</span>
              <Link to= "/emailverify"><button className="w-52 bg-pink-500 text-white p-1 xs:w-40 lg:w-52">Finish</button></Link>
              <span className=" text-gray-400 cursor-pointer">or Press RETURN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otherpage;
