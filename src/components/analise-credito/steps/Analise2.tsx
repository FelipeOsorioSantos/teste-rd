import { Button, Flex, Modal, Text, useDisclosure } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { postCreateLoan } from '../../../api/credit';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAnaliseCreditoStore } from '../../../store/useAnaliseCreditoStore';
import { maskCNPJ, maskCPF } from '../../../utils/mask-cpf';
import { maskCurrency, unmaskCurrency } from '../../../utils/mask-currency';
import { maskDate } from '../../../utils/mask-date';
import { maskPhone } from '../../../utils/mask-phone';
import { AppCheckbox } from '../../_app/AppCheckbox';
import { AppInput } from '../../_app/AppInput';
import { AppSelect } from '../../_app/AppSelect';
import { ModalPolitica } from '../modals/ModalPolitica';
import { ModalSCR } from '../modals/ModalSCR';
import { ModalSubmit, SubmitingStatus } from '../modals/ModalSubmit';
import { ModalTermos } from '../modals/ModalTermos';
import { validacaoAnaliseCredito } from '../validation';

// initial state for checkbox
const authOptionsInitial = {
  authPolicy: false,
  authTerms: false,
  authSCR: false,
};

// initial error/loading status for submit modal
const submitingStatusInicial: SubmitingStatus = {
  message: '',
  error: false,
  loading: false,
};

