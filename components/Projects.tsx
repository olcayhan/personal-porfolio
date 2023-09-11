"use client";

import { useTranslations } from "next-intl";
import Card from "./Card";
import { projects } from "@/data/project";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center w-4/6 mx-auto min-h-screen py-16"
    >
      <div className="flex flex-col justify-center gap-2 w-full py-10">
        <h1 className="text-blue-600 text-lg font-extrabold">{t("header")}</h1>
        <h1 className="text-3xl font-extrabold">{t("title")}</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        {projects.map((item, key) => (
          <Card item={item} key={key} />
        ))}
      </div>
    </section>
  );
}
