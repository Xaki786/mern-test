/** @format */

import {
  getExpirationTimestamp,
  saveCreditCardToDb,
  validateCreditCardNumber,
  validateExpirationDate,
  validateHouseNumber,
} from "../services/index.js";

export const creditCardController = {
  saveCreditCard: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        street,
        houseNumber,
        addressLine2,
        zipcode,
        city,
        region,
        country,
        creditCardNumber,
        expirationDate,
        cvc,
      } = req.body;

      if (!validateExpirationDate(expirationDate)) {
        return res.status(400).json({
          success: false,
          error: "Credit card expiration date is in the past",
        });
      }

      const expirationTimestamp = getExpirationTimestamp(expirationDate);

      if (!validateHouseNumber(houseNumber)) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid house number" });
      }

      const creditCardValidationResponse = await validateCreditCardNumber(
        creditCardNumber
      );

      if (!creditCardValidationResponse.success) {
        return res
          .status(400)
          .json({ success: false, error: creditCardValidationResponse.error });
      }

      const response = await saveCreditCardToDb({
        firstName,
        lastName,
        street,
        houseNumber,
        addressLine2,
        zipcode,
        city,
        region,
        country,
        creditCardNumber,
        expirationDate,
        expirationTimestamp,
        cvc,
      });
      if (!response.success) {
        return res
          .status(500)
          .json({ success: false, error: response.error, data: null });
      }
      return res
        .status(200)
        .json({ success: true, data: response.data, error: null });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },
};
