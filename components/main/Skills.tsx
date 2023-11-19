import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9" }}
      className="flexCenter flex-col h-full relative gap-3 overflow-hidden pb-50 py-20"
    >
      <SkillText />
      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, i) => (
          <SkillDataProvider
            key={i}
            index={i}
            src={image.Image}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, i) => (
          <SkillDataProvider
            key={i}
            index={i}
            src={image.Image}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, i) => (
          <SkillDataProvider
            key={i}
            index={i}
            src={image.Image}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, i) => (
          <SkillDataProvider
            key={i}
            index={i}
            src={image.Image}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, i) => (
          <SkillDataProvider
            key={i}
            index={i}
            src={image.Image}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] flexCenter opacity-30 bg-cover absolute">
          <video
            src="/cards-video.webm"
            preload="false"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
