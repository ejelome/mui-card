import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { Button, CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Button variant="contained">hello, world</Button>
    </Fragment>
  );
};

export default App;
