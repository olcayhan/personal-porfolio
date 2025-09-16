"use client";

import { useTranslations } from "next-intl";
import Card from "./Card";
import { projects } from "@/data/project";
import useObserver from "@/hooks/useObserver";
import { useRef } from "react";

export default function Projects() {
  const t = useTranslations("Projects");
  const targetRef = useRef(null);
  const show = useObserver(targetRef);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div
        className={`w-full max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        ref={targetRef}
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-navy dark:text-cream">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <Card key={index} item={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
