import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
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
