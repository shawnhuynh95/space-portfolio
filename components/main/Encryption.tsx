"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      whileInView="visible"
      className="flexCenter relative flex-col h-full w-full min-h-screen gap-[180px]"
    >
      <motion.div
        className="w-auto h-auto top-0 z-[5]"
        variants={slideInFromTop(0.5)}
      >
        <span className="bold-40 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Performance
          <span className="text-white text-[30px]"> & </span>
          Security
        </span>
      </motion.div>
      <div className="flexCenter flex-col w-auto h-auto z-20">
        <div className="flex flex-col items-center w-auto h-auto group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="Welcome-box px-[15px] py-[4px] mt-[20px] z-20 border border-[#7042f88b] opacity-90">
          <h1 className="Welcome-text text-xs">Encryption</h1>
        </div>
      </div>
      <motion.p
        className="z-[20] bottom-[10px] px-[5px] cursive text-[20px] font-medium text-center text-gray-300"
        variants={slideInFromTop(1.5)}
      >
        Secure your data with end-to-end encryption
      </motion.p>

      <div className="w-full flex items-start justify-center absolute">
        <video
          src="/encryption.webm/"
          preload="false"
          muted
          loop
          autoPlay
          playsInline
          // className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
};

export default Encryption;
