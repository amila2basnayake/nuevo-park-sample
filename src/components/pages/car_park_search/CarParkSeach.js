import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Header from "../../comon/Header";
import "../car_park_search/CarParkSeach.css";
import Axios from "axios";
import { API_BASE_URL } from "../../../assets/properties";
import LogoNuevoPaySvg from "../../../assets/icons/Logo_NuevoPay.svg";
import SearchPurpleIconSvg from "../../../assets/icons/Search2.svg";
import SearchButtonIconSvg from "../../../assets/icons/Search.svg";
import SearchDestinationSvg from "../../../assets/icons/Search_Destination.svg";

function CarParkSeach() {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
 //TODO : page and size need to parameterized
  const onTextChange = async (value) => {
    await Axios.get(
      API_BASE_URL +
        "/cities?q=:searchQuery:&page=0&size=10".replace(
          ":searchQuery:",
          value
        ),
      {
        headers: {
          "x-api-key": "3a74a0d595bb4619a5a42ef4917b5686",
        },
      }
    )
      .then((res) => {
        setOptions(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <Header isLoggedIn={true} logo={LogoNuevoPaySvg}></Header>
      <div style={{ padding: 15, marginRight: -7 }}>
        <Grid container alignItems="center" spacing={3}>
          <Grid className="container" item xs={12} container spacing={1}>
            <div style={{ width: "100%" }}>
              <span className="spanImg">
                <img
                  width={40}
                  height={40}
                  src={SearchPurpleIconSvg}
                  style={{ marginBottom: -12 }}
                  alt=""
                ></img>
              </span>
              <span className="spanText">
                <p className="lable">Find a Carpark</p>
              </span>
              <div className="section">
                <div>
                  <span className="spanImg">
                    <img
                      width={40}
                      height={40}
                      src={SearchDestinationSvg}
                      className="imgSearchDestination"
                      alt=""
                    ></img>
                  </span>
                  <span className="spanText">
                    <p className="lable">Search Destination</p>
                  </span>
                </div>
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    id="city"
                    size="small"
                    options={options.map((option) => option.name)}
                    renderInput={(params) => (
                      <TextField
                        className="textFeild"
                        size="small"
                        onChange={(event) => {
                          if (
                            event.target.value !== "" ||
                            event.target.value !== null
                          ) {
                            onTextChange(event.target.value);
                          }
                        }}
                        {...params}
                        label="City"
                        margin="normal"
                        variant="outlined"
                      />
                    )}
                  />
                  <div>
                    <TextField
                      id="outlined-search"
                      type="search"
                      className="textFeild"
                      variant="outlined"
                      margin="none"
                      size="small"
                      style={{ width: "75%" }}
                    />
                    <Button
                      variant="contained"
                      className="buttonSearch"
                      color="secondary"
                      startIcon={
                        <img
                          style={{ alignItems: "center" }}
                          width={30}
                          height={30}
                          src={SearchButtonIconSvg}
                          alt=""
                        ></img>
                      }
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CarParkSeach;
