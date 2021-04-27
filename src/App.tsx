import React, { useEffect } from "react";
import * as esbuild from "esbuild-wasm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DemoPage from "./Pages/Demo/DemoPage";
import LandingPage from "./Pages/Landing/LandingPage";

// initializing ESBUILD service so that it runs only once upon app load
export const App = () => {
  const startService = async () => {
    await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      worker: true,
    });
  };
  useEffect(() => {
    startService();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/demo" component={DemoPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
