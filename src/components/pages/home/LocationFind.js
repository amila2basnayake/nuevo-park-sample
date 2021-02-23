import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import FindLocationSvg from "../../../assets/icons/Enter_Location.svg";
import "../home/Home.css";

function LocationFind() {
  const [custInput, setCustInput] = useState(null);
  function handleInputChange(event) {
    setCustInput(event.target.value);
  }

  return (
    <div>
      <div className="locationId">
        <div className="lableLocID">
          <img width={20} height={20} src={FindLocationSvg} alt=""></img>{" "}
          <span className="spanDescription">Enter Location Id</span>
        </div>
        <div style={{ marginLeft: 10, padding: 3 }}>
          <TextField
            id="outlined-search"
            type="search"
            onChange={handleInputChange}
            className="textFeildLocationId"
            variant="outlined"
            margin="none"
            size="small"
          />
          <Button
            variant="contained"
            className="buttonGo"
            value={custInput}
            onClick={(event) =>
              (window.location.href = "/car_park" + "?parkId=" + custInput)
            }
          >
            Go
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LocationFind;
