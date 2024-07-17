import React from "react";
import "../index.css";

function Skills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 pb-20">
        <h1 className="text-center m-5 font-sens  font-medium text-lg md:text-5xl lg:mt-5 lg:mb-8">
          My
          <span className=" font-sora font-extrabold m-2 text-black">
            Skills
          </span>
        </h1>
        <div className=" m-5 flex justify-center items-center flex-wrap">
          <div className=" lg:gap-16 grid md:grid-cols-4 grid-cols-2 gap-5">
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\HTML.svg"
                alt="HTML"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">HTML</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\CSS.svg"
                alt="CSS"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">CSS</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\git.svg"
                alt="GIT"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">GIT</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\tailwindcss.svg"
                alt="TailwindCSS"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">TailwindCSS</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\javascript.svg"
                alt="HTML"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">JavaScript</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\figma.svg"
                alt="HTML"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">Figma</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\react.svg"
                alt="HTML"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">React JS</h3>
            </div>
            <div className="h-40 w-40 border-2 border-black text-center rounded ">
              <img
                className="w-12 h-12 mt-6 inline-block "
                src="src\assets\skills\next-js.svg"
                alt="HTML"
              />
              <h3 className="mt-8 font-sans font-bold text-xl">Next JS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
