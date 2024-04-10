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
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
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
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!isDark);
    console.log();
  };

  const toggleCloseMobile = () => {
    setMobile(false);
    document.body.style.overflow = "auto";
  };
  const toggleOpenMobile = () => {
    setMobile(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="hidden md:block sticky top-0 w-full bg-neutral-50 dark:bg-gray-800 z-50">
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
            backdrop-blur-xl
            transition-all
            duration-500
            `}
      >
        <div className="flex flex-col justify-center items-center px-24 py-5 h-full gap-10 text-neutral-950 dark:text-neutral-50">
          <Link className="font-extrabold text-4xl" href="/">
            Olcay.tech
          </Link>
          <div className="flex flex-col items-center justify-center gap-10">
            <a
              className="font-bold text-2xl"
              href="#home"
              onClick={toggleCloseMobile}
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
              onClick={toggleCloseMobile}
            >
              {t("skills")}
            </a>
            <a
              className="font-bold text-2xl"
              href="#projects"
              onClick={toggleCloseMobile}
            >
              {t("projects")}
            </a>
            <a
              className="font-bold text-2xl"
              href="#contact"
              onClick={toggleCloseMobile}
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
            onClick={toggleCloseMobile}
          />
        ) : (
          <FaBars
            size={30}
            className="cursor-pointer"
            onClick={toggleOpenMobile}
          />
        )}
      </div>

      <button
        className={`
        ${scrollPosition > 100 ? "block" : "hidden"}
        fixed 
        right-5 
        bottom-5 
        z-[100] 
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
