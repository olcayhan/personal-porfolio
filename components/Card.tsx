"use client";

import { Project } from "@/data/project";
import useObserver from "@/hooks/useObserver";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState, useRef } from "react";
import { HiCode, HiExternalLink, HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Prop {
  item: Project;
}

const Card = ({ item }: Prop) => {
  const [imgIndex, setImgIndex] = useState(0);
  const targetRef = useRef(null);
  const show = useObserver(targetRef);
  const t = useTranslations("Projects")
  const locale = useLocale() as 'tr' | 'en';

  const nextImage = () => {
    setImgIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setImgIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div
      ref={targetRef}
      className={`transition-all duration-700 transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >

      <div className="bg-cream/50 dark:bg-navy/20 border border-lightBlue/20 rounded-3xl p-8 lg:p-12 hover:border-blue/40 transition-all duration-300">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-video bg-lightBlue/10 dark:bg-lightBlue/5 rounded-2xl overflow-hidden group">
              <Image
                src={item.images[imgIndex]}
                alt={item.title[locale]}
                fill
                className="object-cover"
              />

              {item.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy/80 dark:bg-lightBlue/80 text-cream dark:text-navy rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-navy dark:hover:bg-lightBlue z-10"
                    aria-label="Previous image"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy/80 dark:bg-lightBlue/80 text-cream dark:text-navy rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-navy dark:hover:bg-lightBlue z-10"
                    aria-label="Next image"
                  >
                    <HiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {item.images.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {item.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImgIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === imgIndex
                      ? 'bg-navy dark:bg-lightBlue'
                      : 'bg-navy/30 dark:bg-lightBlue/30 hover:bg-navy/60 dark:hover:bg-lightBlue/60'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6 order-1 lg:order-2">

            {/* Simple Title */}
            <h3 className="text-2xl lg:text-3xl font-light text-navy dark:text-cream">
              {item.title[locale]}
            </h3>

            {/* Simple Description */}
            <p className="text-base lg:text-lg text-navy/70 dark:text-lightBlue/90 leading-relaxed font-light">
              {item.desc[locale]}
            </p>

            {/* Clean Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-navy/60 dark:text-lightBlue/70 uppercase tracking-wider">
                {t("technologies")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.languages.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-navy/10 dark:bg-lightBlue/10 text-navy dark:text-lightBlue rounded-full border border-navy/20 dark:border-lightBlue/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Simple Action Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy dark:bg-lightBlue text-cream dark:text-navy rounded-full font-medium hover:bg-blue dark:hover:bg-blue dark:hover:text-cream transition-all duration-300"
              >
                <HiCode className="w-4 h-4" />
                <span>{t("viewCode")}</span>
              </a>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-navy/30 dark:border-lightBlue/30 text-navy dark:text-lightBlue rounded-full font-medium hover:border-navy dark:hover:border-lightBlue transition-all duration-300"
                >
                  <HiExternalLink className="w-4 h-4" />
                  <span>{t("viewDemo")}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;