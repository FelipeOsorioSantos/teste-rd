import { object, string } from 'yup';
import { convertCurrencyNumber } from '../../utils/convert-currency-number';
import { validateDate } from '../../utils/validate-date';
import { validateCNPJ, validateCPF } from '../../utils/validateCPFCNPJ';

const phoneNumberRegex = /[\(]?[0-9]{2}[\)]?[\s]?[0-9]{5}[\-]?[0-9]{4}/;
const birthdayRegex = /[0-9]{2}[\/]?[0-9]{2}[\/]?[0-9]{4}/;

export const validacaoAnaliseCredito = object({
  email_empresa: string()
    .email('Insira um email válido.')
    .required('Campo obrigatório.'),
  cnpj: string()
    .required('Campo obrigatório.')
    .test('global-ok', 'CNPJ Inválido.', (value) => validateCNPJ(value)),
  // fantasia_empresa: string().required('Campo obrigatório.'),
  // nome_empresa: string().required('Campo obrigatório.'),
  data_fundacao: string()
    .required('Campo obrigatório.')
    .matches(birthdayRegex, 'Data inválida.')
    .test('global-ok', 'Data inválida.', (value) => validateDate(value)),
  faturamento_mensal: string().test(
    'global-ok',
    'Campo obrigatório.',
    (value) => convertCurrencyNumber(value) > 0,
  ),
  // custos_mensal: string().test(
  //   'global-ok',
  //   'Campo obrigatório.',
  //   (value) => convertCurrencyNumber(value) > 0,
  // ),
  nome: string().required('Campo obrigatório.'),
  // email_solicitante: string()
  //   .email('Insira um email válido.')
  //   .required('Campo obrigatório.'),
  telefone: string()
    .required('Campo obrigatório.')
    .matches(phoneNumberRegex, 'Formato de celular inválido.'),
  cpf: string()
    .required('Campo obrigatório.')
    .test('global-ok', 'CPF Inválido.', (value) => validateCPF(value)),
  // profissao: string().required('Campo obrigatório.'),
});
