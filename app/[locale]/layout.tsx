import "./globals.css";
import Navbar from "@/components/Navbar";

import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Olcay Han Korkut",
  description: "My Portfolio Website",
};

const locales = ['en', 'tr'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="dark:bg-gray-900 transition-all duration-300">
            <Navbar />
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
