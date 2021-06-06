const fs = require( 'fs' ),
      { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { getScriptArgs, getPackage, buildScaffoldHeaders } = require( '../utils/utils' );

const package = fs.readFileSync( getPackage() );
const packageJson = JSON.parse( package );

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

if ( ! fs.existsSync( './style.css' ) ) {
  
  fs.writeFile( process.cwd() + 'style.css', headers, err => 
    console.log( err ? err : 'Theme style.css generated! \n' ) 
  ); 
}

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const { status } = spawn(
  resolveBin( 'webpack' ),
  [
    ...getScriptArgs(), 
  ],
  {
    stdio: 'inherit',
  }
);

process.exit( status );