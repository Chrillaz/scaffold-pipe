const fs = require( 'fs' ),
      { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { getScriptArgs, getPackage } = require( '../utils/utils' );

const package = fs.readFileSync( getPackage() );
const packageJson = JSON.parse( package );

console.log( packageJson );

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