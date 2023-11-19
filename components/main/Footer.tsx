import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";

import { FaYoutube } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent shadow-lg text-gray-200 p-4">
      <div className="flexCenter w-full flex-col m-auto">
        <div className="flex item-center justify-around flex-wrap w-full h-full">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="bold-20">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="bold-20">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="bold-20">About Me</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <MdPlace />
              <span className="text-[15px] ml-[6px]">Ho Chi Minh City</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <HiOutlineDevicePhoneMobile />
              <span className="text-[15px] ml-[6px]">(+84) 961 58 53 58</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <IoMdMail />
              <span className="text-[15px] ml-[6px]">
                huynhlethaiphat@gmail.com
              </span>
            </p>
          </div>
        </div>
        <hr className="w-[400px] md:w-[500px] h-[1px] mt-[20px] mx-auto bg-white" />
        <div className="mt-[10px] text-[15px] text-center">
          &copy; ShawnDev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
