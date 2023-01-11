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

  return (
    <Flex h={isLargerThan768 ? '100%' : '100vh'} alignItems="center">
      <Flex
        w="100%"
        maxW={isLargerThan768 ? '384px' : '100%'}
        // mt={isLargerThan768 ? '0px' : '72px'}
        direction="column"
        borderRadius="8px"
        p="24px"
        overflowY="scroll"
        bg="white"
        // display="inline-block"
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
            Nosso time entrará em contato em breve através dos meios abaixo para
            prosseguir com a solicitação.
          </Text>
        </Flex>

        {/*submit*/}
        <Button
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
        </Button>
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
            router.push('/');
          }}
        >
          <Text as="strong">Ir para o início</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
