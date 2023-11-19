"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      whileInView="visible"
      className="h-full w-full flexCenter px-20 mt-40 z-20"
    >
      <div className="h-full w-full flexCenter flex-col text-center md:items-start md:text-start">
        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="text-[13px] Welcome-text">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 bold-28 md:bold-40 xl:bold-64 text-white w-auto h-auto max-w-[600px]"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg text-[16px] text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center cursor-pointer rounded-lg max-w-[200px] min-w-[150px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="md:w-full h-full flexCenter hidden md:block"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          width={650}
          height={650}
          className="hidden md:block"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
