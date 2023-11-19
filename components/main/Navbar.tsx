import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 md:px-10 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flexBetween m-auto px-[10px]">
        <a href="#about-me" className="flex-1 w-auto h-auto flex items-center">
          <Image
            src="/Navlogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowpin"
          />
          <span className="bold-18 xl:bold-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ml-[10px] hidden lg:block">
            ShawnDev
          </span>
        </a>
        <div className="flex-2 w-auto min-w-[225px] md:w-[350px] lg:w-[500px] h-full flexBetween">
          <div className="text-[14px] md:text-[18px] flexBetween w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-5 py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flexEnd flex-1 gap-2 md:gap-5">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="cursor-pointer h-4 w-4 md:w-6 md:h-6"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
