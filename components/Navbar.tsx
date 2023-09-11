"use client";
import Link from "next-intl/link";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const [isMobile, setMobile] = useState(false);
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

  return (
    <>
      <div className="hidden md:block fixed top-0 w-full bg-neutral-50 z-50">
        <div className="flex flex-row justify-between items-center px-24 py-5">
          <h1 className="font-extrabold text-2xl">Olcay.tech</h1>
          <div className="flex flex-row items-center justify-center gap-6">
            <a className="font-bold text-lg  hover:scale-110" href="#home">
              {t("home")}
            </a>
            <a className="font-bold text-lg  hover:scale-110" href="#about">
              {t("about")}
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
              <Link className="font-bold text-lg" href="/" locale="tr">
                TR
              </Link>
            )}
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
          bg-neutral-50 
            z-50 
            transition-all
            duration-500
            `}
      >
        <div className="flex flex-col justify-center items-center px-24 py-5 h-full gap-10">
          <h1 className="font-extrabold text-4xl">Olcay.tech</h1>
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
        `}
        onClick={() => window.scrollTo(0, 0)}
      >
        <AiOutlineArrowUp size={30} />
      </button>
    </>
  );
}
