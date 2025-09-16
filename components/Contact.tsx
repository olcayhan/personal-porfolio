"use client";

import { useTranslations } from "next-intl";
import { useState, useRef } from "react";
import useObserver from "@/hooks/useObserver";
import {
  HiMail,
  HiPaperAirplane,
  HiUser,
  HiChatAlt
} from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Contact() {
  const t = useTranslations("Contact");
  const targetRef = useRef(null);
  const show = useObserver(targetRef);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert(t('successMessage'));
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "kolcayhan1@gmail.com",
      href: "mailto:kolcayhan1@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AiFillLinkedin,
      title: "Linkedin",
      value: "olcayhan",
      href: "https://www.linkedin.com/in/olcayhan/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AiFillGithub,
      title: "GitHub",
      value: "olcayhan",
      href: "https://github.com/olcayhan",
      color: "hover:bg-gray-800"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6"
    >
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ref={targetRef}
      >
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-light text-navy dark:text-cream animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-black/90 dark:text-cream/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: '600ms' }}>
            {/* CTA Box */}
            <div className="p-6 bg-navy dark:bg-white/10 rounded-2xl text-cream">
              <h4 className="text-xl mb-2">{t("quickContact")}</h4>
              <p className="text-blue-100 font-light mb-4">
                {t("quickContactDesc")}
              </p>
              <a
                href="mailto:kolcayhan1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-navy bg-cream rounded-lg hover:scale-105 transition-transform"
              >
                <HiChatAlt size={20} />
                {t("email")}
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-navy dark:text-white">
                {t("contactInfo")}
              </h3>

              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-navy dark:text-cream">{info.title}</h4>
                    <p className="text-black dark:text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: '800ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-light text-navy dark:text-white mb-6">
                  {t("sendMessage")}
                </h3>

                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <HiUser className="h-5 w-5 text-navy dark:text-cream" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("namePlaceholder")}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/40 dark:bg-white/5 border border-white/20 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-navy dark:text-cream" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("emailPlaceholder")}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/40 dark:bg-white/5 border border-white/20 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("subjectPlaceholder")}
                    required
                    className="w-full px-4 py-4 bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />

                  {/* Message Textarea */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("messagePlaceholder")}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-navy dark:bg-cream text-white dark:text-navy rounded-2xl font-semibold shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("sending")}
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-5 h-5" />
                        {t("sendButton")}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
