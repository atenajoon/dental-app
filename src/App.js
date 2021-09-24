import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  // footerRef is an object with "current" property as a key
  const footerRef = useRef();
  const mainRef = useRef();
  useEffect(() => {
    const footerHeight = footerRef.current.clientHeight;
    // mainRef.current.style.minHeight = "100vh" - footerHeight;
    // const mainHeight = mainRef.current.clientHeight;
    console.log(footerHeight, mainRef.current.style.minHeight);
  });

  return (
    <div id="bootstrap-overrides">
      <Header />
      <main ref={mainRef}>
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
      <Footer myFooterRef={footerRef} contactLink={`/Contact`} />
    </div>
  );
}

export default App;
