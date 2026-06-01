import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = ({ data }) => {
  const iconMap = {
    react: FaReact,

    node: FaNodeJs,

    mongodb: SiMongodb,

    express: SiExpress,

    code: FaGithub,
  };

  return (
    <>
      <h1 className="text-white text-4xl mx-auto py-10 font-bold max-w-[200px] mx-auto">My Skills</h1>
      <div className="max-w-[90%] mx-auto flex flex-col gap-5 overflow-x-scroll hide-scrollbar py-5 justify-between mb-10">
        <div className="flex flex-row gap-5">
          {data &&
            data.map((skill) => {
              console.log(skill);
              const Icon = iconMap[skill.icon] ? iconMap[skill.icon] : "span";
              return (
                <div className="border-1 border-[var(--primary)] rounded-2xl p-5 px-10 min-w-[300px] flex flex-col items-center justify-center bg-gradient-to-r from-[var(--background)] to-[var(--surface)] ">
                  <div className="border-b-1 border-[var(--card-border)] flex flex-col items-center justify-center mb-3 pb-3 w-full gap-3">
                    <span className=" rounded-full p-3  bg-gradient-to-r from-[var(--background)] to-[var(--gradient-end)] shadow-[0_0_20px_var(--primary)]">
                      <Icon className="size-[100px] text-[var(--text-secondary)]" />
                    </span>
                    <span className="text-[var(--primary)] text-2xl">
                      {skill?.title}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 marker:text-[var(--primary)] space-y-2">
                    {skill?.skills.map((item) => {
                      return (
                        <li className="text-[var(--text-secondary)] text-[15px]">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Skills;
