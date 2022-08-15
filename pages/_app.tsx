import Head from 'next/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { wrapper } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Pick Up</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(MyApp)
