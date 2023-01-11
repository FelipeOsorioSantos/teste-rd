import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const AppDivider = ({ ...otherProps }) => {
  return <Flex w="100%" h="1px" bg="#F2F4F5" my="16px" {...otherProps} />;
};
