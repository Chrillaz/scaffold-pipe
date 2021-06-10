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
  "build": "scaffold build"
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
  output: {
    mainjs: './js/main.ts',
    maincss: './scss/main.scss
  }
}
```

and then in package.json

```json
"scripts": {
  "start": "scaffold start --config path/to/theme/webpack.config"
}
```

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
