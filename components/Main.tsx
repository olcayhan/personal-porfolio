'use client'
import {useRef} from 'react';
import Image from "next/image";
import mypic from "../public/images/image.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import useObserver from '@/hooks/useObserver';

export default function Main() {
  const targetRef = useRef(null);
  const show = useObserver(targetRef)
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center w-4/6 mx-auto min-h-screen py-16"
    >
      <div className={`flex flex-col 2xl:flex-row justify-center items-center gap-10 ${show ? 'opacity-100' : 'opacity-0'} transition-all duration-500`} ref={targetRef}>
        <div className="flex flex-row justify-center items-center w-full">
          <Image src={mypic} alt="image" className="w-72 h-72 rounded-md" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl font-extrabold text-center">
            Full Stack Developer
          </h1>
          <p className="py-4 text-md opacity-80 text-center">
            I&apos;m Olcay Han. I&apos;m passionate about Web Development
          </p>
          <div className="flex flex-row items-center justify-center gap-8 py-4">
            <a
              className="flex flex-row gap-2 items-center justify-center hover:underline"
              href="https://www.linkedin.com/in/olcayhan/"
              target="_blank"
            >
              <AiFillLinkedin size={30} />
              <p className="font-semibold transition">Linkedin</p>
            </a>
            <a
              className="flex flex-row gap-2 items-center justify-center hover:underline"
              href="https://github.com/olcayhan"
              target="_blank"
            >
              <AiFillGithub size={30} />
              <p className="font-semibold">Github</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
