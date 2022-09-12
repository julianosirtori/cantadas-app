import Head from 'next/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { wrapper } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Pick Up</title>
            </Head>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    )
}

export default wrapper.withRedux(MyApp)
