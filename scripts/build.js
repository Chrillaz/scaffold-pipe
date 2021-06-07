const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { getScriptArgs } = require( '../utils/utils' );
      
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