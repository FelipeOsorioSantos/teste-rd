import React from 'react';
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';

interface AppRadioProps {
  selected: boolean;
}

export const AppRadio = ({
  selected,
  ...otherProps
}: AppRadioProps & FlexProps) => {
  return (
    <Flex
      w="16px"
      h="16px"
      borderRadius="100%"
      borderWidth={selected ? '5px' : '1.5px'}
      borderColor={selected ? 'primary.dark' : 'neutral.base'}
      cursor="pointer"
      {...otherProps}
    />
  );
};
