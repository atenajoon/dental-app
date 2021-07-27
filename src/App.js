import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import NotFound from "./components/not-found";
import Navbar from "./components/common/navbar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
