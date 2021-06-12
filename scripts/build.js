const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { webpackArgs } = require( '../utils/utils' );
      
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const { status } = spawn(
  resolveBin( 'webpack' ),
  [
    ...webpackArgs(), 
  ],
  {
    stdio: 'inherit',
  }
);

process.exit( status );