import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  currency?: string;
  currencyColor?: string;
  labelColor?: string;
  placeholder?: string;
  errors?: { message?: FieldError['message'] };
  bgColor?: string;
  errorColor?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    currency,
    currencyColor,
    bgColor,
    errorColor = 'error.base',
    errors = null,
    placeholder = 'Digite aqui',
    labelColor = 'content.dark',
    ...rest
  },
  ref,
) => {
  const [value, setValue] = useState('');
  const handleChange = (event: any) => setValue(event.target.value);

  return (
    <FormControl isInvalid={!!errors}>
      {!!label && (
        <FormLabel htmlFor={name} mb={0} color={labelColor} fontSize="14px">
          {label}
        </FormLabel>
      )}
      <Flex w="100%" position="relative">
        <ChakraInput
          name={name}
          type={name}
          border="1px solid"
          pl={currency ? '32px' : ''}
          focusBorderColor="primary.light"
          placeholder={placeholder}
          bgColor={bgColor ? bgColor : 'white'}
          borderColor={value.length > 2 ? 'neutral.dark' : 'neutral.base'}
          onInput={handleChange}
          _hover={{ bgColor: bgColor ? bgColor : 'white' }}
          ref={ref}
          borderRadius="8px"
          fontSize="14px"
          {...rest}
        />
        {currency && (
          <Flex
            position="absolute"
            h="100%"
            align="center"
            pl="8px"
            zIndex="999"
          >
            <Text textAlign="center" color={currencyColor ? currencyColor : ''}>
              {currency}
            </Text>
          </Flex>
        )}
      </Flex>
      {!!errors && (
        <FormErrorMessage color={errorColor}>{errors.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};
export const AppInput = forwardRef(InputBase);
