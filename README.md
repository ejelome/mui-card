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
        - [1.2.1. CssBaseline](#121-cssbaseline)
        - [1.2.2. Roboto font](#122-roboto-font)
        - [1.2.3. Viewport](#123-viewport)
    - [2. Theming](#2-theming)
      - [2.1. makeStyles](#21-makestyles)
      - [2.2. useTheme](#22-usetheme)
      - [2.3. hue[shade]](#23-hueshade)
      - [2.4. Custom theme](#24-custom-theme)
      - [2.5. responsiveFontSizes](#25-responsivefontsizes)
    - [3. Layout](#3-layout)
      - [3.1. Box](#31-box)
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
> - [Roboto](https://fonts.google.com/specimen/Roboto) fonts must be specified manually

#### 1.2. Configure

##### 1.2.1. CssBaseline

```javascript
// file: src/App.js
// …

import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <div …>
      <CssBaseline />
    // …
```

> **Note:** <br />
> The [`CssBaseline`](https://material-ui.com/components/css-baseline) fixes inconsistencies across browsers and devices with an opinionated resets.

##### 1.2.2. Roboto font

```javascript
// file: src/App.js
// …
import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { …, Typography } from "@material-ui/core";

const App = () => {
  return (
    <div …>
      // …
      <Typography variant="h1">hello, world</Typography>
    // …
```

> **Note:** <br />
> Only `300`, `400`, `500` and `700` of typography font weights are being used by Material-UI.

##### 1.2.3. Viewport

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

> **Note:** <br />
> The [`meta-viewport`](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Enter_viewport_meta_tag) ensures proper rendering and touch zooming for all browsers and devices.

### 2. Theming

#### 2.1. makeStyles

```javascript
// file: src/App.js
// …
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette: { common: { black, white } } }) => ({
  root: {
    backgroundColor: black,
    "& h1": { color: white },
  },
}));

const App = () => {
  const { root } = useStyles();
  return (
    <div className={root}>
      // …
```

> **Notes:**
>
> - [`makeStyles`](https://material-ui.com/styles/api/#makestyles-styles-options-hook) links a style sheet with a function component (returns a hook)
> - `makeStyles(props)` can mix values of component `props` with `theme` object
> - `theme` property object contains the design properties of the application
> - `"&"` implies child elements under the element where `root` was assigned

#### 2.2. useTheme

```javascript
// file: src/App.js
// …
import { …, useTheme } from "@material-ui/core/styles";

// …
const App = () => {
  // …
  const {
    palette: { type },
  } = useTheme();

  return (
    <div …>
      // …
      <Typography …>hello, {type} world…
```

> **Note:** <br />
> The [`useTheme`](https://material-ui.com/styles/api/#usetheme-theme) hook returns `theme` object and to access theme properties.

#### 2.3. hue[shade]

```javascript
// file: src/App.js
// …
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: grey[900], // near-black: #212121
    "& h1": { color: grey[50] }, // near-white: #fafafa
  // …
```

> **Note:** <br />
> The `grey` object is one of the [color palette](https://material-ui.com/customization/color/#color-palette)s (`grey[50…900]` means `hue[shade]`).

#### 2.4. Custom theme

```javascript
// file: src/App.js
// …
import { createMuiTheme, …, ThemeProvider, … } from "@material-ui/core/styles";
// …
const theme = createMuiTheme({ palette: { type: "dark" } });

const App = () => {
  // …
  return (
    <ThemeProvider theme={theme}>
      // …
    </ThemeProvider>
  // …
```

> **Notes:**
>
> - [`createMuiTheme`](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme) returns [default theme](https://material-ui.com/customization/default-theme) object that can be overridden
> - [`ThemeProvider`](https://material-ui.com/styles/api/#themeprovider) takes `theme` property and makes it available to children

#### 2.5. responsiveFontSizes

```javascript
// file: src/App.js
// …
import { …, responsiveFontSizes, … } from "@material-ui/core/styles";
// …
let theme = createMuiTheme( … )
theme = responsiveFontSizes(theme);
// …
```

> **Note:** <br />
> The [`responsiveFontSizes`](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme) generates responsive typography for the theme.

### 3. Layout

#### 3.1. Box

```javascript
// file: src/App.js
// …
import { Box, … } from "@material-ui/core";

const App …
  // …
  return (
    // …
    <ThemeProvider …>
      // …
        <Typography …>
          hello,
          <Box component="span" bgcolor="text.secondary" color="text.primary">
            {type}
          </Box>
          world
        …
```

> **Notes:**
>
> - [`Box`](https://material-ui.com/components/box) component can access the full list of [style functions](https://next.material-ui.com/system/basics/#all-inclusive)
> - Use the `component` property to replace the element wrapper

---

## License

`mui-card` is licensed under [MIT](./LICENSE).
