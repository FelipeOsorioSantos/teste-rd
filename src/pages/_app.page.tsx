//global styles
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/index.css';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      {mounted && <Component {...pageProps} />}
    </ChakraProvider>
  );
}
