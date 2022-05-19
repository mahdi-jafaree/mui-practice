import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#4754a7",
      "100": "#4754a733",
    },
  },
});
export default theme;
