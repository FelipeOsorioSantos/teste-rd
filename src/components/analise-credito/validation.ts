import { object, string } from 'yup';
import { convertCurrencyNumber } from '../../utils/convert-currency-number';
import { validateDate } from '../../utils/validate-date';
import { validateCNPJ, validateCPF } from '../../utils/validateCPFCNPJ';

const phoneNumberRegex = /[\(]?[0-9]{2}[\)]?[\s]?[0-9]{5}[\-]?[0-9]{4}/;
const birthdayRegex = /[0-9]{2}[\/]?[0-9]{2}[\/]?[0-9]{4}/;

export const validacaoAnaliseCredito = object({
  //dados empresa
  email_empresa: string()
    .email('Insira um email válido.')
    .required('Campo obrigatório.'),
  cnpj: string()
    .required('Campo obrigatório.')
    .test('global-ok', 'CNPJ Inválido.', (value) => validateCNPJ(value)),
  data_fundacao: string()
    .required('Campo obrigatório.')
    .matches(birthdayRegex, 'Data inválida.')
    .test('global-ok', 'Data inválida.', (value) => validateDate(value)),
  faturamento_mensal: string().test(
    'global-ok',
    'Campo obrigatório.',
    (value) => convertCurrencyNumber(value) > 0,
  ),
  //dados solicitante
  nome: string().required('Campo obrigatório.'),
  celular: string()
    .required('Campo obrigatório.')
    .matches(phoneNumberRegex, 'Formato de celular inválido.'),
  cpf: string()
    .required('Campo obrigatório.')
    .test('global-ok', 'CPF Inválido.', (value) => validateCPF(value)),
  vinculo: string().required(),
});
