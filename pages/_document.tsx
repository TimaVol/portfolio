import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="bg-gray transition-all dark:bg-blackLight">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
