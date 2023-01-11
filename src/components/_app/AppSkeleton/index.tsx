import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import { opacityFlash, skeletonFlash } from '../../../styles/animations';

interface AppSkeletonProps {
  children?: React.ReactNode;
  isLoading: boolean;
}

export const AppSkeleton = ({
  children,
  isLoading,
  ...otherProps
}: AppSkeletonProps & FlexProps) => {
  const slide = `0.8s linear infinite ${skeletonFlash};`;
  const flash = `0.6s linear infinite ${opacityFlash};`;
  return isLoading ? (
    <Flex position="relative" w="100%" h="100%">
      <Flex
        position="absolute"
        w="100%"
        h="100%"
        zIndex="999"
        bg="neutral.lighter"
        overflow="hidden"
        // animation={flash}
      >
        <Flex w="100%" filter="blur(40px)" animation={slide}>
          <Flex h="100%" w="120px" bg="white" />
        </Flex>
      </Flex>
      <Flex zIndex="998">{children}</Flex>
    </Flex>
  ) : (
    <>{children}</>
  );
};
