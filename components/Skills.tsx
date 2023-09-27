"use client";

import React from "react";
import Image from "next/image";

import { SkillData, imageBoxSize, imageBoxSizeMobile } from "@/data/skills";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="flex flex-col justify-center">
      <div className="md:flex hidden flex-col 2xl:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center gap-4 w-full">
          <h1 className="text-blue-600 text-lg font-extrabold">{t("title")}</h1>
          <h1 className="text-3xl font-extrabold">{t("desc")}</h1>
          <div className="flex justify-center items-center p-8 overflow-x-hidden">
            <div
              style={{ width: SkillData.length * imageBoxSize }}
              className="flex flex-row flex-shrink-0 animate-come-back hover:pause"
            >
              {SkillData.map((item, key) => {
                return (
                  <div className="m-auto" key={key}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={imageBoxSize / 2}
                      height={imageBoxSize / 2}
                      className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col 2xl:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center gap-4 w-full">
          <h1 className="text-blue-600 text-lg font-extrabold">{t("title")}</h1>
          <h1 className="text-3xl font-extrabold">{t("desc")}</h1>
          <div className="flex justify-center items-center p-8 overflow-x-hidden">
            <div
              style={{ width: SkillData.length * imageBoxSizeMobile }}
              className="flex flex-row items-center flex-shrink-0 animate-come-back hover:pause"
            >
              {SkillData.map((item, key) => {
                return (
                  <div className="m-auto" key={key}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={imageBoxSizeMobile / 2}
                      height={imageBoxSizeMobile / 2}
                      className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
