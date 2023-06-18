import Image from "next/image";
import pic from "../public/images/about.png";
import { AiFillGithub } from "react-icons/ai";

export default function Card() {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center items-center gap-10 border-[1px] p-10 shadow-2xl">
      <div className="flex flex-row justify-center items-center w-full">
        <Image src={pic} alt="image" className="w-72 h-72 rounded-md" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-lg font-extrabold">CAR RENTAL</h1>
        <p className="text-md opacity-90">
          I'm Olcay Han, I am currently a Computer Engineering student at
          Bandırma 17 Eylül University in Turkey. I'm passionate about Web
          Development, I am coding with React, Javascript, Node.js and Python.
        </p>
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="font-extrabold text-md">React</p>
          <p className="font-extrabold text-md">React</p>
        </div>

        <div className="flex flex-row items-center justify-center gap-16 p-6">
          <a
            className="flex flex-row gap-2 items-center justify-center hover:underline"
            href="https://github.com/olcayhan"
          >
            <AiFillGithub size={30} />
            <p className="font-extrabold text-lg">Code</p>
          </a>
          <a
            className="flex flex-row gap-2 items-center justify-center hover:underline"
            href="https://github.com/olcayhan"
          >
            <AiFillGithub size={30} />
            <p className="font-extrabold text-lg">Code</p>
          </a>
        </div>
      </div>
    </div>
  );
}
