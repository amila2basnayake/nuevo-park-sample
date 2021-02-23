import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SignInSvg from "../../assets/icons/Sign_In.svg";
import HeaderLogo from "../comon/HeaderLogo";
import SignInOutButton from "../comon/SignInOutButton";
import HomeButton from '../comon/HomeButton'

import "../comon/Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <div>
      <div className="header">
        <Grid container direction="row" item xs={12} spacing={1}>
          <Grid item xs={5}>
            {props.isLoggedIn ? (
              <HomeButton  />
            ) : (
              <SignInOutButton
                name="Sign In"
                icon={SignInSvg}
              ></SignInOutButton>
            )}
          </Grid>
          <Grid item xs={7} alignItems="flex-end" className="divLogo">
            <HeaderLogo icon={props.logo}></HeaderLogo>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
