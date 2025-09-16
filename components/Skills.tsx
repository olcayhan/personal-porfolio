"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { SkillData } from "@/data/skills";
import { useTranslations } from "next-intl";
import useObserver from "@/hooks/useObserver";

const Skills = () => {
  const t = useTranslations("Skills");
  const targetRef = useRef(null);
  const show = useObserver(targetRef);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Angular", "Node.js"],
    },
    {
      title: "Language",
      skills: ["Javascript", "Typescript", "Python"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Google Cloud"],
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6">
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ref={targetRef}
      >
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light animate-fade-in-up text-navy dark:text-lightBlue" style={{ animationDelay: '200ms' }}>
            {t("desc")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-glass hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-white">{category.title}</h3>
              </div>
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/5 dark:bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 group/skill"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-navy rounded-full group-hover/skill:scale-150 transition-transform duration-300" />
                  <span className="text-sm sm:text-base dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300">
                    {skill}
                  </span>
                  {hoveredSkill === skill && (
                    <div className="ml-auto">
                      <div className="w-4 sm:w-6 h-0.5 sm:h-1 bg-gradient-to-r bg-navy rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Technology Icons Carousel */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-navy/10 p-4 sm:p-6 lg:p-8">
            {/* Scrolling Icons */}
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 animate-come-back hover:pause">
              {[...SkillData, ...SkillData].map((skill, index) => (
                <div
                  key={`${skill.alt}-${index}`}
                  className="flex-shrink-0 group relative cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20 dark:hover:bg-white/20 group-hover:shadow-glow">
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
