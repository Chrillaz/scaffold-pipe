const args = require( 'minimist' )( process.argv.slice( 2 ) ),
      path = require( 'path' ),
      fs = require( 'fs' );

const scripts = [
  'start',
  'build'
];

const arguments = {
  config: { type: 'string', default: '--config=node_modules/scaffold-pipe/config/webpack.config.js' },
  // tsconfig: { type: 'string', default: '--tsconfig=node_modules/scaffold-pipe/config/tsconfig.json' }
}

const hasScript = scriptName => scripts.includes( scriptName );

const getScript = scriptName => path.join( path.dirname( __dirname ), 'scripts', `${ scriptName }.js` );

const getScriptArgs = () => {

  scriptArgs = [];

  for ( const name in arguments ) {

    args.hasOwnProperty( name ) 
      ? scriptArgs.push( `--${name}=${args[name]}` )
      : scriptArgs.push( arguments[name].default );
  }

  return scriptArgs;
}

const getPackage = () => path.resolve( process.cwd(), 'package.json' );

const makeThemeHeaders = package => {

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
  hasScript,
  getScript,
  getScriptArgs,
  getPackage,
  makeThemeHeaders
}