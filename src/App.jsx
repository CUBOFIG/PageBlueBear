import React from "react";
import Navbare from "./components/Organisms/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Registere from "../src/components/Pages/Register/Register";

const App = () => {
  return (
    <Router>
      <div>
        <Navbare />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/curso" component={Registere} />
          <Route
            component={() => (
              <div>
                <h1>ERRO 404</h1>
                <span>Página no encontrada</span>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
