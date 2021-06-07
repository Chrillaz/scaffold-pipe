# Scaffold Build Pipeline

Opinionated webpack config to be used with scaffold-theme
By default the config expects inputs to live in "./resources" folder.
Outputs css and js to "./public" folder.



The bundling also generates the themes headers to style.css by looking att following properties from package.json

```
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

Verry much inspired by @wordpress/scripts