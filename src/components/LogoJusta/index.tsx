import { Flex, Image } from '@chakra-ui/react';

interface LogoJustaProps {}

export const LogoJusta = ({ ...otherProps }: LogoJustaProps) => {
  return (
    <Flex {...otherProps} maxW="65%" mb="16px">
      <Image src="/justa_shopbanx.svg" alt="Logotipo Justa" />
    </Flex>
  );
};
