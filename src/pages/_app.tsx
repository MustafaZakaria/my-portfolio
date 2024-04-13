import { theme } from '@/theme';
import Fonts from '@/theme/components/Fonts';
import { AppPropsWithLayout } from '@/types/layout';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  const pageWithLayout = getLayout(<Component {...pageProps} />);

  return (
    <>
      <Head>
        <title>Mustafa Portfolio</title>
        {/* Add any other meta tags or links here */}
      </Head>
      <Fonts />
      <ChakraProvider theme={theme}>{pageWithLayout}</ChakraProvider>
    </>
  );
}
