/** @format */

import {
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { FORM_ACTIONS } from "../constants";

import useCredCardFormState from "../hooks/useCredCardFormState";
import useFormApi from "../hooks/useFormApi";
import InputField from "./InputField";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { useState } from "react";
import FullScreenLoader from "../Loader/Loader";

const CreditCardForm = () => {
  const {
    form,
    dispatch,
    formFields,
    missingFields,
    filledPercentage,
    resetForm,
  } = useCredCardFormState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { submitForm } = useFormApi();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await submitForm(form);
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error);
      }
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsSuccess(false);
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: FORM_ACTIONS.UPDATE_FIELD,
      fieldName: name,
      fieldValue: value,
    });
  };
  return (
    <Container>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <>
          {!isSuccess ? (
            <Typography variant="h5" textAlign="center">
              Credit Card Form
            </Typography>
          ) : (
            <>
              <Typography variant="h4" color="success">
                Data Saved Successfully. Thank you for submitting the form!
              </Typography>
              <Button
                onClick={() => {
                  setIsSuccess(false);
                  resetForm();
                }}
                size="large"
              >
                Fill a New Form
              </Button>
            </>
          )}
          {!isSuccess && (
            <>
              <div>
                <Typography>{`Form filled: ${filledPercentage.toFixed(
                  2
                )}%`}</Typography>
                <LinearProgressWithLabel value={filledPercentage} />
                {missingFields.length > 0 && (
                  <Typography>
                    Please fill out the following fields:
                    <ul>
                      {missingFields.map((field) => (
                        <li key={field}>{field}</li>
                      ))}
                    </ul>
                  </Typography>
                )}
              </div>
              <form onSubmit={handleSubmit} style={{ maxWidth: 1200 }}>
                <Grid container spacing={2}>
                  {formFields.map(({ name, placeholder }) => (
                    <Grid item xs={12} md={6} key={name}>
                      <InputField
                        key={name}
                        fieldName={name}
                        fieldValue={form[name]}
                        placeholder={placeholder}
                        handleFieldChange={handleChange}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                      <Button variant="contained" size="large" type="submit">
                        Submit
                      </Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default CreditCardForm;
