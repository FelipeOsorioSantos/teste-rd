import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface AppFilterButtonProps {
  onClick: () => void;
  selected?: boolean;
  text?: string;
}

export const AppFilterButton = ({
  onClick,
  selected,
  text,
  ...otherProps
}: AppFilterButtonProps & FlexProps) => {
  const isLargerThan768 = useWindowSize();
  return (
    <Flex
      onClick={onClick}
      bg={!isLargerThan768 ? (selected ? 'primary.base' : 'white') : 'white'}
      py={isLargerThan768 ? '16px' : '8px'}
      px="16px"
      border={isLargerThan768 ? '1px solid' : '0px'}
      borderColor={
        isLargerThan768 ? (selected ? 'primary.base' : 'neutral.light') : ''
      }
      borderRadius="8px"
      boxShadow={!isLargerThan768 ? '0px 4px 8px rgba(0, 0, 0, 0.08)' : ''}
      cursor="pointer"
      alignItems={isLargerThan768 ? 'flex-end' : 'center'}
      mb={!isLargerThan768 ? '12px' : '0px'}
      fontSize="14px"
      {...otherProps}
    >
      <Text
        color={
          !isLargerThan768
            ? selected
              ? 'white'
              : 'primary.base'
            : selected
            ? 'primary.base'
            : 'content.dark'
        }
        fontFamily={
          !isLargerThan768
            ? selected
              ? 'Avenir-Heavy'
              : 'Avenir-Book'
            : 'Avenir-Medium'
        }
      >
        {text}
      </Text>
    </Flex>
  );
};
