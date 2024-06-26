import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "en",
  locales: ["en", "tr"],
});

export const config = {
  matcher: ["/", "/(tr|en)/:path*"],
};
