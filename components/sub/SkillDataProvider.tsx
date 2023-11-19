"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  index: number;
};

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  const animatioinDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animatioinDelay }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillDataProvider;
