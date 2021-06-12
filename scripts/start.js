const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { webpackArgs } = require( '../utils/utils' );

const { status } = spawn(
  resolveBin( 'webpack' ),
  [
    ...webpackArgs(), 
    '--watch'
  ],
  {
    stdio: 'inherit',
  }
);

process.exit( status );