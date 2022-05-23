import { styled } from "@mui/system";
import { useState } from "react";
import Lottie from "react-lottie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import loginAnimation2 from "../assets/animations/login.json";

const StyledDiv = styled("div", { label: "left-wrapper" })(({ theme }) => ({
  height: "400px",
  width: "800px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%,-30%)",
  position: "relative",
}));

const animationOption = {
  animationData: loginAnimation2,
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const UIComponents = () => {
  const [index, setIndex] = useState(0);

  return (
    <StyledDiv>
      <Lottie
        key={index}
        options={animationOption}
        height={400}
        width={400}
        style={{ paddingBottom: "40px" }}
        isStopped={false}
        isPaused={false}
      />
    </StyledDiv>
  );
};
