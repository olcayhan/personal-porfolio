"use client";
import { useRef } from "react";
import Image from "next/image";
import pic from "../public/images/about.gif";
import useObserver from "@/hooks/useObserver";
import { useTranslations } from "next-intl";
export default function About() {
  const targetRef = useRef(null);
  const show = useObserver(targetRef);
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="flex flex-row justify-center items-center w-4/6 mx-auto min-h-screen py-16 overflow-hidden"
    >
      <div
        className="flex flex-col 2xl:flex-row justify-center items-center gap-5"
        ref={targetRef}
      >
        <div className={`flex flex-row justify-center items-center w-full`}>
          <Image src={pic} alt="image" className="w-72 h-72 rounded-md" />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          <h1 className="text-blue-600 text-lg font-extrabold">
            {t("header")}
          </h1>
          <h1
            className={`text-3xl font-extrabold transition-all ease-in duration-300 ${
              show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {t("title")}
          </h1>
          <p
            className={`text-md transition-all ease-in duration-500 ${
              show ? "translate-x-0 opacity-90" : "translate-x-full opacity-0"
            }`}
          >
            {t("content")}
          </p>
        </div>
      </div>
    </section>
  );
}
