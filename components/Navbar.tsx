"use client";
import { Link } from "@/navigation";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Navbar() {
  const [isMobile, setMobile] = useState(false);
  const [isDark, setDark] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
      setIsScrolled(currentPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  };

  const toggleCloseMobile = () => {
    setMobile(false);
    document.body.style.overflow = "auto";
  };

  const toggleOpenMobile = () => {
    setMobile(true);
    document.body.style.overflow = "hidden";
  };

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`
        fixed top-0 w-full z-50 transition-all duration-500 
        ${isScrolled
          ? 'bg-cream/80 dark:bg-navy/80 backdrop-blur-2xl shadow-glass border-b border-white/20'
          : 'bg-transparent'
        }
      `}>
        <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-4">
          {/* Logo */}
          <Link
            className="text-2xl font-bold bg-navy dark:bg-cream bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            href="/"
          >
            &lt;olcayhan /&gt;
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 group"
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Language Toggle */}
            <div className="relative">
              {locale === "tr" ? (
                <Link
                  className="px-3 py-2 text-sm font-semibold bg-gradient-primary text-white rounded-full hover:scale-105 transition-transform duration-300"
                  href="/"
                  locale="en"
                >
                  EN
                </Link>
              ) : (
                <Link
                  className="px-3 py-2 text-sm font-semibold bg-gradient-primary text-white rounded-full hover:scale-105 transition-transform duration-300"
                  href="/"
                  locale="tr"
                >
                  TR
                </Link>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gradient-primary text-white hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between px-6 py-4">
          <Link
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            href="/"
          >
            &lt;olcayhan /&gt;
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gradient-primary text-white hover:scale-110 transition-all duration-300"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>

            <button
              onClick={toggleOpenMobile}
              className="p-2 rounded-full bg-gradient-primary text-white hover:scale-110 transition-all duration-300"
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-50 transition-all duration-500 
          ${isMobile ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleCloseMobile}
        />

        {/* Menu Panel */}
        <div className={`
          absolute right-0 top-0 h-full w-80 max-w-[85vw] 
          bg-cream/90 dark:bg-navy/90 
          shadow-glass border-l border-white/20
          transform transition-transform duration-500
          ${isMobile ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={toggleCloseMobile}
              className="p-2 rounded-full bg-gradient-primary text-white hover:scale-110 transition-all duration-300"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="px-6 space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleCloseMobile}
                className={`
                  block text-lg font-semibold text-gray-700 dark:text-gray-300 
                  hover:text-primary-600 dark:hover:text-primary-400 
                  transition-all duration-300 transform hover:translate-x-2
                  animate-slide-in-right
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}

            {/* Language Toggle - Mobile */}
            <div className="pt-6">
              {locale === "tr" ? (
                <Link
                  className="inline-block px-6 py-3 text-sm font-semibold bg-gradient-primary text-white rounded-full hover:scale-105 transition-transform duration-300"
                  href="/"
                  locale="en"
                  onClick={toggleCloseMobile}
                >
                  Switch to English
                </Link>
              ) : (
                <Link
                  className="inline-block px-6 py-3 text-sm font-semibold bg-gradient-primary text-white rounded-full hover:scale-105 transition-transform duration-300"
                  href="/"
                  locale="tr"
                  onClick={toggleCloseMobile}
                >
                  Türkçe&apos;ye Geç
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {scrollPosition > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 bg-navy text-white rounded-full shadow-glow hover:shadow-glow-lg hover:scale-110 transition-all duration-300 z-40"
        >
          <AiOutlineArrowUp size={20} />
        </button>
      )}
    </>
  );
}