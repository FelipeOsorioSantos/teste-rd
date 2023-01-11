import { Flex, Text, Button, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../hooks/useWindowSize';

interface IProps {
  line1: string;
  line2: string;
}

export default function NotFoundPage(props: IProps) {
  const router = useRouter();
  const isLargerThan768 = useWindowSize();

  return (
    <Flex direction={isLargerThan768 ? 'row' : 'column'} h="100vh" px="28px">
      <Flex direction="column" w="100%">
        <Image m="32px" w="160px" src="/shopbanxLogo.svg" alt="shopbanx logo" />
        <Flex
          direction="column"
          w="100%"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Flex
            direction="column"
            justifyContent="center"
            maxW="fit-content"
            flexShrink={1}
          >
            <Text
              color="primary.dark"
              as="strong"
              fontSize={isLargerThan768 ? '40px' : '32px'}
            >
              404
            </Text>
            <Text
              color="primary.dark"
              as="strong"
              fontSize={isLargerThan768 ? '32px' : '24px'}
            >
              Página não encontrada :(
            </Text>
            <Text
              color="content.lighter"
              fontSize={isLargerThan768 ? '20px' : '14px'}
            >
              {' '}
              Tivemos um problema ao encontrar o{' '}
            </Text>
            <Text
              color="content.lighter"
              fontSize={isLargerThan768 ? '20px' : '14px'}
            >
              caminho que você tentou acessar, mas
            </Text>
            <Text
              color="content.lighter"
              fontSize={isLargerThan768 ? '20px' : '14px'}
            >
              você pode começar um novo caminho.
            </Text>
            {isLargerThan768 && (
              <Flex gap="16px" mt="48px">
                <Button
                  bgColor="primary.base"
                  color="white"
                  fontSize="14px"
                  borderRadius={8}
                  w="100%"
                  onClick={() => router.push('/dashboard')}
                  _hover={{ bgColor: 'primary.dark' }}
                >
                  Portal Shopbanx{' '}
                </Button>
                <Button
                  w="100%"
                  bgColor="neutral.white"
                  color="primary.base"
                  border="2px solid "
                  fontSize="14px"
                  borderRadius={8}
                  onClick={() => {
                    router.push('/');
                  }}
                  _hover={{ color: 'primary.dark' }}
                >
                  Nosso site
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex w="100%" align="center" justify="center" flexShrink={1}>
        <Image src="/bg404.svg" alt="shopbanx logo" />
      </Flex>
      {!isLargerThan768 && (
        <Flex
          direction="column"
          gap="16px"
          mt="48px"
          position="fixed"
          bottom="32px"
          w="100%"
          pr="60px"
        >
          <Button
            bgColor="primary.base"
            color="white"
            fontSize="14px"
            borderRadius={8}
            w="100%"
            onClick={() => router.push('/dashboard')}
            _hover={{ bgColor: 'primary.dark' }}
          >
            Portal Shopbanx{' '}
          </Button>
          <Button
            w="100%"
            bgColor="neutral.white"
            color="primary.base"
            border="2px solid "
            fontSize="14px"
            borderRadius={8}
            onClick={() => {
              router.push('/');
            }}
            _hover={{ color: 'primary.dark' }}
          >
            Nosso site
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
