const args = require( 'minimist' )( process.argv.slice( 2 ) ),
      path = require( 'path' ),
      fs = require( 'fs' );

const rootDir = () => path.resolve( './' );
      
const getConfig = name => path.join( path.dirname( __dirname ), 'config', name );

const getScript = name => path.join( path.dirname( __dirname ), 'scripts', `${name}.js` );

const scriptExists = scriptName => fs.existsSync( getScript( scriptName ) );

const defaults = {
  webpack: {
    config: getConfig( 'webpack.config.js' )
  },
  stylelint: {
    config: getConfig( '.stylelintrc' ),
    'ignore-path': getConfig( '.stylelintignore' )
  }
}

const parseArgs = arguments => {

  const newArgs = { ...arguments };

  for ( const name in args ) {

    name !== '_' ? newArgs[name] = args[name] : false;
  }

  return Object.keys( newArgs ).map( prop => `--${prop}=${newArgs[prop]}` );
}

const cliArgs = () => parseArgs( args );

const webpackArgs = () => parseArgs( defaults.webpack );

const stylelintArgs = () => parseArgs( defaults.stylelint );

const makeThemeHeaders = package => {

  const package = fs.readFileSync( path.resolve( rootDir(), 'package.json' ) );

  const packageJson = JSON.parse( package );

  const styles = `${process.cwd()}/style.css`;

  const headers = [
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
  ].join( '\n' );
  
  fs.writeFileSync( styles, headers, err => 
    console.log( err ? err : 'Theme style.css generated! \n' ) 
  ); 
}

module.exports = {
  rootDir,
  scriptExists,
  getScript,
  cliArgs,
  webpackArgs,
  stylelintArgs,
  makeThemeHeaders
}