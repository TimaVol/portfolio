import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SSRProvider>
  );
}

export default MyApp;
