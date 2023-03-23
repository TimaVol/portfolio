import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"
import i18nextConfig from "../next-i18next.config"
class MyDocument extends Document {
  render(): JSX.Element {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <Script id="dark-mode-toggle" strategy="afterInteractive">
            {`
            localStorage.theme = "dark"
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            `}
          </Script>
        </Head>
        <body className="bg-gray transition-all dark:bg-blackLight">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
