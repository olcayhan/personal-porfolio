"use client";
import Link from "next-intl/link";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const [isMobile, setMobile] = useState(false);
  const [isDark, setDark] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const locale = useLocale();
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY || window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDark(!isDark);
  };

  return (
    <>
      <div className="hidden md:block sticky top-0 w-full bg-neutral-50z-5">
        <div className="flex flex-row justify-between items-center px-24 py-5 dark:text-neutral-50">
          <Link className="font-extrabold text-2xl" href="/">
            Olcay.tech
          </Link>
          <div className="flex flex-row items-center justify-center gap-6">
            <a className="font-bold text-lg  hover:scale-110" href="#home">
              {t("home")}
            </a>
            <a className="font-bold text-lg  hover:scale-110" href="#about">
              {t("about")}
            </a>
            <a className="font-bold text-lg  hover:scale-110" href="#skills">
              {t("skills")}
            </a>
            <a className="font-bold text-lg  hover:scale-110" href="#projects">
              {t("projects")}
            </a>
            <a className="font-bold text-lg  hover:scale-110" href="#contact">
              {t("contact")}
            </a>
            {locale == "tr" ? (
              <Link
                className="font-bold text-lg hover:scale-110"
                href="/"
                locale="en"
              >
                EN
              </Link>
            ) : (
              <Link
                className="font-bold text-lg hover:scale-110"
                href="/"
                locale="tr"
              >
                TR
              </Link>
            )}

            <button
              className="relative border-[2px] rounded-3xl dark:border-neutral-200  border-neutral-950 w-14 h-8 shadow"
              onClick={toggleDarkMode}
            >
              <div className="absolute left-[2px] top-[2px] w-6 h-6 border-neutral-800 dark:border-neutral-200 border-[2px] rounded-full shadow dark:translate-x-full transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
            block
            md:hidden
            fixed
            top-0
            ${isMobile ? "left-0" : "-left-full"}
            w-full
            h-full 
            z-50 
            backdrop-blur
            transition-all
            duration-500
            `}
      >
        <div className="flex flex-col justify-center items-center px-24 py-5 h-full gap-10 dark:text-neutral-50">
          <Link className="font-extrabold text-4xl" href="/">
            Olcay.tech
          </Link>
          <div className="flex flex-col items-center justify-center gap-10">
            <a
              className="font-bold text-2xl"
              href="#home"
              onClick={() => {
                setMobile(false);
              }}
            >
              {t("home")}
            </a>
            <a
              className="font-bold text-2xl"
              href="#about"
              onClick={() => {
                setMobile(false);
              }}
            >
              {t("about")}
            </a>
            <a
              className="font-bold text-2xl"
              href="#skills"
              onClick={() => setMobile(false)}
            >
              {t("skills")}
            </a>
            <a
              className="font-bold text-2xl"
              href="#projects"
              onClick={() => {
                setMobile(false);
              }}
            >
              {t("projects")}
            </a>
            <a
              className="font-bold text-2xl"
              href="#contact"
              onClick={() => {
                setMobile(false);
              }}
            >
              {t("contact")}
            </a>

            {locale == "tr" ? (
              <Link
                className="font-bold text-lg hover:scale-110"
                href="/"
                locale="en"
              >
                EN
              </Link>
            ) : (
              <Link className="font-bold text-lg" href="/" locale="tr">
                TR
              </Link>
            )}
            <button
              className="relative border-[2px] rounded-3xl dark:border-neutral-200  border-neutral-950 w-14 h-8 shadow"
              onClick={toggleDarkMode}
            >
              <div className="absolute left-[2px] top-[2px] w-6 h-6 border-neutral-800 dark:border-neutral-200 border-[2px] rounded-full shadow dark:translate-x-full transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
      block 
      md:hidden 
      fixed 
      top-5 
      right-5 
      z-50 
      ${isMobile ? "rotate-180" : "rotate-0"}
      transition-all 
      duration-700
      dark:text-neutral-50
      `}
      >
        {isMobile ? (
          <AiOutlineClose
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setMobile(!isMobile);
            }}
          />
        ) : (
          <FaBars
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setMobile(!isMobile);
            }}
          />
        )}
      </div>

      <button
        className={`
        ${scrollPosition > 100 ? "block" : "hidden"}
        fixed 
        right-5 
        bottom-5 
        z-49 
        cursor-pointer 
        border-neutral-800 
        border-[1px] 
        p-2 
        rounded-md
        dark:text-neutral-50
        dark:border-neutral-50
        `}
        onClick={() => window.scrollTo(0, 0)}
      >
        <AiOutlineArrowUp size={30} />
      </button>
    </>
  );
}
