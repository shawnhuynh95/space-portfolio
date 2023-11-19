"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="flexCenter flex-col h-full w-full py-20"
      id="projects"
    >
      <motion.h1
        variants={slideInFromTop(0.5)}
        className="bold-28 md:bold-40 xl:bold-64 text-transparent py-20 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
      >
        My Projects
      </motion.h1>
      <motion.div
        variants={slideInFromLeft(1)}
        className="flex flex-col md:flex-row h-full w-full gap-10 px-10"
      >
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
