/** @format */

export const validateHouseNumber = (houseNumber) => {
  const houseNumberRegex = /(?!^\d+$)^.+$/;
  return houseNumberRegex.test(houseNumber);
};
