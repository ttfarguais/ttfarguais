const isValidEmail = (email) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regexEmail.test(email);
};

const isValidPhoneNumber = (tel) => {
  const regexPhoneNumber = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
  return regexPhoneNumber.test(tel);
};


export { isValidEmail, isValidPhoneNumber };
