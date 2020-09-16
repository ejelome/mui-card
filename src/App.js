import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import {
  Container,
  CssBaseline,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Hidden,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { Facebook, MoreHoriz } from "@material-ui/icons";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((themes) => ({
  root: {
    backgroundColor: grey[900],
    maxWidth: themes.breakpoints.values.sm,
    textAlign: "center",
    "& h1": { color: grey[50] },
    "& .MuiCardHeader-root": { display: "inline" },
    "& .MuiCardHeader-avatar": { marginTop: themes.spacing(4) },
    "& .MuiCardActions-root": { display: "flex", justifyContent: "center" },
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
        <Card>
          <CardHeader
            avatar={
              <img
                alt=""
                src="https://via.placeholder.com/96x96"
                width="96"
                height="96"
              />
            }
          />
          <CardContent>
            <Link variant="h1" color="inherit">
              title
            </Link>
            <Typography variant="subtitle1">subtitle</Typography>
            <Typography variant="body1">description</Typography>
          </CardContent>
        </Card>
        <CardActions>
          <IconButton href="https://facebook.com">
            <Facebook />
          </IconButton>
          <Hidden smUp>
            <MoreHoriz />
          </Hidden>
        </CardActions>
      </Container>
    </ThemeProvider>
  );
};

export default App;
