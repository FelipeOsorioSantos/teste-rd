// mask currency

export const maskCurrency = (input: string): string => {
  //checks if number is not empty string and parses into number
  if (input !== '') {
    const number = parseFloat(input.replace(/[^0-9]/gi, '')) / 100;

    //format it to currency and remove R$ symbol
    const format = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
      .format(number)
      .replace('R$', '');

    // removes the extra space between the R$ symbol and number
    const reformat = format.split('');
    const result = reformat.slice(1).join('');

    // if the result turns into NaN returns 0
    if (isNaN(number)) {
      return '0,00';
    } else {
      return result;
    }
  }

  // otherwise returns 0,00
  else return '0,00';
};

export const unmaskCurrency = (input: string): number => {
  // if input is a string return its value to number
  if (typeof input === 'string') {
    const format = input && input.replaceAll('.', '').replace(',', '.');

    const toNumber = (parseFloat(format) * 100) / 100;
    if (isNaN(toNumber)) {
      return 0;
    }
    return toNumber;
  }
  //else it is already a number so return it
  else return input;
};
