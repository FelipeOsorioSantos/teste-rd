import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface AppAlertModalProps {
  props?: string;
}

export const AppAlertModal = ({ props, ...otherProps }: AppAlertModalProps) => {
  const router = useRouter();
  return (
    <>
      <ModalOverlay />
      <ModalContent p="0px" m="0px">
        <Flex maxW="360px">
          <Flex>
            <Text>Sessão expirada</Text>
          </Flex>
          <Flex>
            <Button
              w="100%"
              bgColor="primary.base"
              color="white"
              fontSize="14px"
              _disabled={{
                bgColor: 'neutral.lighter',
                color: 'neutral.dark',
                pointerEvents: 'none',
                cursor: 'not-allowed',
              }}
              borderRadius={8}
              onClick={() => router.push('/')}
              _hover={{ bgColor: 'primary.dark' }}
            >
              Voltar para home
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </>
  );
};
