import 'antd/dist/antd.css'
import '../styles/vars.scss'
import '../styles/global.scss'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