//options for relationship

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
  //states
  const [authOptions, setAuthOptions] = useState(authOptionsInitial);
  const [submitingStatus, setSubmitingStatus] = useState<SubmitingStatus>(
    submitingStatusInicial,
  );

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

  //modals
  const submitModal = useDisclosure();
  const scrModal = useDisclosure();
  const politicaModal = useDisclosure();
  const termosModal = useDisclosure();

  // form logic
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
        commercial_phone: formLog.telefone,
        company_name: formLog.nome_empresa,
        email: formLog.email_empresa,
        fantasy_name: formLog.fantasia_empresa,
        foundation_year: formLog.data_fundacao,
        monthly_revenue: unmaskCurrency(formLog.faturamento_mensal),
        responsible_cpf: formLog.cpf,
        responsible_name: formLog.nome,
        responsible_occupation: formLog.profissao,
      },
      loan_value: analiseCreditoForm!.valor,
      loan_term: 36,
      loan_reason: analiseCreditoForm!.motivo,
      applicant_vinculo: formLog.vinculo,
    };

    console.log(submitObj);

    // console.log(submitObj);
    setSubmitingStatus({ message: '', error: false, loading: true });
    submitModal.onOpen();
    const response = await postCreateLoan(submitObj);
    if (response.status === 500) {
      setSubmitingStatus({
        message: response.message,
        error: true,
        loading: false,
      });
    } else
      setSubmitingStatus({
        message: 'Solicitação enviada com sucesso!',
        error: false,
        loading: false,
      });
  };

  const handleGoBack = () => {
    setAnaliseCreditoStep(1);
  };

  return (
    <Flex maxH="100vh" py="32px">
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
        {/*title*/}
        <Flex>
          <Text
            as="strong"
            fontSize={isLargerThan768 ? '20px' : '16px'}
            lineHeight="120%"
            color="primary.dark"
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
          {/*Empresa Email*/}
          <AppInput
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

          {/*Empresa CNPJ*/}
          <AppInput
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

          {/*Empresa Nome*/}
          {/* <AppInput
            bgColor="white"
            errorColor="error.base"
            borderColor="neutral.dark"
            labelColor="content.dark"
            _placeholder={{
              opacity: 0.4,
            }}
            {...register('nome_empresa')}
            errors={errors['nome_empresa']}
            label="Nome da empresa"
            name="nome_empresa"
            maxLength={18}
            onChange={(e) => {
              setValue('nome_empresa', e.target.value);
              debouncedValidate('nome_empresa');
            }}
          /> */}

          {/*Empresa Fantasia*/}
          {/* <AppInput
            bgColor="white"
            errorColor="error.base"
            borderColor="neutral.dark"
            labelColor="content.dark"
            _placeholder={{
              opacity: 0.4,
            }}
            {...register('fantasia_empresa')}
            errors={errors['fantasia_empresa']}
            label="Nome Fantasia"
            name="fantasia_empresa"
            maxLength={18}
            onChange={(e) => {
              setValue('fantasia_empresa', e.target.value);
              debouncedValidate('fantasia_empresa');
            }}
          /> */}

          {/*Empresa Fundação*/}
          <AppInput
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

          {/*Empresa Faturamento Mensal*/}
          <Flex direction="column">
            <AppInput
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

          {/*Empresa Custos Mensal*/}
          {/* <AppInput
            currency="R$"
            currencyColor={isLargerThan768 ? '' : 'white'}
            bgColor={isLargerThan768 ? 'white' : 'none'}
            errorColor={isLargerThan768 ? 'error.base' : 'white'}
            color={isLargerThan768 ? '' : 'white'}
            borderColor={isLargerThan768 ? 'neutral.dark' : 'white'}
            labelColor={isLargerThan768 ? 'content.dark' : 'white'}
            _placeholder={{
              color: isLargerThan768 ? '' : 'white',
              opacity: 0.4,
            }}
            {...register('custos_mensal')}
            errors={errors['custos_mensal']}
            label="Custos médios mensais"
            name="custos_mensal"
            onChange={(e) => {
              setValue('custos_mensal', maskCurrency(e.target.value));
              debouncedValidate('custos_mensal');
            }}
          /> */}
          {/*fim*/}
        </Flex>

        {/*Solicitante*/}
        <Text as="strong" mt="16px">
          Dados do solicitante
        </Text>
        <Flex direction="column" gap="16px" mt="16px">
          {/*Solicitante Nome*/}
          <AppInput
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
            onChange={(e) => {
              setValue('nome', e.target.value);
              debouncedValidate('nome');
            }}
          />

          {/*Solicitante Telefone*/}
          <AppInput
            bgColor="white"
            errorColor="error.base"
            borderColor="neutral.dark"
            labelColor="content.dark"
            placeholder="Telefone"
            _placeholder={{
              opacity: 0.4,
            }}
            {...register('telefone')}
            errors={errors['telefone']}
            label="Telefone"
            name="telefone"
            onChange={(e) => {
              setValue('telefone', maskPhone(e.target.value));
              debouncedValidate('telefone');
            }}
            maxLength={15}
          />

          {/*Solicitante CPF*/}
          <AppInput
            bgColor="white"
            errorColor="error.base"
            borderColor="neutral.dark"
            labelColor="content.dark"
            _placeholder={{
              opacity: 0.4,
            }}
            {...register('cpf')}
            errors={errors['cpf']}
            label="CPF"
            name="cpf"
            onChange={(e) => {
              setValue('cpf', maskCPF(e.target.value));
              debouncedValidate('cpf');
            }}
          />

          <AppSelect
            placeholder="Escolha um..."
            label="Vínculo com a empresa"
            options={vinculosOptions}
            onChange={(value) => {
              setValue('vinculo', value.value);
              debouncedValidate('vinculo');
            }}
          />

          {/*Solicitante Profissao*/}
          {/* <AppInput
            bgColor="white"
            errorColor="error.base"
            borderColor="neutral.dark"
            labelColor="content.dark"
            _placeholder={{
              opacity: 0.4,
            }}
            {...register('profissao')}
            errors={errors['profissao']}
            label="Profissão"
            name="profissao"
            onChange={(e) => {
              setValue('profissao', e.target.value);
              debouncedValidate('profissao');
            }}
          /> */}

          {/*fim*/}
        </Flex>

        {/*checkbox options*/}
        <Flex direction="column" mt="16px" gap="16px">
          {/*policy*/}
          <Flex gap="8px">
            <AppCheckbox
              borderColor="primary.base"
              bgColorSelected="primary.base"
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
                color="primary.dark"
                cursor="pointer"
                onClick={politicaModal.onOpen}
              >
                Política de Privacidade
              </Text>
              .
            </Text>
          </Flex>

          {/*terms*/}
          <Flex gap="8px">
            <AppCheckbox
              borderColor="primary.base"
              bgColorSelected="primary.base"
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
                color="primary.dark"
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
              borderColor="primary.base"
              bgColorSelected="primary.base"
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
                color="primary.dark"
                cursor="pointer"
                onClick={scrModal.onOpen}
              >
                Sistema de Informações de Crédito (SCR)
              </Text>
              , bem como da minha agenda de recebíveis em qualquer sistema
              gerido por registradoras autorizadas pelo Banco Central do Brasil.
            </Text>
          </Flex>
        </Flex>

        {/*modals*/}

        <Modal
          isOpen={submitModal.isOpen}
          onClose={submitModal.onClose}
          isCentered
        >
          <ModalSubmit
            onClose={submitModal.onClose}
            submitingStatus={submitingStatus}
          />
        </Modal>

        <Modal isOpen={politicaModal.isOpen} onClose={politicaModal.onClose}>
          <ModalPolitica onClose={politicaModal.onClose} />
        </Modal>
        <Modal isOpen={termosModal.isOpen} onClose={termosModal.onClose}>
          <ModalTermos onClose={termosModal.onClose} />
        </Modal>
        <Modal isOpen={scrModal.isOpen} onClose={scrModal.onClose}>
          <ModalSCR onClose={scrModal.onClose} />
        </Modal>

        {/*submit*/}
        <Button
          mt={isLargerThan768 ? '32px' : '40px'}
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
          <Text as="strong">Continuar</Text>
        </Button>
        <Button
          mt="16px"
          bgColor="neutral.white"
          color="primary.base"
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
          _hover={{ color: 'primary.dark' }}
        >
          <Text as="strong">Voltar</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
