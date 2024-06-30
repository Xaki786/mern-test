/** @format */
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import {
  saveToFile,
  validateCreditCardNumber,
  validateExpirationDate,
  validateHouseNumber,
} from "./services/validateCreditCardNumber.js";
import { validationMiddleware } from "./middlewares/middlewares.js";
import { consoleLogHelper } from "./services/logger.js";
const app = express();
app.use(express.json());

const apiUrl =
  "https://trial-api-credit-card-validator-4sfb.gw.openapihub.com/credit-card";
const apiKey = "84utiefkja323mkjedkjwhtiu2";

app.post("/api/submit", async (req, res) => {
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

  // let result;
  try {
    if (creditCardNumber) {
      if (expirationDate) {
        if (cvc) {
          const [month, year] = expirationDate.split("/");
          const expirationTimestamp = new Date(`${year}-${month}-01`).getTime();
          const currentTimestamp = new Date().getTime();
          if (expirationTimestamp > currentTimestamp) {
          } else {
            res.status(400).send("Credit card expiration date is in the past");
            return;
          }
          const creditCardValidationUrl = `${apiUrl}?api_key=${apiKey}&number=${creditCardNumber}`;
          const response = await fetch(creditCardValidationUrl);
          const result = await response.json();
        } else {
          res.status(400).send("Missing CVC");
          return;
        }
      } else {
        res.status(400).send("Missing expiration date");
        return;
      }
    } else {
      res.status(400).send("Invalid credit card");
      return;
    }
    if (result.valid) {
      const requiredFields = [
        "firstName",
        "lastName",
        "street",
        "houseNumber",
        "zipcode",
        "city",
        "region",
        "country",
      ];
      for (let field in req.body) {
        if (requiredFields.includes(field) && !req.body[field]) {
          res.status(400).send(`Missing field: ${field}`);
          return;
        }
      }

      const houseNumberRegex = /(?!^\d+$)^.+$/;
      if (houseNumberRegex.test(houseNumber)) {
      } else {
        res.status(400).send("Invalid house number");
        return;
      }
      consoleLogHelper("Every thing is fine after validation");
      const dataToStore = `First Name: ${firstName}, Last Name: ${lastName}, Street: ${street}, House Number: ${houseNumber}, Address Line 2: ${addressLine2}, Zip Code: ${zipcode}, City: ${city}, Region: ${region}, Country: ${country}, Credit Card Number: ${creditCardNumber}, Expiration Date: ${expirationDate}, CVC: ${cvc}, Expiration Timestamp: ${expirationTimestamp}\n`;

      fs.appendFile("data.txt", dataToStore, (err) => {
        if (err) {
          res.status(500).send("Error saving data");
        } else {
          res.status(200).send("Data saved successfully");
        }
      });
    }
  } catch (error) {
    consoleLogHelper({ error });
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
