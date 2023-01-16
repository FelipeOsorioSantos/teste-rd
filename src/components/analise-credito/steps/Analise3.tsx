import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';

export const Analise3 = () => {
  const isLargerThan768 = useWindowSize();
  const router = useRouter();
  const { setAnaliseCreditoStep } = useAnaliseCreditoStore();

  const handleNewSimulation = () => {
    setAnaliseCreditoStep(1);
  };

  const handleGoToShopBanx = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.shopbanx.com.br';
    }
  };

  return (
    <Flex h={isLargerThan768 ? '100%' : '100vh'} alignItems="center">
      <Flex
        w="100%"
        maxW={isLargerThan768 ? '384px' : '100%'}
        direction="column"
        borderRadius="8px"
        p="24px"
        overflowY="scroll"
        bg="white"
      >
        {/*title*/}
        <Flex direction="column">
          <Text
            as="strong"
            fontSize="20px"
            lineHeight="120%"
            color="content.darker"
          >
            Seu pedido de simulação de crédito foi enviado!
          </Text>
          <Text mt="16px" fontSize="16px" color="content.darker">
            Em breve nosso time entrará em contato por email e WhatsApp, para
            prosseguir com a solicitação.
          </Text>
        </Flex>

        {/*submit*/}
        {/* <Button
          mt="32px"
          w="100%"
          bgColor="primary.base"
          color="white"
          fontSize="14px"
          borderRadius={8}
          gap="8px"
          onClick={() => handleNewSimulation()}
          _hover={{
            bgColor: 'primary.dark',
          }}
        >
          <Text as="strong">Fazer nova simulação</Text>
        </Button> */}
        <Button
          mt="16px"
          w="100%"
          bgColor="white"
          border="2px solid"
          borderColor="primary.base"
          color="primary.base"
          fontSize="14px"
          borderRadius={8}
          gap="8px"
          onClick={() => {
            // router.push('/');
            handleGoToShopBanx();
          }}
          id="voltar_shopbanx"
        >
          <Text as="strong">Voltar para Shopbanx</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
