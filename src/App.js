import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Continents from "./components/continents/Continents";
import Countries from "./components/countries/Countries";

export default function App() {
  return (
    <Router>
      <Continents />
      <Route path="/:code">
        <Countries />
      </Route>
    </Router>
  );
}
