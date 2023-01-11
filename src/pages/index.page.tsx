import { Flex, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppGlobalContainer } from '../components/_app/AppGlobalContainer';
import { FormAnaliseCredito } from '../components/analise-credito/FormAnaliseCredito';
import { useWindowSize } from '../hooks/useWindowSize';

const Home: NextPage = () => {
  const isLargerThan768 = useWindowSize();

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
