import React from 'react';
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import { DynamicIcon } from '../../DynamicIcon';

interface AppCheckboxProps {
  selected?: boolean;
  iconColor?: string;
  bgColorSelected?: string;
}

export const AppCheckbox = ({
  selected,
  bgColorSelected,
  iconColor,
  ...otherProps
}: AppCheckboxProps & FlexProps) => {
  return (
    <Flex
      w="16px"
      h="16px"
      borderRadius="4px"
      borderWidth="1px"
      borderColor="primary.dark"
      bg={selected ? bgColorSelected : 'none'}
      cursor="pointer"
      alignItems="center"
      justifyContent="center"
      {...otherProps}
    >
      {selected && (
        <Flex w="16px" p="0.5px" color={iconColor}>
          <DynamicIcon w="100%" icon="checked" />
        </Flex>
      )}
    </Flex>
  );
};
