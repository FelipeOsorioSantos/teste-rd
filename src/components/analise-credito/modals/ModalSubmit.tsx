import {
  Button,
  Flex,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';
import { DynamicIcon } from '../../DynamicIcon';
import { AppLottiePlayer } from '../../_app/AppLottiePlayer';

// const testSubmitStatus = {
//   message: '',
//   error: true,
//   loading: false,
// };

export type SubmitingStatus = {
  message?: string;
  error?: boolean;
  loading?: boolean;
};
interface ModalSubmitProps {
  onClose: () => void;
  submitingStatus?: SubmitingStatus;
}

export const ModalSubmit = ({ onClose, submitingStatus }: ModalSubmitProps) => {
  const isLargerThan768 = useWindowSize();
  const { setAnaliseCreditoStep } = useAnaliseCreditoStore();

  const handleSuccessCloseModal = () => {
    onClose();
    setAnaliseCreditoStep(3);
  };

  const handleFailCloseModal = () => {
    onClose();
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent
        maxH="100vh"
        textAlign="center"
        m={isLargerThan768 ? '32px' : '16px'}
        p="0px"
        // borderRadius="16px"
        borderRadius="16px"
        w={isLargerThan768 ? '375px' : '100%'}
        overflowY="scroll"
        // px={isLargerThan768 ? '0px' : '16px'}
      >
        <Flex p="28px" direction="column" alignItems="center" gap="16px">
          {submitingStatus?.loading === true && (
            <>
              <Text as="strong">Enviando dados...</Text>
              <Flex>
                <AppLottiePlayer src="spinner.json" />
              </Flex>
            </>
          )}

          {submitingStatus?.loading === false &&
            submitingStatus?.error === false && (
              <>
                <Flex color="primary.base">
                  <DynamicIcon icon="checked" />
                </Flex>
                <Text>{submitingStatus.message}</Text>
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
          {submitingStatus?.loading === false &&
            submitingStatus?.error === true && (
              <>
                <Flex color="primary.base">
                  <DynamicIcon icon="close" />
                </Flex>
                <Text>{submitingStatus.message}</Text>
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
