import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { FC } from "react";
import { Google } from "@mui/icons-material";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.8em",
});
const StyledButton = styled(Button)({
  marginTop: "3em",
  width: "100%",
  padding: "1em 0",
});
const GoogleLogin = styled(Button)((theme) => ({
  marginTop: ".7em",
  width: "100%",
  padding: ".6em 0",
  color: grey[600],
  borderColor: grey[400],
  "&:hover": {
    borderColor: grey[400],
  },
}));

export const RegisterForm: FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <StyledTextField variant="outlined" label="Email" />
      <StyledTextField variant="outlined" label="Password" />
      <Grid
        marginTop=".5em"
        container
        width="100%"
        justifyContent="space-between"
      >
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            color={grey[600]}
            label={<Typography color={grey[600]}>Remember me</Typography>}
          />
        </Grid>
        <Grid item>
          <Link component="button" color={blue[600]}>
            <Typography variant="body1" paddingTop="10px" color={blue[900]}>
              Reset Password
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <StyledButton variant="contained">Login</StyledButton>
      <GoogleLogin startIcon={<Google  />} variant="outlined">
        Sign in with Google
      </GoogleLogin>
    </Box>
  );
};
export default RegisterForm;
