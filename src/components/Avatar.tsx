import { Avatar, styled } from "@mui/material";
import img from "../assets/images/avatar.png";

const StyledAvatar = styled(Avatar)((theme) => {
  return {
    margin: "auto",
    width: "7em",
    height: "7em",
    border: `.5px solid ${theme.theme.palette.primary.main}`,
    backgroundColor: theme.theme.palette.primary["100"],
  };
});

export const ImageAvatar = () => {
  return <StyledAvatar alt="profile image" src={img} />;
};
