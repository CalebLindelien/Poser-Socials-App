import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Allows us to resuse this CSS component with these properties 
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;