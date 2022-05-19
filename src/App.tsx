import { Grid, Link, Typography } from "@mui/material";
import "./App.css";
import { ImageAvatar } from "./components/Avatar";
import LeftBar from "./components/Leftbar";
import RightBar from "./components/Rightbar";
import { grey } from "@mui/material/colors";
import RegisterForm from "./components/RegisterForm";
import { UIComponents } from "./components/UIComponents";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
