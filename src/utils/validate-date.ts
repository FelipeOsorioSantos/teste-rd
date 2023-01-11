export const validateDate = (data?: string) => {
  // Ex: 10/01/1985
  if (data) {
    var regex = '\\d{2}/\\d{2}/\\d{4}';
    var dtArray = data.split('/');

    if (dtArray == null) return false;

    // Checks for dd/mm/yyyy format.
    var dtDay = Number(dtArray[0]);
    var dtMonth = Number(dtArray[1]);
    var dtYear = Number(dtArray[2]);

    if (dtMonth < 1 || dtMonth > 12) return false;
    else if (dtDay < 1 || dtDay > 31) return false;
    else if (
      (dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) &&
      dtDay == 31
    )
      return false;
    else if (dtMonth == 2) {
      var isleap = dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0);
      if (dtDay > 29 || (dtDay == 29 && !isleap)) return false;
    } else if (dtYear > new Date().getFullYear() || dtYear < 1800) {
      return false;
    }
    return true;
  } else return false;
};
