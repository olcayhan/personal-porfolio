"use client";

import { useTranslations } from "next-intl";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <section
      id="contact"
      className="flex flex-col justify-center w-4/6 mx-auto min-h-screen py-16"
    >
      <div className="flex flex-col 2xl:flex-row justify-center items-center gap-10">
        <div className="flex flex-col justify-center gap-4 w-full">
          <h1 className="text-blue-600 text-lg font-extrabold">
            {t("header")}
          </h1>
          <h1 className="text-3xl font-extrabold">{t("title")}</h1>
          <div className="flex flex-row items-center gap-6 p-4">
            <FiMail size={35} color="blue" />
            <div className="flex flex-col">
              <p className="font-extrabold text-lg">Mail</p>
              <p className="text-md opacity-80">kolcayhan1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
