import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';
import nProgress from 'nprogress';
import Router from 'next/router';
import nprogress from 'nprogress';


function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    nprogress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    nprogress.done();
  });

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
