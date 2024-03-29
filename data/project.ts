import { StaticImageData } from "next/image";

import quizlang from "../public/images/quizlang/quizlang.webp";
import quizlang2 from "../public/images/quizlang/quizlang2.webp";
import quizlang3 from "../public/images/quizlang/quizlang3.webp";
import quizlang4 from "../public/images/quizlang/quizlang4.webp";

import todoapp from "../public/images/todoapp/todoapp.webp";
import todoapp2 from "../public/images/todoapp/todoapp2.webp";
import todoapp3 from "../public/images/todoapp/todoapp3.webp";
import todoapp4 from "../public/images/todoapp/todoapp4.webp";

import movieapp from "../public/images/movieapp/movieapp.webp";
import movieapp2 from "../public/images/movieapp/movieapp2.webp";
import movieapp3 from "../public/images/movieapp/movieapp3.webp";
import movieapp4 from "../public/images/movieapp/movieapp4.webp";

import billtrack from "../public/images/bill-track/bill-track.webp";
import billtrack2 from "../public/images/bill-track/bill-track2.webp";
import billtrack3 from "../public/images/bill-track/bill-track3.webp";
import billtrack4 from "../public/images/bill-track/bill-track4.webp";


import ecommerce1 from "../public/images/e-commerce/ecomm1.webp";
import ecommerce2 from "../public/images/e-commerce/ecomm2.webp";
import ecommerce3 from "../public/images/e-commerce/ecomm3.webp";

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
    images: [ecommerce1, ecommerce2, ecommerce3],
    url: "https://github.com/olcayhan/e-commerce",
    href: "https://e-commerce-demo-project-v1.vercel.app/",
    languages: ["Next.js", "Chakra.UI"],
    desc: "E-Commerce App is a web application for online shopping. It allows users to browse products, add them to the cart, and purchase them. The app also includes a user authentication system.",
    title: "E-Commerce App",
  },
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
  }
];
