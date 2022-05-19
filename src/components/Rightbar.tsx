import { styled } from "@mui/system";

const RightBar = styled("div", { label: "rightbar" })((theme) => {
  return {
    marginTop: "4rem",
    marginBottom: "2rem",

    [theme.theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
    [theme.theme.breakpoints.up("sm")]: {
      padding: "0 7rem",
    },
    [theme.theme.breakpoints.up("md")]: {
      padding: "0 2rem",
    },
    [theme.theme.breakpoints.up("lg")]: {
      padding: "0 6rem",
    },
    [theme.theme.breakpoints.up("xl")]: {
      padding: "0 10rem",
      maxWidth: "700px",
      margin: "4em auto 2em",
    },
  };
});

export default RightBar;
