import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';
import { maskCurrency, unmaskCurrency } from '../../../utils/mask-currency';
import { LogoShopbanx } from '../../LogoShopbanx';
import { AppInput } from '../../_app/AppInput';
import { AppRadio } from '../../_app/AppRadio';

const options = [
  {
    id: 'expansao',
    desc: 'Expansão da empresa',
  },

  {
    id: 'giro',
    desc: 'Capital de giro',
  },
  {
    id: 'estoque',
    desc: 'Compra de estoque',
  },
  {
    id: 'refinanciamento',
    desc: 'Refinanciamento',
  },
];

export const Analise1 = () => {
  const { setAnaliseCreditoForm, setAnaliseCreditoStep } =
    useAnaliseCreditoStore();
  const [value, setValue] = useState<string>('10.000,00');

  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    desc: string;
  }>({ id: '', desc: '' });
  const isLargerThan768 = useWindowSize();

  const handleValue = (method: string) => {
    if (method === 'add') {
      setValue((prev) => {
        const result = (unmaskCurrency(prev) + 1000) * 100;
        return maskCurrency(result.toFixed());
      });
    } else if (method === 'subtract' && unmaskCurrency(value) > 10000) {
      setValue((prev) => {
        const result = (unmaskCurrency(prev) - 1000) * 100;
        if (result <= 0) {
          return maskCurrency('0,00');
        } else return maskCurrency(result.toFixed());
      });
    }
  };

  const formDisabled =
    unmaskCurrency(value) < 10000 ||
    value === '0,00' ||
    selectedOption.desc.length < 4;

  const handleSubmit = () => {
    setAnaliseCreditoForm({
      valor: unmaskCurrency(value),
      motivo: selectedOption.desc,
    });
    setAnaliseCreditoStep(2);
  };

  const isOutrosSelected = selectedOption.id === 'outros';

  return (
    <Flex
      w="100%"
      maxW={isLargerThan768 ? '384px' : '100%'}
      bg="white"
      direction="column"
      borderRadius="8px"
      mt={isLargerThan768 ? '0px' : '72px'}
      p="24px"
    >
      <LogoShopbanx />
      {/*title*/}
      <Flex>
        <Text
          mt={isLargerThan768 ? '0px' : '24px'}
          as="strong"
          fontSize={isLargerThan768 ? '20px' : '28px'}
          lineHeight="120%"
          color="primary.dark"
        >
          Simule uma avialiação de crédito e receba sua proposta!
        </Text>
      </Flex>

      {/*form options*/}
      <Flex direction="column">
        {/*input value*/}
        <Flex
          mt={isLargerThan768 ? '16px' : '56px'}
          direction="column"
          bg="primary.dark"
          borderRadius="8px"
          color="white"
          p="16px"
          pb="32px"
          w="100%"
          boxShadow="0px 16px 32px rgba(0, 0, 0, 0.16)"
        >
          <Text textStyle="medium">Eu preciso de</Text>
          <Flex
            fontFamily="Avenir-Black"
            fontSize="24px"
            justifyContent="space-between"
            w="100%"
            gap="24px"
            mt="32px"
          >
            <Flex onClick={() => handleValue('subtract')} cursor="pointer">
              <Text fontSize="24px">-</Text>
            </Flex>
            <Flex justifyContent="center" borderBottom="1px solid white">
              <Text>R$</Text>
              <Input
                border="none"
                sx={{ fontSize: '24px' }}
                textAlign="center"
                _focusVisible={{ border: 'none' }}
                value={value || '0.00'}
                onChange={(e) => {
                  setValue(maskCurrency(e.target.value));
                }}
              />
            </Flex>
            <Flex onClick={() => handleValue('add')} cursor="pointer">
              <Text fontSize="24px">+</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          fontSize="10px"
          pt="8px"
          // justifyContent="flex-end"
          // pr="8px"
          pl="4px"
          opacity="0.6"
        >
          <Text>Valor mínimo da solicitação R$10.000,00</Text>
        </Flex>

        {/*radio options*/}
        <Flex
          textStyle="medium"
          direction="column"
          gap="8px"
          mt="32px"
          fontSize="14px"
        >
          <Text>Motivo da solicitação</Text>
          {options.map((o) => (
            <Flex key={`${o.id}`} alignItems="center" gap="4px">
              <AppRadio
                borderColor="primary.dark"
                selected={o === selectedOption}
                onClick={() => setSelectedOption(o)}
              />
              <Text>{o.desc}</Text>
            </Flex>
          ))}
          <Flex direction="column" gap="8px">
            <Flex alignItems="center" gap="4px">
              <AppRadio
                borderColor="primary.dark"
                selected={isOutrosSelected}
                onClick={() => setSelectedOption({ id: 'outros', desc: '' })}
              />
              <Text>Outros</Text>
            </Flex>
            {isOutrosSelected && (
              <AppInput
                name="outros-desc"
                value={selectedOption.desc}
                placeholder="Digite o motivo"
                onChange={(e) =>
                  setSelectedOption({ id: 'outros', desc: e.target.value })
                }
              />
            )}
          </Flex>
        </Flex>
      </Flex>

      {/*submit*/}
      <Button
        mt="32px"
        w="100%"
        bgColor="primary.base"
        color="white"
        fontSize="14px"
        borderRadius={8}
        gap="8px"
        onClick={() => handleSubmit()}
        _hover={{
          bgColor: 'primary.dark',
        }}
        disabled={formDisabled}
      >
        <Text as="strong">Simule</Text>
      </Button>
    </Flex>
  );
};
