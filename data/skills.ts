import { StaticImageData } from "next/image";

import angular from "@/public/icons/angular.svg";
import react from "@/public/icons/react.svg";
import nodejs from "@/public/icons/nodejs.svg";
import nextjs from "@/public/icons/nextjs.svg";
import javascript from "@/public/icons/javascript.svg";
import python from "@/public/icons/python.svg";
import html from "@/public/icons/html.svg";
import css from "@/public/icons/css.svg";
import bootstrap from "@/public/icons/bootstrap.svg";
import sass from "@/public/icons/sass.svg";

export const imageBoxSize = 300;
export const imageBoxSizeMobile = 120;

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
    src: html,
    alt: "html",
  },
  {
    src: css,
    alt: "css",
  },
  {
    src: bootstrap,
    alt: "bootstrap",
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
    src: html,
    alt: "html",
  },
  {
    src: css,
    alt: "css",
  },
  {
    src: bootstrap,
    alt: "bootstrap",
  },
  {
    src: sass,
    alt: "sass",
  },
];
