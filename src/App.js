import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { Button, CssBaseline, Typography } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Typography variant="h1">hello, world</Typography>
      <Button variant="contained">click me</Button>
    </Fragment>
  );
};

export default App;
