export function validateCNPJ(value?: string) {
  if (!value) return false;

  // Aceita receber o valor como string, número ou array com todos os dígitos
  const isString = typeof value === 'string';
  const validTypes =
    isString || Number.isInteger(value) || Array.isArray(value);

  // Elimina valor em formato inválido
  if (!validTypes) return false;

  // Filtro inicial para entradas do tipo string
  if (isString) {
    // Limita ao máximo de 18 caracteres, para CNPJ formatado
    if (value.length > 18) return false;

    // Teste Regex para veificar se é uma string apenas dígitos válida
    const digitsOnly = /^\d{14}$/.test(value);
    // Teste Regex para verificar se é uma string formatada válida
    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value);

    // Se o formato é válido, usa um truque para seguir o fluxo da validação
    if (digitsOnly || validFormat) true;
    // Se não, retorna inválido
    else return false;
  }

  // Guarda um array com todos os dígitos do valor
  const match = value.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : [];

  // Valida a quantidade de dígitos
  if (numbers.length !== 14) return false;

  // Elimina inválidos com todos os dígitos iguais
  const items = [...new Set(numbers)];
  if (items.length === 1) return false;

  // Cálculo validador
  const calc = (x: any) => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
  };

  // Separa os 2 últimos dígitos de verificadores
  const digits = numbers.slice(12);

  // Valida 1o. dígito verificador
  const digit0 = calc(12);
  if (digit0 !== digits[0]) return false;

  // Valida 2o. dígito verificador
  const digit1 = calc(13);
  return digit1 === digits[1];
}

export const validateCPF = (CPF: string | undefined) => {
  if (CPF === undefined) {
    return false;
  }
  if (CPF) {
    let sum = 0;
    let rest;

    if (!CPF.match('^[0-9]{3}(.)[0-9]{3}(.)[0-9]{3}(-)[0-9]{2}$')) {
      return false;
    }

    const strCPF = String(CPF).replace(/[^\d]/g, '');

    if (strCPF.length !== 11) {
      return false;
    }

    if (
      [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
      ].indexOf(strCPF) !== -1
    ) {
      return false;
    }

    for (let i = 1; i <= 9; i += 1)
      sum += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(strCPF.substring(9, 10), 10)) {
      return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i += 1)
      sum += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(strCPF.substring(10, 11), 10)) {
      return false;
    }
    return true;
  }
  return true;
};
