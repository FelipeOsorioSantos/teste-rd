import {
  Button,
  Flex,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Text,
  Progress,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';
import { DynamicIcon } from '../../DynamicIcon';
import { AppLottiePlayer } from '../../_app/AppLottiePlayer';
import { CloseIcon } from '@chakra-ui/icons';

// const testSubmitStatus = {
//   message: '',
//   error: true,
//   loading: false,
// };

export type SubmitStatus = {
  message?: string;
  error?: boolean;
  loading?: boolean;
  status?: number;
};
interface ModalSubmitProps {
  onClose: () => void;
  submitStatus?: SubmitStatus;
}

export const ModalSubmit = ({ onClose, submitStatus }: ModalSubmitProps) => {
  const isLargerThan768 = useWindowSize();
  const { setAnaliseCreditoStep } = useAnaliseCreditoStore();
  let [progressValue, setProgressValue] = useState<number>(0);
  const [reachedFinal, setReachState] = useState<boolean>(false);

  const handleSuccessCloseModal = () => {
    onClose();
    setAnaliseCreditoStep(3);
  };

  const handleFailCloseModal = () => {
    onClose();
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (progressValue <= 95) {
        setProgressValue(progressValue++);
      } else {
        setReachState(true);
        clearInterval(timer);
      }
    }, 300);
  }, []);

  // useEffect(() => {
  //   console.log('A');
  //   const interval = setInterval(() => {
  //     // console.log('INTERVAL');
  //     if (progressValue <= 25) {
  //       setProgressValue((prevValue) => prevValue + 0.5);
  //     }
  //     if (progressValue > 25 && progressValue < 75) {
  //       setProgressValue((prevValue) => prevValue + 0.25);
  //     }
  //     if (progressValue >= 75 && progressValue < 90) {
  //       setProgressValue((prevValue) => prevValue + 0.1);
  //     }
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <ModalOverlay />
      <ModalContent
        maxH="100vh"
        textAlign="center"
        m={isLargerThan768 ? '32px' : '16px'}
        p="0px"
        borderRadius="16px"
        w={isLargerThan768 ? '375px' : '100%'}
        overflowY="scroll"
      >
        <Flex p="28px" direction="column" alignItems="center" gap="16px">
          {submitStatus?.loading === true && (
            <>
              <Flex>
                {/* <AppLottiePlayer src="spinner.json" /> */}
                <Flex
                  p="28px"
                  direction="column"
                  alignItems="center"
                  gap="16px"
                >
                  <Text as="strong" fontSize={'20px'} textAlign="left">
                    Aguarde enquanto analisamos seus dados
                  </Text>
                  {!reachedFinal ? (
                    <Flex
                      direction="row"
                      alignItems="center"
                      gap="16px"
                      justifyContent={'space-between'}
                      w={'100%'}
                    >
                      <Text fontSize={'16px'}>Verificando...</Text>
                      <Text fontSize={'16px'}>{progressValue.toFixed()}%</Text>
                    </Flex>
                  ) : (
                    <Flex alignItems="center" justifyContent="center">
                      <Text fontSize={'16px'}>Só mais um momento...</Text>
                    </Flex>
                  )}
                  <Progress
                    value={progressValue}
                    size="xs"
                    colorScheme="pink"
                    height={'8px'}
                    width={'100%'}
                    borderRadius={'8px'}
                    isIndeterminate={reachedFinal ? true : false}
                  />
                  <Text fontSize={'14px'} pt={'8px'} textColor={'grey'}>
                    Isso pode levar alguns segundos
                  </Text>
                </Flex>
              </Flex>
            </>
          )}
          {submitStatus?.loading === false && submitStatus.status === 201 && (
            <>
              <Flex color="primary.base">
                <DynamicIcon icon="checked" />
              </Flex>
              <Text>
                Sua simulação de crédito foi enviada com sucesso! Aguarde
                contato do time Shopbanx.
              </Text>
              <Flex w="100%">
                <Button
                  onClick={() => handleSuccessCloseModal()}
                  w="100%"
                  type="submit"
                  bgColor="primary.base"
                  color="white"
                  fontSize="14px"
                  borderRadius={8}
                  _hover={{ bgColor: 'primary.dark' }}
                >
                  <Text as="strong">Fechar</Text>
                </Button>
              </Flex>
            </>
          )}
          {submitStatus?.loading === false && submitStatus?.error === true && (
            <>
              <Flex
                color="primary.base"
                cursor="pointer"
                onClick={() => onClose()}
              >
                <CloseIcon color="primary.base" />
              </Flex>
              <Text>{submitStatus.message}</Text>
              <Text fontSize="14px">
                Caso precise de ajuda entre em contato com o Atendimento
                Shopbanx via{' '}
                <Text
                  as="a"
                  color="primary.base"
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=551123693128"
                >
                  <Text as="strong">WhatsApp</Text>
                </Text>
              </Text>
              <Flex w="100%">
                <Button
                  onClick={() => handleFailCloseModal()}
                  w="100%"
                  type="submit"
                  bgColor="primary.base"
                  color="white"
                  fontSize="14px"
                  borderRadius={8}
                  _hover={{ bgColor: 'primary.dark' }}
                >
                  <Text as="strong">Voltar</Text>
                </Button>
              </Flex>
            </>
          )}
        </Flex>
      </ModalContent>
    </>
  );
};
