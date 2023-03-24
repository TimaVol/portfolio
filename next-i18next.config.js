module.exports = {
  debug: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ukr"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
}
