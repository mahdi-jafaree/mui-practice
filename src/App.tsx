import { Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "./App.css";
import { ImageAvatar } from "./components/Avatar";
import LeftBar from "./components/Leftbar";
import RightBar from "./components/Rightbar";
import { grey } from "@mui/material/colors";
import RegisterForm from "./components/RegisterForm";
import { UIComponents } from "./components/UIComponents";
import { keyframes } from "@mui/system";
import { useState } from "react";

const fadeIn = keyframes`

  from{
    opacity:0
  }
  to{
    opacity:1
  }
`;
const rotate = keyframes`
  0%{
    transform: rotateY(0deg)
  }
  50%{
    transform: rotateY(180deg)
  }
  100%{
    transform: rotateY(0deg)
  }
`;

const FadeInDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "rotable",
})((props) => {
  console.log(props)
  return {
    animation: `${fadeIn} 1s ease`,
  };
});

function App() {
  const [rotateDiv, setRotateDiv] = useState(false);
  return (
    <FadeInDiv
      onClick={() => {
        setRotateDiv(!rotateDiv);
      }}
      className="App"
    >
      <Grid width={"100%"} height="100%" container>
        <LeftBar item>
          <UIComponents />
        </LeftBar>

        <Grid flex={1} item>
          <RightBar>
            <Grid spacing={2} height="100%" container>
              <Grid xs={12} item>
                <ImageAvatar />
              </Grid>
              <Grid xs={12} item>
                <Typography color={grey[800]} variant="h4">
                  Hello Again!
                </Typography>
                <Typography
                  paddingTop={2}
                  color={grey[600]}
                  variant="subtitle1"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero nisi saepe officia explicabo facilis dolore!
                </Typography>
              </Grid>
              <Grid xs={12} item>
                <RegisterForm />
              </Grid>
              <Grid xs={12} item>
                <Typography paddingTop={3} variant="body1" color={grey[700]}>
                  Don't you have an account?{" "}
                  <span>
                    <Link component="button">
                      <Typography variant="body1">Signup</Typography>
                    </Link>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </RightBar>
        </Grid>
      </Grid>
    </FadeInDiv>
  );
}

export default App;
