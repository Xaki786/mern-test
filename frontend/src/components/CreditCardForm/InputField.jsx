/** @format */
import PropTypes from "prop-types";
import { FormControl, TextField } from "@mui/material";
const InputField = ({
  fieldName,
  fieldValue,
  handleFieldChange,
  placeholder,
}) => {
  return (
    <FormControl fullWidth>
      <TextField
        type="text"
        name={fieldName}
        value={fieldValue}
        onChange={handleFieldChange}
        placeholder={placeholder}
        variant="outlined"
        label={placeholder}
      />
    </FormControl>
  );
};
InputField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.string.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
export default InputField;
