import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../comon/Header";
import SignInOutButton from "../../comon/SignInOutButton";
import TouchPad from "../home/TouchPad";

import SignOutSvg from "../../../assets/icons/Sign_Up.svg";
import BanerImg from "../../../assets/img/shutterstock_1457008421.png";
import PayIconSvg from "../../../assets/icons/Icons_Pay.svg";
import FindCarParkSvg from "../../../assets/icons/Pay_Icons_Find.svg";
import ReserveSvg from "../../../assets/icons/Icons_Reserve.svg";
import ChargeSvg from "../../../assets/icons/Icons_Charge.svg";
import LeaseSvg from "../../../assets/icons/Icons_Lease.svg";
import ValidateSvg from "../../../assets/icons/Icons_Validate.svg";
import PayRepeatSvg from "../../../assets/icons/Pay_Icons_Repeat.svg";
import LogoNuevoParkSvg from "../../../assets/icons/Logo_NuevoPark.svg";
import LogoNuevoPaySvg from "../../../assets/icons/Logo_NuevoPay.svg";
import { CardMedia } from "@material-ui/core";
import "../home/Home.css";

function Home() {
  const [buttonLayout, setButtonLayout] = useState("Home");

  function handleChange(list) {
    setButtonLayout(list);
  }

  let buttonList = false;
  let headerLogo = false;

  switch (buttonLayout) {
    case "Home":
      headerLogo = LogoNuevoParkSvg;
      buttonList = [
        {
          id: 1,
          displayName: "Pay",
          svgFile: PayIconSvg,
          type: "btn",
          list: "Payment",
          action: null,
        },
        {
          id: 2,
          displayName: "Reserve",
          svgFile: ReserveSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
        {
          id: 3,
          displayName: "Charge",
          svgFile: ChargeSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
        {
          id: 4,
          displayName: "Lease",
          svgFile: LeaseSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
        {
          id: 5,
          displayName: "Validate",
          svgFile: ValidateSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
        {
          id: 6,
          displayName: "My Activity",
          svgFile: PayIconSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
      ];
      break;
    case "Payment":
      headerLogo = LogoNuevoPaySvg;
      buttonList = [
        {
          id: 1,
          displayName: "Enter Location ID",
          holding: "Location ID",
          ButtonText: "GO",
          type: "loc",
        },
        {
          id: 3,
          displayName: "Find a Carpark",
          svgFile: FindCarParkSvg,
          type: "btn",
          list: "Home",
          action: "/car_park_search",
        },
        {
          id: 4,
          displayName: "Active Parks",
          svgFile: PayIconSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
        {
          id: 5,
          displayName: "Repeat Park",
          svgFile: PayRepeatSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
        {
          id: 6,
          displayName: "Valido Promos",
          svgFile: ValidateSvg,
          type: "btn",
          list: "Home",
          action: null,
        },
      ];
      break;
    default:
      buttonList = [];
     // TODO: When this list extend "Home" should be default   
  }
  return (
    <div>
      <Header isLoggedIn={false} logo={headerLogo}></Header>
      <div style={{ padding: 15, marginRight: -7 }}>
        <Grid container spacing={3}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            className="homeContainer"
            style={{ padding: 20 }}
          >
            <Grid item xs={7}></Grid>
            <Grid item xs={5} className="signOut">
              <SignInOutButton
                name="Sign Up  "
                icon={SignOutSvg}
              ></SignInOutButton>
            </Grid>
            <Grid item xs={12}>
              <CardMedia className="banerPin"></CardMedia>
              <CardMedia className="banerImage">
                <p>
                  <span className="banerImageTextNuevo">nuevo</span>
                  <span className="banerImageTextPark">Park</span>
                </p>
                <p className="banerImageTextDigitalExp">
                  The Digital Experiance
                </p>
              </CardMedia>
            </Grid>
            <TouchPad
              itemList={buttonList}
              handleChange={handleChange}
            ></TouchPad>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
