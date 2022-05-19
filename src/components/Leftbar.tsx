import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const LeftBar = styled(Grid)(({ theme }) => {
  return {
    backgroundImage: `radial-gradient(${theme.palette.primary.main}ee,${theme.palette.primary.main} 60%)`,
    minHeight: "100%",
    [theme.breakpoints.down("md")]: {
      flex: 0,
    },
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
  };
});

export default LeftBar;
