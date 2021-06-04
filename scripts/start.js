const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { getScriptArgs } = require( '../utils' );

const { status } = spawn(
  resolveBin( 'webpack' ),
  [
    ...getScriptArgs(), 
    '--watch'
  ],
  {
    stdio: 'inherit',
  }
);

process.exit( status );