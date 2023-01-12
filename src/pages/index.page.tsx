import { Flex, Image, keyframes } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { AppGlobalContainer } from '../components/_app/AppGlobalContainer';
// import { FormAnaliseCredito } from '../components/analise-credito/FormAnaliseCredito';
import { FormAnaliseCredito } from '../components/analise-credito/FormAnaliseCredito';
import { useWindowSize } from '../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../store/useAnaliseCreditoStore';

const Home: NextPage = () => {
  const isLargerThan768 = useWindowSize();

  const { setAnaliseCreditoStep } = useAnaliseCreditoStore();

  useEffect(() => {
    setAnaliseCreditoStep(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fadeIn = keyframes`
  from {
    width: "0px";
    opacity: 0
  }
  to {
    width: "100%"
    opacity: 1
  }
  `;

  return (
    <>
      <Head>
        <title>Shopbanx - Solicitação de crédito</title>
      </Head>
      <Flex bg="#CA004F" h="100vh" w="100vw" position="relative">
        <Flex
          display="block"
          position="absolute"
          zIndex="0"
          h="100vh"
          w="100vw"
        >
          <Image
            display={isLargerThan768 ? 'flex' : 'none'}
            h="100%"
            src="./analise-credito/hero1.webp"
            alt="Análise de Crédito"
            objectFit="cover"
            position="absolute"
            pl="5%"
            pt="30px"
          />
          <Image
            w="100%"
            objectFit="cover"
            h="100%"
            src="./analise-credito/bg.webp"
            alt="Análise Background"
          />
        </Flex>

        <AppGlobalContainer
          animation={`${fadeIn} 0.3s linear`}
          zIndex="1"
          justifyContent={isLargerThan768 ? 'center' : 'flex-start'}
          overflowY={'scroll'}
          mb={isLargerThan768 ? '0px' : '32px'}
        >
          <Flex justifyContent={isLargerThan768 ? 'flex-end' : 'center'}>
            <FormAnaliseCredito />
          </Flex>
        </AppGlobalContainer>
      </Flex>
    </>
  );
};

export default Home;
