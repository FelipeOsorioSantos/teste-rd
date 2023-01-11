export const convertCurrencyNumber = (str?: string): number => {
  const result = str?.replaceAll('.', '').replace(',', '.');
  return Number(result);
};
