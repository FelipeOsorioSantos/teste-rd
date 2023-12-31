export const checkPassword = (password: string) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,20}$/;
  if (!password.match(passwordRegex)) {
    return false;
  }
  return true;
};
