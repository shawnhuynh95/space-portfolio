"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <motion.div
      initial="hidden"
      // animate="visible"
      whileInView='visible'
      className="flexCenter flex-col w-full h-auto"
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="text-[13px] Welcome-text">
          Think better with Next.js 14
        </h1>
      </motion.div>
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="font-medium text-[30px] text-white mt-[10px] mb-[15px] text-center"
      >
        Making apps with modern technologies
      </motion.h1>
      <motion.p
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mt-[10px] mb-[40px] text-center"
      >
        Never miss a task, deadline on idea
      </motion.p>
    </motion.div>
  );
};

export default SkillText;
