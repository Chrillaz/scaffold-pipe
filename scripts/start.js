const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' );

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