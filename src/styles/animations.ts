import { keyframes } from '@chakra-ui/react';

export const skeletonFlash = keyframes`
  from {transform: translateX(-20%)}
  to {transform: translateX(120%)}
`;

export const opacityFlash = keyframes`
  0% {opacity: 1}
  50% {opacity: 0}
  100% {opacity: 1}
`;
