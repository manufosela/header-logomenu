# \<header-logomenu>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i header-logomenu
```

## Usage

```html
<script type="module">
  import 'header-logomenu/header-logomenu.js';
</script>

<header-logomenu logo="/image/logo.png" logo-url="http://myurl.com">
  <nav>
    <ul>
      <li id="menu1">
        <button>MENU 1</button>
        <ul>
          <li id="linkA1"><a href="https://url-to-linkA1">Option 1 submenu 1</a></li>
          <li id="linkA2"><a href="https://url-to-linkA2" target="_blank">Option 2 submenu 1</a></li>
          <li id="linkA3"><a href="https://url-to-linkA3">Option 3 submenu 1</a></li>
          <li id="linkA4"><a href="https://url-to-linkA4">Option 4 submenu 1</a></li>
        </ul>
      </li>
      <li id="linkB"><a href="https://url-to-linkB">Option 3 menu</a></li>
      <li id="linkC"><a href="https://url-to-linkC">Option 4 menu</a></li>
      <li id="linkD"><a href="https://url-to-linkD">Option 5 menu</a></li>
    </ul>
  </nav>
</header-logomenu>
```

```css
  /** CSS VARIABLES */
    --header-logomenu-height
    --header-logomenu-color-primary
    --header-logomenu-color-secondary
    --header-logomenu-color-dark
    --header-logomenu-text-color
    --header-logomenu-logo-height
    --header-logomenu-background-color
    --header-logomenu-border
    --header-logomenu-menu-background-color
    --header-logomenu-submenu-background-color
    --header-logomenu-menu-color
    --header-logomenu-submenu-color
    --header-logomenu-background-color-selected
    --header-logomenu-color-bar
    --header-logomenu-element-hover-border
    --header-logomenu-element-hover-background-color
    --header-logomenu-element-hover-border-radius
    --header-logomenu-justify-content
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
