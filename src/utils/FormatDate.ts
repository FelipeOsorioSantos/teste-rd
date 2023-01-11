const formater = (date: string[], time: string[]) => {
  const dayAndTime = {
    day: '',
    time: '',
  };

  dayAndTime.day = `${date[2]}/${date[1]}/${date[0]}`;
  dayAndTime.time = `${time[0]}:${time[1]}`;

  return dayAndTime;
};

export const formatDate = (date?: string) => {
  const today = new Date();
  const stringToday = today.toISOString();
  let insertDate;

  if (date) {
    insertDate = date.split('T');
  } else {
    insertDate = stringToday.split('T');
  }
  const onlyDate = insertDate[0].split('-');
  let onlyTime = insertDate[1].split('Z');
  onlyTime = onlyTime[0].split(':');
  return formater(onlyDate, onlyTime);
};

export const insertZeroToDate = (n: number) => {
  let ns = n.toString();
  if (n < 10) {
    return (ns = `0${n}`);
  } else {
    return ns;
  }
};

//input 2022-11-23T01:02:45.627Z
//output 23/11/2022 às 02:45

export const formatDateCredit = (date: string | Date | undefined) => {
  if(date !== undefined){
  const nd = new Date(date);
  const hour = insertZeroToDate(nd.getHours());
  const min = insertZeroToDate(nd.getMinutes());
  const day = insertZeroToDate(nd.getDate() + 1);
  const month = insertZeroToDate(nd.getMonth() + 1);
  const year = nd.getFullYear();

  const result = `${day}/${month}/${year} às ${hour}:${min}`;
  return result;}
};
