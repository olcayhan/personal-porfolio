"use client";
import useObserver from "@/hooks/useObserver";
import { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function Main() {
  const targetRef = useRef(null);
  const show = useObserver(targetRef);
  const t = useTranslations("Main");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div
        className={`text-center space-y-8 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        ref={targetRef}
      >
        {/* Name */}
        <div>
          <h1 className="text-5xl md:text-7xl font-light text-navy dark:text-cream">
            Olcay Han
            <br />
            <span className="font-normal">Korkut</span>
          </h1>
          <p className="text-xl mt-4 text-navy/60 dark:text-lightBlue/80 font-light">
            Full Stack Developer
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-navy/80 dark:text-lightBlue/90 max-w-2xl mx-auto leading-relaxed font-light">
          {t("content")}
        </p>

        {/* Contact Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-navy dark:bg-lightBlue text-cream dark:text-navy rounded-full font-medium hover:bg-blue dark:hover:bg-blue dark:hover:text-cream transition-all duration-300"
        >
          <HiMail className="w-5 h-5" />
          {t("talk")}
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/olcayhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/60 dark:text-lightBlue/80 hover:text-navy dark:hover:text-lightBlue transition-colors duration-300"
          >
            <AiFillLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/olcayhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/60 dark:text-lightBlue/80 hover:text-navy dark:hover:text-lightBlue transition-colors duration-300"
          >
            <AiFillGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
