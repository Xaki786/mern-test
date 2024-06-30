/** @format */
import PropTypes from "prop-types";
import StyledLinearProgress from "../../ui/StyledLinearProgress";
import { Box, Typography } from "@mui/material";
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ width: "100%", marginBottom: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <StyledLinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel;
