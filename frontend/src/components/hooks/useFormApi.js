/** @format */
import // formDataWithMissingCVC,
// formDataWithInvalidHouseNumber,
// formDataWithMultipleMissingFields,
// formDataWithExpiredCreditCard,
// formDataWithInvalidCreditCard,
// validFormData,
"../constants/sample-data";
const useFormApi = () => {
  return {
    submitForm: (form) => {
      return fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        // body: JSON.stringify(validFormData),
      });
    },
  };
};

export default useFormApi;
