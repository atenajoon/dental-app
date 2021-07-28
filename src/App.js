import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/routes/home";
import About from "./components/routes/about";
import Services from "./components/routes/services";
import Contact from "./components/routes/contact";
import NotFound from "./components/routes/not-found";
import Header from "./components/common/header";
import React from "react";
import Footer from "./components/common/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
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
      <Footer />
    </React.Fragment>
  );
}

export default App;
