import Document, { Html, Head, Main, NextScript } from "next/document"
import i18nextConfig from "../next-i18next.config"
class MyDocument extends Document {
  render(): JSX.Element {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale} className="dark">
        <Head />
        <body className="bg-gray transition-all dark:bg-blackLight">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
