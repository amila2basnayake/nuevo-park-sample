import React from "react";

import Home from "./components/pages/home/Home";
import CarPark from "./components/pages/car_parks/CarPark";
import CarParkSeach from "./components/pages/car_park_search/CarParkSeach";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/assets/fonts/customFonts.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/car_park"
            component={(props) => <CarPark {...props} />}
          />
          <Route
            exact
            path="/car_park_search"
            component={(props) => <CarParkSeach {...props} />}
          />
          <Route exact path="/" component={(props) => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
