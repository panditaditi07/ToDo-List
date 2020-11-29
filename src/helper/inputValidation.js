export const isStringEmpty = (str) => {
  if (str === " ") {
    return false;
  } else {
    return true;
  }
};

export const isMarkup = (str) => {
  if (str.includes("<")) {
    return false;
  } else {
    return true;
  }
};
export const isNumber = (str) => {
  const number = /^[0-9]+$/;
  if (str.match(number)) {
    return false;
  } else {
    return true;
  }
};

export const isAlphaNumeric = (str) => {
  const alphanum = /^[A-Za-z ]+$/;
  if (str.match(alphanum)) {
    return true;
  } else {
    return false;
  }
};
const ValidationList = [isStringEmpty, isMarkup, isNumber, isAlphaNumeric];

export const isInputValid = (str) => {
  return ValidationList.every((fun) => {
    return fun(str);
  });
};
