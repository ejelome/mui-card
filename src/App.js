import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { CssBaseline, Typography } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h1">hello, world</Typography>
    </div>
  );
};

export default App;
