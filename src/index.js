import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/design.scss";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";

import Homepage from "./components/Homepage";
import Logistic from "./components/Logistic";
import About from "./components/About";
import Contact from "./components/Contact";
import TestPage from "./components/TestPage";

ReactDOM.render(
  <BrowserRouter>
  
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/anasayfa"
        render={props => <Homepage {...props} />}
      />
      <Route
        path="/hakkinda"
        render={props => <About {...props} />}
      />
            <Route
        path="/TestPage"
        render={props => <TestPage {...props} />}
      />

      <Route
        path="/lojistik"
        render={props => <Logistic {...props} />}
      />
      <Route
        path="/iletisim"
        render={props => <Contact {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
