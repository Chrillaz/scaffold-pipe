#!/usr/bin/env node

const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' );

if ( 'start' === process.argv[2] ) {

  const { status } = spawn(
    resolveBin( 'webpack' ),
    [
      '--mode=development', 
      '--watch',
      '--config=node_modules/scaffold-pipe/config/webpack.config.js'
    ],
    {
      stdio: 'inherit',
    }
  );

  process.exit( status );
} else {

  process.exit( 1 );
}