import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="flex justify-center items-center h-screen">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
