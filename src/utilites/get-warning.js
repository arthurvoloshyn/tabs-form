const getWarning = (header, phone) => {
  if (!header) {
    return 'Fill the required field: header';
  }

  if (!phone) {
    return 'Fill the required field: phone number';
  }

  return "Can't download more pictures than 5";
};

export default getWarning;
