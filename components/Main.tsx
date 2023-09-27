"use client";
import Image from "next/image";
import mypic from "../public/images/image.webp";
import useObserver from "@/hooks/useObserver";

import { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useTranslations } from "next-intl";

export default function Main() {
  const targetRef = useRef(null);
  const show = useObserver(targetRef);

  const t = useTranslations("Main");
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center"
    >
      <div
        className={`flex flex-col 2xl:flex-row justify-center items-center gap-10 ${
          show ? "opacity-100" : "opacity-0"
        } transition-all duration-500`}
        ref={targetRef}
      >
        <div className="flex flex-row justify-center items-center w-full">
          <div className="w-72 h-72 rounded-full bg-blue-300 relative">
            <Image src={mypic} alt="image" className="w-72 h-72 rounded-full" />
            <div className="border-[4px] border-black rounded-full w-full h-full absolute top-0 left-0 animate-waving-hand"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl font-extrabold text-center">{t("title")}</h1>
          <p className="py-4 text-md opacity-80 text-center">{t("content")}</p>
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
