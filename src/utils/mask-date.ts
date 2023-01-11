const monthsWith30Days = ['04', '06', '09', '11'];

//input 31081991
//output 31/08/1991

const isLeapYear = (year: number) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    false;
  }
};

export const maskDate = (value: string) => {
  if (value) {
    const date = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2');

    if (date.length > 9) {
      let dia = date.split('/')[0];
      let mes = date.split('/')[1];
      let ano = date.split('/')[2];
      let diaNo = new Number(dia);
      let mesNo = new Number(mes);
      let anoNo = new Number(ano);

      if (mesNo > 12) mes = '12';
      if (diaNo > 31) dia = '31';

      if (monthsWith30Days.includes(mes) && diaNo > 30) {
        dia = '30';
      }
      if (mes === '02' && diaNo >= 29) {
        dia = '28';
        if (isLeapYear(Number(ano))) {
          dia = '29';
        }
      }

      return `${dia}/${mes}/${ano}`;
    } else return date;
  }
};
export const maskDateSubmit = (value: string) => {
  if (value) {
    let dia = value.split('/')[0];
    let mes = value.split('/')[1];
    let ano = value.split('/')[2];
    return new Date(`${ano}-${mes}-${dia}`);
  }
};
