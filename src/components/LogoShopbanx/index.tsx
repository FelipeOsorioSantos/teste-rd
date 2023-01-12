import { Flex, Image } from '@chakra-ui/react';

interface LogoShopbanxProps {}

export const LogoShopbanx = ({ ...otherProps }: LogoShopbanxProps) => {
  return (
    <Flex {...otherProps} maxW="65%" mb="16px">
      <Image src="/logo.svg" alt="Logotipo Shopbanx" />
    </Flex>
  );
};
