import { useState } from "react";
import BtnSubscibe from "./btnSubscibe";
const Close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

// console.log(App);

export default function SectionPath1() {
  const [allume, setAllume] = useState(false);

  const handlerCliked = () => {
    setAllume(!allume);
  };
  return (
    <>
      <div className=" ">
        <img
          src="https://assets-global.website-files.com/62a8969da1ab56329dc8c41e/6560c4c01c95b74eceababc9_GitHub%20Actions.png"
          alt=""
        />
        {/* <div className="w-[22rem] h-[20rem] bg-cyan-800"></div> */}
        <button
          onClick={handlerCliked}
          className=" w-16 h-16 p-2 bg-black bg-opacity-40 backdrop-blur-sm rounded-full  absolute translate-x-[10rem] -translate-y-[10rem]"
        >
          <img
            src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec5e6ff65f90c6429ec47b_Vector.svg"
            alt=""
            className="translate-x-4 -translate-y-0 object-cover "
          />
        </button>
      </div>
      {allume && (
        <>
          <div className="bg-black bg-opacity-65 absolute m-auto cursor-pointer w-[100%] h-[814%] left-[-0rem] top-[0rem] bottom-[0rem] desktop:h-[814%] desktop:w-[100%]">
            <div className="w-[60rem] h-[20rem]  fixed p-4 right-[20rem] left-[20rem] top-[10rem] bottom-[10rem] desktop:left-[10rem]">
              <button
                onClick={handlerCliked}
                className="rounded-full p-1 absolute right-44 z-50 bg-white bg-opacity-30  text-gray-600 text-opacity-60 m-5 hover:bg-white"
              >
                {Close}
              </button>
              <p>
                <video width="770" height="600" controls autoPlay className="rounded-2xl">
                  <source src={VideoKode} type="video/mp4" />
                </video>
              </p>
            </div>
          </div>
        </>
      )}

      <SectionText />
    </>
  );
}

const SectionText = () => {
  return (
    <>
      <h1 className="text-lg text-black my-4 font-Poppins font-medium">
        Get access to KodeKloud’s all premium courses.
      </h1>
      <p className="text-lg text-gray-400 mb-3">
        You’ll get access to75+premium courses,500+hands-on labs,
        and65+playgrounds.
      </p>

      <BtnSubscibe />
      <div className="block w-[26rem]">
        <p className="text-black text-base mt-4 text-center  ">
          Already Subscribed?
          <a href="#" className="text-cyan-500">
            Log in
          </a>{" "}
        </p>
      </div>
    </>
  );
};
