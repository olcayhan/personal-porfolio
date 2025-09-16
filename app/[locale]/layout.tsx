import "./globals.css";
import Navbar from "@/components/Navbar";

import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Olcay Han Korkut - Frontend Developer",
  description: "Modern web uygulamaları geliştiren Frontend Developer. React, Next.js, TypeScript ve modern teknolojilerle kullanıcı dostu çözümler.",
  keywords: "frontend developer, react developer, nextjs, typescript, web developer, istanbul",
  authors: [{ name: "Olcay Han Korkut" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0ea5e9",
};

const locales = ['en', 'tr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta property="og:title" content="Olcay Han Korkut - Frontend Developer" />
        <meta property="og:description" content="Modern web uygulamaları geliştiren Frontend Developer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${inter.className} font-display antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen transition-all duration-300">
            <Navbar />
            <main className="relative">
              {children}
            </main>

            {/* Footer */}
            <footer className="relative bg-white/5 dark:bg-white/5 backdrop-blur-sm border-t border-white/20 py-12">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    &lt;olcayhan /&gt;
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Modern web teknolojileri kullanarak etkileyici deneyimler yaratıyorum.
                  </p>
                  <div className="flex justify-center space-x-6 pt-4">
                    <a href="mailto:kolcayhan1@gmail.com" className="text-gray-500 hover:text-primary-500 transition-colors">
                      Email
                    </a>
                    <a href="https://linkedin.com/in/olcayhan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://github.com/olcayhan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                      GitHub
                    </a>
                  </div>
                  <div className="pt-8 text-sm text-gray-500 dark:text-gray-500">
                    © 2025 Olcay Han Korkut. Tüm hakları saklıdır.
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
