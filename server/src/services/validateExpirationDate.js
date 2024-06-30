/** @format */

export const validateExpirationDate = (expirationDate) => {
  const [month, year] = expirationDate.split("/");
  const expirationTimestamp = new Date(`${year}-${month}-01`).getTime();
  const currentTimestamp = new Date().getTime();
  return expirationTimestamp > currentTimestamp;
};

export const getExpirationTimestamp = (expirationDate) => {
  const [month, year] = expirationDate.split("/");
  return new Date(`${year}-${month}-01`).getTime();
};
