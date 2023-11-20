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
      // style={{ transform: "scale(0.9)" }}
      className="flexCenter flex-col h-full overflow-hidden"
    >
      <SkillText />
      <div className="flex justify-center flex-wrap items-center gap-5 scale-[0.6] lg:scale-[0.8] xl:scale-[0.9]">
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
      <div className="flex justify-center flex-wrap gap-5 items-center scale-[0.6] lg:scale-[0.8] xl:scale-[0.9]">
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
      <div className="flex justify-center flex-wrap gap-5 items-center scale-[0.6] lg:scale-[0.8] xl:scale-[0.9]">
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
      <div className="flex justify-center flex-wrap gap-5 items-center scale-[0.6] lg:scale-[0.8] xl:scale-[0.9]">
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
      <div className="flex justify-center flex-wrap gap-5 items-center scale-[0.6] lg:scale-[0.8] xl:scale-[0.9]">
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
            src="/cards-video.mp4"
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
