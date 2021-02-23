import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../comon/Header";
import "../car_parks/CarPark.css";
import Axios from "axios";
import { API_BASE_URL } from "../../../assets/properties";
import LogoNuevoPaySvg from "../../../assets/icons/Logo_NuevoPay.svg";
import moment from "moment";

function CarPark(props) {
  const [carPark, setCarPark] = useState([]);
  const [error, setError] = useState(null);
  let parkId = new URLSearchParams(props.location.search).get("parkId");
  useEffect(async () => {
    if (parkId != null && parkId != "") {
      await Axios.get(
        API_BASE_URL + "/carparks?publicId=" + parkId,
        {
          headers: {
            "x-api-key": "3a74a0d595bb4619a5a42ef4917b5686",
          },
        }
      )
        .then((res) => {
          setCarPark(res.data[0]);
          console.log(res.data[0]);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [parkId, error]);

  const { address } = carPark;

  return (
    <div>
      {/* TODO : true and logo need to change with the loging funtion */}
      <Header isLoggedIn={true} logo={LogoNuevoPaySvg}></Header>
      <div style={{ padding: 15, marginRight: -7 }}>
        <Grid container alignItems="center" spacing={3}>
          <Grid
            className="container"
            alignItems="center"
            item
            xs={12}
            container
            spacing={1}
          >
            <div style={{ width: "100%" }}>
              <div className="selectCarpark">Select Parking</div>
              <div className="sectionCarPark">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {carPark?.address?.line1}
                  </span>
                  <span>({carPark?.publicId})</span>
                </p>
                <p>
                  {address?.line1}, {address?.suburb}  {address?.postcode}
                </p>
                <div>
                  <p
                    style={{ alignItems: "center" }}
                    className="sectionParkingEnd"
                  >
                    <span>{moment().format("DD MMM YY h:mm A")}</span>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CarPark;
