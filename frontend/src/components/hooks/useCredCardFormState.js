/** @format */

import { useReducer } from "react";
import { FORM_ACTIONS } from "../constants";

const initialFormValues = {
  firstName: "",
  lastName: "",
  street: "",
  houseNumber: "",
  addressLine2: "",
  zipcode: "",
  city: "",
  region: "",
  country: "",
  creditCardNumber: "",
  expirationDate: "",
  cvc: "",
  filledPercentage: 0,
};

const formFields = [
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "street", placeholder: "Street" },
  { name: "houseNumber", placeholder: "House Number" },
  { name: "addressLine2", placeholder: "Address Line 2" },
  { name: "zipcode", placeholder: "Zipcode" },
  { name: "city", placeholder: "City" },
  { name: "region", placeholder: "Region" },
  { name: "country", placeholder: "Country" },
  { name: "creditCardNumber", placeholder: "Credit Card Number" },
  { name: "expirationDate", placeholder: "Expiration Date" },
  { name: "cvc", placeholder: "CVC" },
];

const formFieldsNames = formFields.map((field) => field.name);

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case FORM_ACTIONS.RESET_FORM:
      return {
        initialFormValues,
      };

    default:
      return state;
  }
};
const useCredCardFormState = () => {
  const [form, dispatch] = useReducer(formReducer, initialFormValues);
  const filledFields = formFieldsNames.filter((field) => form[field]);
  const missingFields = formFieldsNames.filter((field) => !form[field]);
  const filledPercentage = (filledFields.length / formFieldsNames.length) * 100;
  return {
    form,
    dispatch,
    formFields,
    missingFields,
    filledPercentage,
    resetForm: () => dispatch({ type: FORM_ACTIONS.RESET_FORM }),
  };
};

export default useCredCardFormState;
