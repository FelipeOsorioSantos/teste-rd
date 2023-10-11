import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import InputMask from "react-input-mask";


interface AppInputProps {
  errors?: { message?: string };
  label?: string;
  mask?: string;
  placeholder?: string;
  name?: string
}

export const DashInput = forwardRef(({ errors, label, ...otherProps }: AppInputProps & InputProps, ref) => {
  return (
    <Input
      ref={ref as React.Ref<HTMLInputElement>}
      fontSize="12px"
      bg="#F3F3F3"
      fontFamily="Poppins-medium"
      borderRadius="0px"
      borderTop="none"
      borderX="none"
      bgColor="transparent"
      borderBottom="1px solid #A1A1A1"
      borderColor="#C3BFBF"
      type="text"
      color="#3a3a3a"
      _placeholder={{ opacity: 0.7 }}
      {...otherProps}
    />
  );
});

export const DashInputMask = forwardRef(({ errors, label, placeholder, name, ...otherProps }: AppInputProps & InputProps, ref) => {
  const [value, setValue] = useState("")
  const handleChange = (event: any) => setValue(event.target.value)
  return (
    <FormControl isInvalid={!!errors}>
      {!!label && <FormLabel htmlFor={name} mb={0} color='content.10' fontSize="14px">{label} </FormLabel>}
      <Input
        ref={ref as React.Ref<HTMLInputElement>}
        as={InputMask}
        bg="#F3F3F3"
        variant='flushed'
        focusBorderColor='primary.light'
        placeholder={placeholder}
        bgColor='white'
        borderColor={value.length > 2 ? 'neutral.dark' : "neutral.base"}
        onInput={handleChange}
        _hover={{ bgColor: 'white' }}
        _placeholder={{ opacity: 0.7 }}
        {...otherProps}
      />
      {!!errors && (
        <FormErrorMessage color="error.base" >
          {errors.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
});

DashInputMask.displayName = "DashInputMask";
DashInput.displayName = "DashInput";