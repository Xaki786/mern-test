/** @format */

import { CreditCardModel } from "../db/models/creditCardModel.js";

export const saveCreditCardToDb = async (creditCardInfo) => {
  try {
    const creditCard = new CreditCardModel(creditCardInfo);
    const savedCreditCardInfo = await creditCard.save();
    return {
      success: true,
      data: { id: savedCreditCardInfo._id },
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Error saving data",
      data: null,
    };
  }
};
