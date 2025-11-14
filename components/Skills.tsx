"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SkillData } from "@/data/skills";
import { useTranslations } from "next-intl";
import useObserver from "@/hooks/useObserver";

const Skills = () => {
  const t = useTranslations("Skills");
  const targetRef = useRef(null);
  const show = useObserver(targetRef);

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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20 dark:hover:bg-white/20 group-hover:shadow-glow">
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
