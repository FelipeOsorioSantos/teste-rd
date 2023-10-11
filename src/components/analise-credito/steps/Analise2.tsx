import {
  Button,
  Flex,
  Image,
  Modal,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { postCreateLoan } from '../../../api/credit';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';
import { maskCNPJ, maskCPF } from '../../../utils/mask-cpf';
import { maskCurrency, unmaskCurrency } from '../../../utils/mask-currency';
import { maskDate } from '../../../utils/mask-date';
import { maskPhone } from '../../../utils/mask-phone';
import { LogoShopbanx } from '../../LogoShopbanx';
import { AppCheckbox } from '../../_app/AppCheckbox';
import { AppInput } from '../../_app/AppInput';
import { AppSelect } from '../../_app/AppSelect';
import { ModalPolitica } from '../modals/ModalPolitica';
import { ModalSCR } from '../modals/ModalSCR';
import { ModalSubmit, SubmitStatus } from '../modals/ModalSubmit';
import { ModalTermos } from '../modals/ModalTermos';
import { validacaoAnaliseCredito } from '../validation';
import { useRouter } from 'next/router';

// initial state for checkbox
const authOptionsInitial = {
  authPolicy: false,
  authTerms: false,
  authSCR: false,
};

// initial error/loading status for submit modal
const submitStatusInicial: SubmitStatus = {
  message: '',
  error: false,
  loading: false,
  status: 0,
};

//options for vinculos
const vinculosOptions = [
  {
    value: 'Sócio',
    label: 'Sócio',
  },

  {
    value: 'Amigo',
    label: 'Amigo',
  },
  {
    value: 'Familiar',
    label: 'Familiar',
  },
  {
    value: 'Outro',
    label: 'Outro',
  },
];

export const Analise2 = () => {
  const router = useRouter();

  //states
  const [authOptions, setAuthOptions] = useState(authOptionsInitial);
  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>(submitStatusInicial);

  //stores
  const { setAnaliseCreditoStep, analiseCreditoForm } =
    useAnaliseCreditoStore();

  //hooks
  const isLargerThan768 = useWindowSize();
  const {
    formState: { errors, isValid },
    register,
    watch,
    trigger,
    setValue,
  } = useForm({
    resolver: yupResolver(validacaoAnaliseCredito),
  });

  //rdSCript
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/ef2d90e5-b3c3-48cb-ba0a-d1748f602137-loader.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  //modals
  const submitModal = useDisclosure();
  const scrModal = useDisclosure();
  const politicaModal = useDisclosure();
  const termosModal = useDisclosure();

  const formLog = watch();
  const hasAcceptedEverything = Object.values(authOptions).every(
    (x) => x !== false,
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedValidate = useCallback(
    debounce((field: string) => trigger(field), 300),
    [],
  );

  const formDisabled = !isValid || !hasAcceptedEverything;

  // handlers
  const handleSubmit = async () => {
    const submitObj = {
      create_pj_data: {
        accept_terms_sign_up: hasAcceptedEverything,
        cnpj: formLog.cnpj,
        commercial_phone: formLog.celular,
        company_name: formLog.nome_empresa,
        email: formLog.email_empresa,
        facebook: formLog.facebook_empresa,
        instagram: formLog.instagram_empresa,
        fantasy_name: formLog.fantasia_empresa,
        foundation_year: formLog.data_fundacao,
        monthly_revenue: unmaskCurrency(formLog.faturamento_mensal),
        responsible_cpf: formLog.cpf,
        responsible_name: formLog.nome,
        executive_name: formLog.nome_executivo
          ? formLog.nome_executivo
          : router.pathname == '/justa'
            ? 'Justa'
            : null,
      },
      loan_value: analiseCreditoForm!.valor,
      loan_term: 24,
      loan_reason: analiseCreditoForm!.motivo,
      applicant_vinculo: formLog.vinculo,
    };

    setSubmitStatus({
      ...submitStatusInicial,
      loading: true,
    });
    submitModal.onOpen();

    const response = await postCreateLoan(submitObj);
    setSubmitStatus({ ...response, loading: false });
    // if (response.status === 500) {
    //   setSubmitingStatus({
    //     message: response.message,
    //     error: true,
    //     loading: false,
    //   });
    // } else
    //   setSubmitingStatus({
    //     message: 'Solicitação enviada com sucesso!',
    //     error: false,
    //     loading: false,
    //   });
  };

  const handleGoBack = () => {
    setAnaliseCreditoStep(1);
  };

  // useEffect(() => {
  //   submitModal.onOpen();
  // });
  const colorDark = router.pathname == '/justa' ? '#004378' : 'primary.dark';
  const colorBase = router.pathname == '/justa' ? '#004378' : 'primary.base';

  return (
    <Flex maxH="100vh" py="32px">
      <form onSubmit={handleSubmit}>
        <Flex
          w="100%"
          maxW={isLargerThan768 ? '384px' : '100%'}
          bg="white"
          direction="column"
          borderRadius="8px"
          p="24px"
          overflowY="scroll"
          justifyContent={isLargerThan768 ? '' : 'space-between'}
          sx={{
            webkitScrollbar: {
              display: 'none',
            },
            msOverflowStyle: 'none' /* IE and Edge */,
            scrollbarWidth: 'none' /* Firefox */,
          }}
        >
          {router.pathname == '/justa' ? (
            <Flex gap={4}>
              <Flex maxW="35%" mb="16px">
                <Image src="./images/Logo_Justa.png" alt="Logotipo Justa" />
              </Flex>
              <LogoShopbanx />
            </Flex>
          ) : (
            <LogoShopbanx />
          )}

          {/*titulo*/}
          <Flex>
            <Text
              as="strong"
              fontSize={isLargerThan768 ? '20px' : '16px'}
              lineHeight="120%"
              color={colorDark}
            >
              Complete seus dados de cadastro
            </Text>
          </Flex>

          {/*form options*/}
          {/*Empresa*/}
          <Text as="strong" mt="16px">
            Dados da empresa
          </Text>

          <Flex direction="column" gap="16px" mt="16px">
            {/*empresa email*/}
            <AppInput
              id='email_empresa'
              maxLength={250}
              type="email"
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('email_empresa')}
              errors={errors['email_empresa']}
              onChange={(e) => {
                setValue('email_empresa', e.target.value);
                debouncedValidate('email_empresa');
              }}
              label="Email"
              name="email_empresa"
            />

            {/*empresa cnpj*/}
            <AppInput
              id='cnpj'
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('cnpj')}
              errors={errors['cnpj']}
              label="CNPJ"
              name="cnpj"
              maxLength={18}
              onChange={(e) => {
                setValue('cnpj', maskCNPJ(e.target.value));
                debouncedValidate('cnpj');
              }}
            />

            {/*empresa fundacao*/}
            <AppInput
              id='data_fundacao'
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('data_fundacao')}
              errors={errors['data_fundacao']}
              label="Data de fundação"
              name="data_fundacao"
              maxLength={10}
              onChange={(e) => {
                setValue('data_fundacao', maskDate(e.target.value));
                debouncedValidate('data_fundacao');
              }}
            />

            {/*empresa faturamento mensal*/}
            <Flex direction="column">
              <AppInput
                id='faturamento_mensal'
                maxLength={20}
                type="text"
                currency="R$"
                bgColor="white"
                errorColor="error.base"
                borderColor="neutral.dark"
                labelColor="content.dark"
                _placeholder={{
                  opacity: 0.4,
                }}
                {...register('faturamento_mensal')}
                errors={errors['faturamento_mensal']}
                label="Faturamento mensal *"
                name="faturamento_mensal"
                onChange={(e) => {
                  setValue('faturamento_mensal', maskCurrency(e.target.value));
                  debouncedValidate('faturamento_mensal');
                }}
              />
              <Text
                fontSize="12px"
                opacity="0.4"
                mt="4px"
                color={isLargerThan768 ? 'content.dark' : 'white'}
              >
                * Comprovado em conta PJ.
              </Text>
            </Flex>

            {/*empresa instagram*/}
            <AppInput
              maxLength={250}
              type="text"
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              placeholder="Digite aqui (Opcional)"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('instagram_empresa')}
              errors={errors['instagram_empresa']}
              onChange={(e) => {
                setValue('instagram_empresa', e.target.value);
                debouncedValidate('instagram_empresa');
              }}
              label="Instagram"
              name="instagram_empresa"
              id='instagram_empresa'
            />

            {/*facebook instagram*/}
            <AppInput
              maxLength={250}
              type="text"
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              placeholder="Digite aqui (Opcional)"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('facebook_empresa')}
              errors={errors['facebook_empresa']}
              onChange={(e) => {
                setValue('facebook_empresa', e.target.value);
                debouncedValidate('facebook_empresa');
              }}
              label="Facebook"
              name="facebook_empresa"
              id='facebook_empresa'
            />
            {/*fim*/}
          </Flex>

          {/*solicitante*/}
          <Text as="strong" mt="16px">
            Dados do solicitante
          </Text>
          <Flex direction="column" gap="16px" mt="16px">
            {/*solicitante nome*/}
            <AppInput
              maxLength={250}
              type="text"
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              placeholder="Nome completo"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('nome')}
              errors={errors['nome']}
              label="Nome"
              name="nome"
              id='nome'
              onChange={(e) => {
                setValue('nome', e.target.value);
                debouncedValidate('nome');
              }}
            />

            {/*solicitante celular*/}
            <AppInput
              autoComplete="off"
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              placeholder="(11) 91234-5678"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('celular')}
              errors={errors['celular']}
              label="Celular"
              name="celular"
              id='celular'
              onChange={(e) => {
                setValue('celular', maskPhone(e.target.value));
                debouncedValidate('celular');
              }}
              maxLength={15}
            />

            {/*solicitante cpf*/}
            <AppInput
              bgColor="white"
              errorColor="error.base"
              borderColor="neutral.dark"
              labelColor="content.dark"
              placeholder="123.456.768-99"
              _placeholder={{
                opacity: 0.4,
              }}
              {...register('cpf')}
              errors={errors['cpf']}
              label="CPF"
              name="cpf"
              id='cpf'
              onChange={(e) => {
                setValue('cpf', maskCPF(e.target.value));
                debouncedValidate('cpf');
              }}
            />

            {/*solicitante vinculo*/}
            <AppSelect
              placeholder="Escolha um..."
              label="Vínculo com a empresa"
              options={vinculosOptions}
              onChange={(value) => {
                setValue('vinculo', value.value);
                debouncedValidate('vinculo');
              }}
            />

            {/*fim*/}
          </Flex>

          {/*executivo*/}
          <Text as="strong" mt="24px">
            Foi auxiliado por um executivo Shopbanx?
          </Text>
          {router.pathname != '/justa' && (
            <Flex direction="column" gap="16px" mt="16px" mb="8px">
              <AppInput
                maxLength={250}
                type="text"
                bgColor="white"
                errorColor="error.base"
                borderColor="neutral.dark"
                labelColor="content.dark"
                placeholder="Digite aqui o nome do executivo (opcional)"
                _placeholder={{
                  opacity: 0.4,
                }}
                {...register('nome_executivo')}
                errors={errors['nome_executivo']}
                label="Nome do executivo"
                name="nome_executivo"
                id='nome_executivo'
                onChange={(e) => {
                  setValue('nome_executivo', e.target.value);
                  debouncedValidate('nome_executivo');
                }}
              />
            </Flex>
          )}

          {/*checkbox options*/}
          <Flex direction="column" mt="16px" gap="16px">
            {/*politica*/}
            <Flex gap="8px">
              <AppCheckbox
                borderColor={colorBase}
                bgColorSelected={colorBase}
                iconColor="white"
                selected={authOptions.authPolicy}
                onClick={() =>
                  setAuthOptions((prev) => ({
                    ...prev,
                    authPolicy: !prev.authPolicy,
                  }))
                }
              />
              <Text fontSize="12px" color="neutral.dark">
                Li e concordo com a{' '}
                <Text
                  as="span"
                  color={colorDark}
                  cursor="pointer"
                  onClick={politicaModal.onOpen}
                >
                  Política de Privacidade
                </Text>
                .
              </Text>
            </Flex>

            {/*termos*/}
            <Flex gap="8px">
              <AppCheckbox
                borderColor={colorBase}
                bgColorSelected={colorBase}
                iconColor="white"
                selected={authOptions.authTerms}
                onClick={() =>
                  setAuthOptions((prev) => ({
                    ...prev,
                    authTerms: !prev.authTerms,
                  }))
                }
              />
              <Text color="neutral.dark" fontSize="12px">
                Li e concordo com os{' '}
                <Text
                  as="span"
                  color={colorDark}
                  cursor="pointer"
                  onClick={termosModal.onOpen}
                >
                  Termos de Uso
                </Text>
                .
              </Text>
            </Flex>

            {/*scr*/}
            <Flex gap="8px">
              <AppCheckbox
                borderColor={colorBase}
                bgColorSelected={colorBase}
                iconColor="white"
                minW="16px"
                selected={authOptions.authSCR}
                onClick={() =>
                  setAuthOptions((prev) => ({
                    ...prev,
                    authSCR: !prev.authSCR,
                  }))
                }
              />
              <Text color="neutral.dark" fontSize="12px">
                Autorizo a consulta das informações presentes no{' '}
                <Text
                  as="span"
                  color={colorDark}
                  cursor="pointer"
                  onClick={scrModal.onOpen}
                >
                  Sistema de Informações de Crédito (SCR)
                </Text>
                , bem como da minha agenda de recebíveis em qualquer sistema
                gerido por registradoras autorizadas pelo Banco Central do
                Brasil.
              </Text>
            </Flex>
          </Flex>

          {/*modals*/}
          {/*modal submit*/}
          <Modal
            isOpen={submitModal.isOpen}
            // isOpen={true}
            closeOnOverlayClick={false}
            onClose={submitModal.onClose}
            isCentered
          >
            <ModalSubmit
              onClose={submitModal.onClose}
              submitStatus={submitStatus}
            />
          </Modal>

          {/*modal politica*/}
          <Modal isOpen={politicaModal.isOpen} onClose={politicaModal.onClose}>
            <ModalPolitica onClose={politicaModal.onClose} />
          </Modal>

          {/*modal termos*/}
          <Modal isOpen={termosModal.isOpen} onClose={termosModal.onClose}>
            <ModalTermos onClose={termosModal.onClose} />
          </Modal>

          {/*modal scr*/}
          <Modal isOpen={scrModal.isOpen} onClose={scrModal.onClose}>
            <ModalSCR onClose={scrModal.onClose} />
          </Modal>

          {/*submit*/}
          <Button
            type='submit'
            mt={isLargerThan768 ? '32px' : '40px'}
            w="100%"
            bgColor={colorBase}
            color="white"
            fontSize="14px"
            borderRadius={8}
            gap="8px"
            onClick={() => handleSubmit()}
            _hover={{
              bgColor: { colorDark },
            }}
            isDisabled={formDisabled}
            id="continuar"
          >
            <Text as="strong">Continuar</Text>
          </Button>

          {/*voltar*/}
          <Button
            mt="16px"
            bgColor="neutral.white"
            color={colorBase}
            border="2px solid "
            fontSize="14px"
            borderRadius={8}
            _disabled={{
              borderColor: 'neutral.lighter',
              color: 'neutral.dark',
              pointerEvents: 'none',
              cursor: 'not-allowed',
            }}
            onClick={() => {
              handleGoBack();
            }}
            _hover={{ color: { colorDark } }}
            id="voltar_form"
          >
            <Text as="strong">Voltar</Text>
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
