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

import { Button, CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Button variant="contained">hello, world</Button>
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
>
> - [`<meta name="viewport">`](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Enter_viewport_meta_tag) ensures proper rendering and touch zooming for all devices
> - [`CssBaseline`](https://next.material-ui.com/components/css-baseline) fixes inconsistencies across browsers and devices with an opinionated resets

---

## License

`mui-card` is licensed under [MIT](./LICENSE).
