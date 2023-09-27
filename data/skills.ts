import { StaticImageData } from "next/image";

import angular from "@/public/icons/angular.webp";
import react from "@/public/icons/react.webp";
import nodejs from "@/public/icons/nodejs.webp";
import nextjs from "@/public/icons/nextjs.webp";
import javascript from "@/public/icons/javascript.webp";
import python from "@/public/icons/python.webp";
import sass from "@/public/icons/sass.webp";

export const imageBoxSize = 200;
export const imageBoxSizeMobile = 100;

export type skillType = {
  src: StaticImageData;
  alt: string;
};

export const SkillData: skillType[] = [
  {
    src: javascript,
    alt: "javascript",
  },
  {
    src: angular,
    alt: "angular",
  },
  {
    src: python,
    alt: "python",
  },
  {
    src: react,
    alt: "react",
  },
  {
    src: nextjs,
    alt: "nextjs",
  },
  {
    src: nodejs,
    alt: "nodejs",
  },
  {
    src: sass,
    alt: "sass",
  },
  {
    src: javascript,
    alt: "javascript",
  },
  {
    src: angular,
    alt: "angular",
  },
  {
    src: python,
    alt: "python",
  },
  {
    src: react,
    alt: "react",
  },
  {
    src: nextjs,
    alt: "nextjs",
  },
  {
    src: nodejs,
    alt: "nodejs",
  },
  {
    src: sass,
    alt: "sass",
  },
];
