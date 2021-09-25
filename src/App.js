import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import React, { createRef, useEffect } from "react";
import useWindowDimensions from "./static/windowDimentions";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  // footerRef is an object created by useRef, having "current" property as a key

  // **
  const { height } = useWindowDimensions();
  const headerRef = createRef();
  const mainRef = createRef();
  const footerRef = createRef();

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const mainHeight = mainRef.current.clientHeight;
    const footerHeight = footerRef.current.clientHeight;

    let mainMinHeight = height - headerHeight - footerHeight;

    // mainRef.current.style.minHeight = mainMinHeight;

    console.log(
      "height:",
      height,
      "headerHeight:",
      headerHeight,
      "footerHeight: ",
      footerHeight,
      "currentMainHeight: ",
      mainHeight,
      "minMainHeight: ",
      mainMinHeight
    );
  });

  return (
    <div id="bootstrap-overrides">
      <Header ref={headerRef} />
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
