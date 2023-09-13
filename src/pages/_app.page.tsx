//global styles
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { AppSeo } from '../components/_app/AppSeo';
import '../styles/fonts.css';
import '../styles/index.css';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    TagManager.initialize({ gtmId: 'GTM-K3F5TP5' });
  }, []);
  return (
    <>
      <AppSeo
        image="/images/meta/credito.png"
        title="Crédito | Shopbanx"
        description="Aqui você faz uma simulação e recebe uma super oferta de crédito"
        url="https://credito.shopbanx.com.br"
      />
      <ChakraProvider theme={theme}>
        {mounted && <Component {...pageProps} />}
      </ChakraProvider>
    </>
  );
}
