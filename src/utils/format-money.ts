export const formatMoney = (num: number) => {
  return (
    num &&
    num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  );
};
