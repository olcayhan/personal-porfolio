"use client";

import useObserver from "@/hooks/useObserver";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface CardProps {
  url: string;
  images: StaticImageData[];
  href?: string;
  languages: string[];
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({
  url,
  images,
  title,
  href,
  languages,
  desc,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const targetRef = useRef(null);
  const show = useObserver(targetRef);

  return (
    <div
      className={`flex flex-col 2xl:flex-row justify-center items-center gap-10 border-[1px] p-10 shadow-2xl transition-all duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      ref={targetRef}
    >
      <div className="flex flex-row justify-center items-center w-full gap-5">
        <button
          disabled={imgIndex <= 0}
          onClick={() => {
            imgIndex > 0 && setImgIndex(imgIndex - 1);
          }}
          className={`
          ${imgIndex <= 0 && "opacity-40"}
            border-[1px]
           border-neutral-700 
            p-1 
            rounded-md 
            bg-transparent`}
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <Image
          src={images[imgIndex]}
          alt="image"
          className="md:w-96 md:h-96 w-60 h-60 rounded-md"
        />
        <button
          disabled={images.length <= imgIndex + 1}
          onClick={() => {
            setImgIndex(imgIndex + 1);
          }}
          className={`
          ${images.length <= imgIndex + 1 && "opacity-40"}
            border-[1px]
           border-neutral-700 
            p-1 
            rounded-md 
            bg-transparent`}
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-lg font-extrabold">{title}</h1>
        <p className="text-md opacity-90">{desc}</p>
        <div className="flex flex-row items-center justify-center gap-4">
          {languages.map((item, key) => {
            return (
              <p key={key} className="font-extrabold text-md">
                {item}
              </p>
            );
          })}
        </div>

        <div className="flex flex-row items-center justify-center gap-16 p-6">
          <a
            className="flex flex-row gap-2 items-center justify-center hover:underline"
            href={url}
            target="_blank"
          >
            <AiFillGithub size={30} />
            <p className="font-extrabold text-lg">Code</p>
          </a>
          {href && (
            <a
              className="flex flex-row gap-2 items-center justify-center hover:underline"
              href={href}
              target="_blank"
            >
              <BsBoxArrowInUpRight size={30} />
              <p className="font-extrabold text-lg">Demo</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
