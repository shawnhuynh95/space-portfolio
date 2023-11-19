import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  desc: string;
}

const ProjectCard = ({ src, title, desc }: Props) => {
  return (
    <div className="relative overflow-hidden shadow-lg rounded-lg border border-[#2A0E61] cursor-pointer">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div 
        className="relative p-4"
      >
        <h2 className="bold-24 text-white">{title}</h2>
        <p className="regular-16 text-gray-300 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
