import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { Mood, MoreHoriz } from "@material-ui/icons";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: grey[900],
    "& h1": { color: grey[50] },
  },
}));

let theme = createMuiTheme({ palette: { type: "dark" } });
theme = responsiveFontSizes(theme);

const App = () => {
  const { root } = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={root} disableGutters={true}>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Box mt={4}>
              <img
                alt=""
                src="https://via.placeholder.com/96x96"
                width="96"
                height="96"
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h1">title</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">subtitle</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">description</Typography>
          </Grid>
          <Grid item container justify="space-evenly">
            <Mood />
            <Hidden smUp>
              <MoreHoriz />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
