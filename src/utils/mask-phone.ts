//input  11989897676
//output (11) 98989 - 7676

export const maskPhone = (value: string) => {
  return (
    value &&
    value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
  );
};

//input (11) 98989 - 7676
//output 11989897676
export const unmaskPhone = (value: string) => {
  return value.replace(/[^\d]/g, '');
};
