# Scaffold Build Pipeline

Opinionated webpack config to be used with [scaffold-theme](https://github.com/Chrillaz/scaffold-theme).

Heavily inspired by [@wordpress/scripts](https://github.com/WordPress/gutenberg/tree/e9f09838360909fe795351771a4fafc6fef13513/packages/scripts).
Uses and compiles TypeScript

### Installation

```bash
npm i chrillaz/scaffold-pipe --save-dev
```

### Scripts

```json
"scripts": {
  "start": "scaffold start",
  "build": "scaffold build",
  "lint": "scaffold lint-styles"
}
```

### Example folder structure from scaffold-theme

By default it expects input files from "resources" folder and outputs compiled assets to "public" folder.

```bash
|-- public
|   |--css
|   |--js
|-- resources
|   |--scripts
|   |--styles
```

### Webpack

Script accepts a config and an entry by using flags from package.json. Entire congig can also be overrided/extended.

### Flags

|Flag      | value           |
|----------|-----------------|
| --config | string string[] |
| --entry  | string string[] |

### Example override

Config can be overwritten by including the default config in themes own webpack.config.
the --config argument then needs to point to themes webpack.config

```node
const defaultConfig = require( '@chrillaz/scaffold-pipe/config/webpack.config.js' );

module.exports = {
  ...defaultConfig,
  entry: {
    mainjs: './js/main.ts',
    maincss: './scss/main.scss
  }
}
```

and then in package.json

```json
"scripts": {
  "start": "scaffold start --config path/to/webpack.config",
}
```

### Stylelint

The default stylelinter is configured with twbs-bootstrap rules.

Your own .stylelinntrc and .stylelintignore can be provided from project if the default configs doesn't suit by providing --config, --ignore-path.

```json
"scripts": {
  "start": "scaffold lint-styles --config path/to/.stylelintrc --ignore-path path/to/.stylelintignore",
}
```

### Theme css

The build script also generates the themes headers to style.css by looking att following properties from package.json

```js
    '/*',
    ' * Theme Name: ' + packageJson.themeName,
    ' * Theme URI: ' + packageJson.homepage,
    ' * Author: ' + packageJson.author,
    ' * Author URI: ' + packageJson.authorUri,
    ' * Description: ' + packageJson.description,
    ' * Version: ' + packageJson.version,
    ' * License: ' + packageJson.license,
    ' * Licence URI: ' + packageJson.licenseUri,
    ' * Text Domain: ' + packageJson.name,
    ' * Template: ',
    ' */\n',
```
