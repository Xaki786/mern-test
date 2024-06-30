/** @format */
import "dotenv/config";
import { logger } from "./logger.js";
const creditCardCache = new Map();
const CACHE_EXPIRATION_TIME = 36000;

const cleanUpCache = () => {
  const now = Date.now();
  for (const [key, value] of creditCardCache) {
    if (value.expiration < now) {
      logger.log("Clearing cache", key);
      creditCardCache.delete(key);
    }
  }
};

export const validateCreditCardNumber = async (creditCardNumber) => {
  const apiUrl = process.env.CREDIT_CARD_VALIDATION_API_URL;
  const apiKey = process.env.CREDIT_CARD_VALIDATION_API_KEY;

  cleanUpCache();

  if (creditCardCache.has(creditCardNumber)) {
    return creditCardCache.get(creditCardNumber).result;
  }
  try {
    const creditCardValidationUrl = `${apiUrl}?api_key=${apiKey}&number=${creditCardNumber}`;
    const response = await fetch(creditCardValidationUrl);
    const result = await response.json();

    if (!result.valid) {
      const errorResponse = {
        success: false,
        error: "Invalid credit card number",
      };
      creditCardCache.set(creditCardNumber, {
        result: errorResponse,
        expiration: Date.now() + CACHE_EXPIRATION_TIME,
      });
      return errorResponse;
    }
    const successResponse = { success: true, error: null };
    creditCardCache.set(creditCardNumber, {
      result: successResponse,
      expiration: Date.now() + CACHE_EXPIRATION_TIME,
    });
    return successResponse;
  } catch (error) {
    return {
      success: false,
      error: "Error validating credit card number",
      data: null,
    };
  }
};
