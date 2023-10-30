import React from "react";
import { portrait, curly_pointer } from "../assets";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-full mx-auto flex sm:py-40 py-40 md:px-20 sm:px-20 px-6">
      <div className="w-fit h-fit grid grid-cols-1 sm:grid-cols-5 auto-rows-auto sm:grid-rows-2 text-warm-gray">
        <div className="flex flex-col sm:col-span-3 sm:items-start items-center sm:p-6 p-2">
          <h1 className="sm:mt-auto font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Lin Jia Yuan
          </h1>
        </div>
        <div className="flex sm:row-span-4 sm:col-span-2 items-center justify-center">
          <div className="relative inline-block">
            <img
              src={portrait}
              className="sm:w-auto w-60 z-10"
              alt="Portrait of Lin Jia Yuan"
            />
            <div className="absolute sm:right-0 sm:left-auto left-0 h-10 w-10 flex items-center justify-center sm:translate-x-14 -translate-x-10 top-[50%]">
              <div className="grid grid-rows-3 md:h-60 h-40">
                <a href="">
                  <i class="ri-instagram-line text-black sm:text-4xl text-2xl cursor-pointer"></i>
                </a>
                <a href="">
                  <i class="ri-linkedin-box-line text-black sm:text-4xl text-2xl cursor-pointer"></i>
                </a>
                <a href="">
                  <i class="ri-github-fill text-black sm:text-4xl text-2xl cursor-pointer"></i>
                </a>
              </div>
            </div>
            <div class="absolute inset-0 border-2 border-black translate-x-3 translate-y-3 z-[5]"></div>
            <div className="box-border h-5 w-5 rotate-[-30deg] bg-[#e28743] -translate-x-[10px] top-[10%] absolute">
              <div className="box-border h-5 w-5 -translate-x-1 -translate-y-1 border-2 border-solid border-black relative"></div>
            </div>
            <div className="box-border w-1/5 sm:rotate-[170deg] rotate-[90deg] sm:-left-[20%] sm:top-[30%] sm:bottom-auto -bottom-[16%] right-[35%] absolute">
              <img src={curly_pointer} alt="curly_pointer" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 sm:py-0 sm:p-6 sm:mr-10 p-16 lg:text-sm text-xs sm:text-left text-center">
          <p>
            <span className="font-bold text-black-200 bg-gradient-to-r from-[#a1a1a3] to-transparent">
              Backend developer,&nbsp;
            </span>
            <span className="bg-transparent">
              well-versed in server-side technologies and database management, I
              excel in crafting robust and efficient systems that power the web.
              My expertise ensures top-notch performance and reliability for
              every project.
            </span>
          </p>
        </div>
        <div className="flex sm:p-6 sm:items-start sm:justify-start items-center justify-center">
          <div className="flex border h-10 w-10 border-black bg-black items-center justify-center">
            <a href="#about">
              <i class="ri-arrow-drop-down-line text-2xl text-warm-white"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");
