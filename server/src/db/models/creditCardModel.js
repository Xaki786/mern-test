/** @format */
import { hash } from "bcrypt";
import mongoose from "mongoose";
const creditCardSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  houseNumber: String,
  addressLine2: String,
  zipcode: String,
  city: String,
  region: String,
  country: String,
  creditCardNumber: String,
  expirationDate: String,
  cvc: String,
});

creditCardSchema.pre("save", async function (next) {
  const hashedCreditCardNumber = await hash(this.creditCardNumber, 10);
  this.creditCardNumber = hashedCreditCardNumber;
  next();
});

export const CreditCardModel = mongoose.model("CreditCard", creditCardSchema);
