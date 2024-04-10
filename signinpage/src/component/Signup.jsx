import {React, useState} from "react";
import { Link } from "react-router-dom";
import SignupImg from "./SignupImg";

const Signup = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isFormValid = () => {
    return name && username && email && password && termsAccepted;
  };

  return (
    <>
      <div className="main flex gap-32 bg-white h-screen md:gap-28">
        <div className="img-sec flex flex-col w-[48%] md:w-[43%] h-full xs:hidden md:block">
          <SignupImg />
        </div>

        <div className="singnUpform flex flex-col text-black w-full h-full">
          <div className=" flex flex-row-reverse w-full mr-8 p-7 xs:justify-center xs:items-center xs:p-4
          lg:justify-start lg:items-start">
            <p>
              Already a member? <a href="#"> Sign in</a>
            </p>
          </div>
          <form className=" flex flex-col items-center justify-center">
            <div className=" flex flex-col gap-12 w-2/4 xs:gap-6 xs:w-full xs:p-5 sm:gap-8 md:gap-10
            lg:w-2/4 ">
            <div>
              <h2 className="text-4xl font-bold xs:text-xl vsm:text-2xl md:text-3xl"> Sign up to Dribbble</h2>
            </div>
            <div className=" flex flex-col gap-6 md:gap-4">
            <div className=" flex flex-wrap gap-4 xs:w-full lg:gap-10">
              <div className=" flex flex-col xs:w-full lg:w-44">
                <label
                  for="inputname"
                  class="block text-black font-bold text-sm"
                >
                  Name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-[13rem] xs:w-full rounded-md py-1.5 p-5  outline-none ring-gray-100 focus:text-gray-700
                    xs:placeholder:text-sm xs:p-2 md:w-96 lg:w-[13rem] "
                  style={{backgroundColor:"#E8E8E8"}}/>
                </div>
              </div>
              <div className=" flex flex-col xs:w-full lg:w-44">
                <label
                  for="inputname"
                  class="block text-black font-bold text-sm"
                >
                  Username
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    required
                    placeholder="Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-[13rem] xs:w-full rounded-md py-1.5 p-5 outline-none ring-gray-100 focus:text-gray-700
                    xs:placeholder:text-sm xs:p-2 md:w-96 lg:w-[13rem]"
                    style={{backgroundColor:"#E8E8E8"}}/>
                </div>
              </div>
            </div>
            <div className=" flex flex-col">
                <label
                  for="email"
                  class="block text-black font-bold text-sm"
                >
                  Email
                </label>
                <div class="mt-2">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md py-1.5 p-5 outline-none ring-gray-100 focus:text-gray-700
                    xs:placeholder:text-sm xs:p-2 md:w-96 lg:w-full"
                    style={{backgroundColor:"#E8E8E8"}}/>
                </div>
              </div>
            <div className=" flex flex-col">
                <label
                  for="email"
                  class="block text-black font-bold text-sm"
                >
                  Password
                </label>
                <div class="mt-2">
                  <input
                    type="password"
                    required
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md py-1.5 p-5 outline-none ring-gray-100 focus:text-gray-700
                     xs:placeholder:text-sm xs:p-2 md:w-96 lg:w-full"
                    style={{backgroundColor:"#E8E8E8"}}/>
                </div>
              </div>
              <div className=" flex items-start">
              <input type="checkbox" required 
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="size-8 bg-transparent cursor-pointer lg:size-6" 
              style={{backgroundColor:"#E8E8E8"}} />
              <p className=" xs:text-sm">Creating a account means you're okay with our <a href="#">Terms of Services Privacy Policy</a>
              and our default <a href="#">Notifiaction Settings</a></p>
              </div>
              <div className=" lg:flex xs:flex xs:items-center xs:justify-center md:items-start md:justify-start">
                <Link to="/createpf"><button className=" bg-pink-500 text-white px-8 xs:px-2 xs:w-40 vsm:w-64 
                sm:w-80 md:w-36
                lg:w-48"
                disabled={!isFormValid()}
                >Create Account</button>
                </Link>
              </div>
            </div>
            <p className=" text-sm text-gray-400 xs:text-xs md:text-sm">This site is Protected by reCAPTCHA and the Google <br />
            <a href="">Privacy Policy</a> and <a href="">terms and Services</a> apply</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
