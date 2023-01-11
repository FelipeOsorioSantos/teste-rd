import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

interface AppGlobalContainerProps {
  children: React.ReactNode;
}

export const AppGlobalContainer = ({
  children,
  ...otherProps
}: AppGlobalContainerProps & FlexProps) => {
  return (
    <Flex w="100vw" direction="column" alignItems="center" {...otherProps}>
      <Flex direction="column" maxW="calc(1035px + 32px)" px="16px" w="100%">
        {children}
      </Flex>
    </Flex>
  );
};
