import React, { useState } from "react";
import {
  AppBar,
  //   Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { styled } from "@mui/material/styles";

import mainLogo from "../assets/markaid-transparent.png";

import "./Header.css";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <React.Fragment>
        <AppBar sx={{ background: "#e4e0ee" }}>
          <Toolbar>
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  MarkAid
                </Typography>
              </>
            ) : (
              <>
                <img alt="headerlogo" src={mainLogo} width="100" />

                <Tabs
                  sx={{ marginLeft: "10px" }}
                  fullWidth={true}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  centered
                >
                  <Tab style={{ color: "#4e2a84" }} label="Courses" />
                  {/* <Tab style={{ color: "#4e2a84" }} label="Student" /> */}
                  <Tab style={{ color: "#4e2a84" }} label="Quiz" />
                </Tabs>

                {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Login
                </Button>
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button> */}
                <img
                  alt="House"
                  src="https://pbs.twimg.com/profile_images/1360924188782059523/a4odaAC4_400x400.jpg"
                  width="30"
                  height="30"
                  sx={{ marginLeft: "10px" }}
                  style={{ borderRadius: 200 / 2 }}
                />
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  );
};
export default Header;
