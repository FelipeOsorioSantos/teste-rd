import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';
import { maskCurrency, unmaskCurrency } from '../../../utils/mask-currency';
import { LogoShopbanx } from '../../LogoShopbanx';
import { AppInput } from '../../_app/AppInput';
import { AppRadio } from '../../_app/AppRadio';
import { LogoJusta } from '../../LogoJusta';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const { setAnaliseCreditoForm, setAnaliseCreditoStep } =
    useAnaliseCreditoStore();
  const [value, setValue] = useState<string>('10.000,00');
  const [allowed, setAllowed] = useState(false);
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
      checkValue(value);
    } else if (method === 'subtract' && unmaskCurrency(value) > 10000) {
      setValue((prev) => {
        const result = (unmaskCurrency(prev) - 1000) * 100;
        if (result <= 0) {
          return maskCurrency('0,00');
        } else return maskCurrency(result.toFixed());
      });
      checkValue(value);
    }
  };

  function handleValueChange(value: string) {
    checkValue(value);
    setValue(maskCurrency(value));
  }

  const isUnder10k = unmaskCurrency(value) < 10000;

  const formDisabled =
    isUnder10k || value === '0,00' || selectedOption.desc.length < 4;

  const handleSubmit = () => {
    const valueNumber = value.replace('.','').replace(',', '.')
    if (parseFloat(valueNumber) >= 10000) {
      setAllowed(false);
      setAnaliseCreditoForm({
        valor: unmaskCurrency(value),
        motivo: selectedOption.desc,
      });
      setAnaliseCreditoStep(2);
    }
  };

  function checkValue(value: string) {
    if (Number(value) < 10000) {
      setAllowed(false);
    } else {
      setAllowed(true);
    }
  }
  const colorDark = router.pathname == '/justa'? '#004378': 'primary.dark'
  const colorBase = router.pathname == '/justa' ? '#004378' : 'primary.base'
  const isOutrosSelected = selectedOption.id === 'outros';
  return (
    <Flex
      maxW={isLargerThan768 ? '384px' : '100%'}
      // maxW="384px"
      w="100%"
      bg="white"
      direction="column"
      borderRadius="8px"
      mt={isLargerThan768 ? '0px' : '72px'}
      p="24px"
    >
      {router.pathname == '/justa' 
        ?
          <LogoJusta />
        : <LogoShopbanx />
      }
      {/*title*/}
      {router.pathname == '/justa' ? 
      
      <Flex flexDir={'column'}>
        <Text
          mt={isLargerThan768 ? '0px' : '24px'}
          as="strong"
          fontSize={isLargerThan768 ? '20px' : '28px'}
          lineHeight="120%"
          color={colorDark}
        >
          Juntas para oferecer crédito de uma forma simples, rápida e sem burocracia!
        </Text>
        <Text
          mt={'16px'}
          fontSize={'20px'}
          lineHeight="120%"
          color={colorDark}
        >
          Simule uma avaliação de crédito e receba uma proposta!
        </Text>
      </Flex> : 
      <Flex>
        <Text
          mt={isLargerThan768 ? '0px' : '24px'}
          as="strong"
          fontSize={isLargerThan768 ? '20px' : '28px'}
          lineHeight="120%"
          color={colorDark}
        >
          Simule uma avaliação de crédito e receba sua proposta!
        </Text>
      </Flex>
      }

      {/*form options*/}
      <Flex direction="column">
        {/*input value*/}
        <Flex
          mt={isLargerThan768 ? '16px' : '56px'}
          direction="column"
          bg={colorDark}
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
                  handleValueChange(e.target.value);
                }}
              />
            </Flex>
            <Flex onClick={() => handleValue('add')} cursor="pointer">
              <Text fontSize="24px">+</Text>
            </Flex>
          </Flex>
        </Flex>
        {isUnder10k && (
          <Flex fontSize="12px" pt="8px" pl="4px">
            <Text color="error.base" as={'span'}>
              Valor mínimo da solicitação R$10.000,00
            </Text>
          </Flex>
        )}

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
                borderColor={colorDark}
                selected={o === selectedOption}
                onClick={() => setSelectedOption(o)}
              />
              <Text>{o.desc}</Text>
            </Flex>
          ))}
          <Flex direction="column" gap="8px">
            <Flex alignItems="center" gap="4px">
              <AppRadio
                borderColor={colorDark}
                selected={isOutrosSelected}
                onClick={() => setSelectedOption({ id: 'outros', desc: '' })}
              />
              <Text>Outros</Text>
            </Flex>
            {isOutrosSelected && (
              <AppInput
                maxLength={250}
                type="text"
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
        bgColor={colorBase}
        color="white"
        fontSize="14px"
        borderRadius={8}
        gap="8px"
        onClick={() => handleSubmit()}
        _hover={{
          bgColor: colorDark,
        }}
        // disabled={formDisabled}
        isDisabled={formDisabled}
        id="simule"
      >
        <Text as="strong">Simule</Text>
      </Button>
    </Flex>
  );
};
