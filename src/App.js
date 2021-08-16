import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";
import React from "react";
import Footer from "./components/common/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main id="bootstrap-overrides">
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
      <Footer contactLink={`/Contact`} />
    </React.Fragment>
  );
}

export default App;
