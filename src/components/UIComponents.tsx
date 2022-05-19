import { styled } from "@mui/system";
import p1Image from "../assets/images/p1.png";
import p2Image from "../assets/images/p2.png";
import p3Image from "../assets/images/p4.png";
import rec from "../assets/images/rec.png";
import { keyframes } from "@mui/system";

const swing = (rotate: string) => keyframes`
0% {
    transform:translate(-46%,-50%) rotate(-20deg);
}

50%{
    transform: translate(-50%,-45%) rotate(0deg);
}

100%{
    transform: translate(-46%,-50%) rotate(-20deg);
}
`;

const StyledDiv = styled("div", { label: "left-wrapper" })(({ theme }) => ({
  height: "400px",
  width: "800px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%,-30%)",
  position: "relative",
}));
const Product1 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "20%",
  left: "30%",
  height: "70%",
  animation: `${swing("rotate(-30deg)")} 4s infinite linear`,
}));
const Product2 = styled("img")(({ theme }) => ({
  position: "absolute",
  right: "10%",
  height: "90%",
  transform: "rotate(10deg)",
}));
const Product3 = styled("img")(({ theme }) => ({
  position: "absolute",
  left: "10%",
  top: "20%",
  height: "150%",
  transform: "rotate(65deg)",
}));

const Rec = styled("img")(({ theme }) => ({
  position: "absolute",
  left: "10%",
  top: "-20%",
  height: "180%",
  zIndex: "-1000",
}));

export const UIComponents = () => {
  return (
    <StyledDiv>
      <Product1 src={p1Image} />
      <Product2 src={p2Image} />
      <Product3 src={p3Image} />
      <Rec src={rec} />
    </StyledDiv>
  );
};
