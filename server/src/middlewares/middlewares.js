/** @format */

export const validationMiddleware = (req, res, next) => {
  const body = req.body;
  const requiredFields = [
    "firstName",
    "lastName",
    "street",
    "houseNumber",
    "zipcode",
    "city",
    "region",
    "country",
    "creditCardNumber",
    "expirationDate",
    "cvc",
  ];
  const missingFields = [];
  for (const field of requiredFields) {
    if (!body[field]) {
      missingFields.push(field);
    }
  }
  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({
        success: false,
        error: `Missing fields: ${missingFields.join(", ")}`,
      });
  }
  return next();
};
