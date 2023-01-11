import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DynamicIcon } from '../../DynamicIcon';

export type ISelectOption = { label?: string; value?: number | string };

interface AppSelectProps {
  label?: string;
  value?: ISelectOption;
  options: ISelectOption[];
  placeholder?: string;
  onChange: (value: ISelectOption) => void;
  disabled?: boolean;
  optionsFloat?: boolean;
}

export const AppSelect = ({
  label,
  value,
  options,
  onChange,
  placeholder,
  disabled = false,
  optionsFloat = false,
  ...otherProps
}: AppSelectProps & Omit<FlexProps, 'onChange'>) => {
  // sets the inital value to incomoing from props
  const initialValue = {
    label: value?.label || '',
    value: value?.value || '',
  };

  //create a state for the selected value
  const [selectedValue, setSelectedValue] =
    useState<ISelectOption>(initialValue);

  const [insidePlaceholder, setInsidePlaceholder] = useState<
    string | undefined
  >(placeholder);
  const [open, setOpen] = useState(false);

  //capture the value from options to onChange prop function
  useEffect(() => {
    onChange(selectedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const renderValue =
    value || options?.find((o) => o.value === selectedValue.value);

  return (
    <Flex
      direction="column"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      fontSize="14px"
      position="relative"
      {...otherProps}
    >
      {label && <Text fontSize="14px">{label}</Text>}
      <Flex
        onClick={() => {
          !disabled ? setOpen(!open) : null;
        }}
        border="1px solid"
        borderColor={
          open
            ? 'primary.dark'
            : selectedValue === initialValue
            ? 'neutral.base'
            : 'neutral.dark'
        }
        color={selectedValue === initialValue ? 'neutral.base' : 'content.dark'}
        borderRadius="8px"
        h="40px"
        px="8px"
        alignItems="center"
        justifyContent="space-between"
        opacity={disabled ? '0.6' : '1'}
      >
        <Text opacity={insidePlaceholder ? 0.4 : 1} mt="4px">
          {renderValue?.label || insidePlaceholder}
        </Text>
        <Flex
          color="content.light"
          transform={open ? 'rotate(180deg)' : 'rotate(0deg)'}
        >
          <DynamicIcon icon="chevron" />
        </Flex>
      </Flex>

      {/*options to select*/}
      {open && !disabled && (
        <Flex
          position={optionsFloat ? 'absolute' : 'static'}
          w="100%"
          direction="column"
          bg="white"
          borderRadius="8px"
          px="16px"
          mt={optionsFloat ? '42px' : '4px'}
          maxH="280px"
          overflowY="scroll"
          boxShadow="0px 4px 8px 0px #E3E5E5"
        >
          {options?.map((option, index) => (
            <Flex
              py="8px"
              alignItems="center"
              key={`${option.value}${index}`}
              onClick={() => {
                setSelectedValue(option);
                setInsidePlaceholder('');
                setOpen(false);
              }}
              borderBottom={index === options.length - 1 ? '0px' : '1px'}
              borderColor="neutral.light"
              _hover={{
                color: 'primary.base',
              }}
            >
              <Text>{option.label}</Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
