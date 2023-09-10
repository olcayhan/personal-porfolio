import { StaticImageData } from "next/image";

import quizlang from "../public/images/quizlang/quizlang.png";
import quizlang2 from "../public/images/quizlang/quizlang2.png";
import quizlang3 from "../public/images/quizlang/quizlang3.png";
import quizlang4 from "../public/images/quizlang/quizlang4.png";

import todoapp from "../public/images/todoapp/todoapp.png";
import todoapp2 from "../public/images/todoapp/todoapp2.png";
import todoapp3 from "../public/images/todoapp/todoapp3.png";
import todoapp4 from "../public/images/todoapp/todoapp4.png";

import movieapp from "../public/images/movieapp/movieapp.png";
import movieapp2 from "../public/images/movieapp/movieapp2.png";
import movieapp3 from "../public/images/movieapp/movieapp3.png";
import movieapp4 from "../public/images/movieapp/movieapp4.png";

import billtrack from "../public/images/bill-track/bill-track.png";
import billtrack2 from "../public/images/bill-track/bill-track2.png";
import billtrack3 from "../public/images/bill-track/bill-track3.png";
import billtrack4 from "../public/images/bill-track/bill-track4.png";

import calc1 from "../public/images/calculator/calc1.png";
import calc2 from "../public/images/calculator/calc2.png";
import calc3 from "../public/images/calculator/calc3.png";
import calc4 from "../public/images/calculator/calc4.png";

export type Project = {
  images: StaticImageData[];
  url: string;
  href: string;
  languages: string[];
  desc: string;
  title: string;
};

export const projects: Project[] = [
  {
    images: [quizlang, quizlang2, quizlang3, quizlang4],
    url: "https://github.com/olcayhan/quizlet-clone",
    href: "https://quizlang.vercel.app/",
    languages: ["Next.js", "Tailwind"],
    desc: "Quizlet Clone is a web application that resembles the original Quizlet platform, allowing users to create, share, and learn digital flashcards. This document outlines the necessary steps to run, deploy, and use the Quizlet Clone project.",
    title: "Quizlet Clone",
  },
  {
    images: [todoapp, todoapp2, todoapp3, todoapp4],
    url: "https://github.com/olcayhan/TodoApp",
    href: "https://todoapp-demo-olcayhank.vercel.app/",
    languages: ["React.js", "Tailwind", "Node.js"],
    desc: "TodoApp is a simple todo list application. With this app, you can easily keep track of your daily tasks, mark completed tasks, and add new tasks.",
    title: "TodoApp",
  },
  {
    images: [movieapp, movieapp2, movieapp3, movieapp4],
    url: "https://github.com/olcayhan/movie-app",
    href: "https://movieapp-demo.vercel.app/",
    languages: ["Angular.js", "Bootstrap", "SCSS"],
    desc: "Movie App is a web application that allows users to discover new movies, get information about films, and mark movies they want to watch.",
    title: "Movie App",
  },
  {
    images: [billtrack, billtrack2, billtrack3, billtrack4],
    url: "https://github.com/olcayhan/bill-tracking",
    href: "https://bill-track.vercel.app/",
    languages: ["React.js", "Bootstrap", "CSS", "Node.js"],
    desc: "This repository contains a Bill Tracking App, designed to help users manage and keep track of their bills and expenses effectively.",
    title: "Bill Tracking Service",
  },
  {
    images: [calc1, calc2, calc3, calc4],
    url: "https://github.com/olcayhan/calculatorApp",
    href: "https://calculator-app-demo.vercel.app/",
    languages: ["Angular", "SCSS", "Bootstrap"],
    desc: "This is a simple calculator app that allows you to perform basic mathematical operations between two numbers. You can perform addition, subtraction, multiplication, and division operations.",
    title: "Calculator App",
  },
];
