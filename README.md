# mui-card

Learn [Material-UI](https://material-ui.com) with a business card

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [mui-card](#mui-card)
  - [Usage](#usage)
    - [Install](#install)
    - [Serve](#serve)
  - [Prototypes](#prototypes)
    - [lt_sm](#lt_sm)
    - [gte_sm](#gte_sm)
  - [Lessons](#lessons)
    - [1. Setup](#1-setup)
      - [1.1. Install](#11-install)
      - [1.2. Configure](#12-configure)
    - [2. Theme](#2-theme)
  - [License](#license)

<!-- markdown-toc end -->

---

## Usage

### Install

```shell
$ npm [install|isntall|add|i]
```

### Serve

```shell
$ npm start
```

---

## Prototypes

[![](./.prototypes/thumbnails/breadboard.jpg)](./.prototypes/images/breadboard.jpg "Breadboard")

### lt_sm

[![](./.prototypes/thumbnails/lt_sm/sketch.jpg)](./.prototypes/images/lt_sm/sketch.jpg "Sketch")
[![](./.prototypes/thumbnails/lt_sm/elements.jpg)](./.prototypes/images/lt_sm/elements.jpg "Elements")

### gte_sm

[![](./.prototypes/thumbnails/gte_sm/sketch.jpg)](./.prototypes/images/gte_sm/sketch.jpg "Sketch")
[![](./.prototypes/thumbnails/gte_sm/elements.jpg)](./.prototypes/images/gte_sm/elements.jpg "Elements")

---

## Lessons

### 1. Setup

#### 1.1. Install

```shell
$ npm i @material-ui/{core,icons} \
        fontsource-roboto
```

> **Notes:**
>
> - [`icons`](https://material-ui.com/components/material-icons) package are converted [`SvgIcon`](https://material-ui.com/api/svg-icon) components
> - `SvgIcon`s uses [PascalCase](https://wiki.c2.com/?PascalCase) as naming convention

#### 1.2. Configure

```javascript
// file: src/App.js
// …
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
// …
```

```html
<!-- file: public/index.html -->
<!-- … -->
<html …>
  <head>
    <!-- … -->
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <!-- … -->
  </head>
  <!-- … -->
</html>
```

> **Notes:**

> - [`<meta name="viewport">`](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Enter_viewport_meta_tag) ensures proper rendering and touch zooming for all devices
> - [Roboto](https://fonts.google.com/specimen/Roboto) font is not automatically loaded by Material-UI; styles must be specified manually
> - [`CssBaseline`](https://material-ui.com/components/css-baseline) fixes inconsistencies across browsers and devices with opinionated resets

### 2. Theme

```javascript
// file: src/App.js
import React from "react";
// …
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      secondary: {
        main: orange[50],
      },
    },
  })
);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.paper,
    "& button": {
      color: theme.palette.common.black,
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        // …
      </div>
    </ThemeProvider>
  // …
```

> **Notes:**
>
> - [`createMuiTheme`](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme) returns [default theme](https://material-ui.com/customization/default-theme) object that can be overridden
> - [`ThemeProvider`](https://material-ui.com/styles/api/#themeprovider) takes `theme` property and makes it available to children
> - [`responsiveFontSizes`](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme) generates responsive typography for the theme
> - `orange` is one of the [color palette](https://material-ui.com/customization/color/#color-palette)s (`orange[50]` means `hue[shade]`)
> - [`makeStyles`](https://material-ui.com/styles/api/#makestyles-styles-options-hook) links a style sheet with a function component (returns a hook)
> - `theme` property object contains the design properties of the application
> - `"&"` implies child elements under the element where `root` was assigned

## License

`mui-card` is licensed under [MIT](./LICENSE).
