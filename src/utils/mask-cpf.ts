export const maskCPF = (cpf?: string) => {
  if (cpf) {
    return cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  }
  return cpf as string;
};

export const maskCNPJ = (cnpj?: string) => {
  if (cnpj) {
    return cnpj
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2');
  }

  return cnpj;
};
