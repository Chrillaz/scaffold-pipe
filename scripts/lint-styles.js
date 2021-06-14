const { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { stylelintArgs } = require( '../utils/utils' );

const result = spawn(
  resolveBin( 'stylelint' ),
  [
    ...stylelintArgs(),
    '**/*.{css,scss}'
  ],
  { 
    stdio: 'inherit' 
  }
);
 
process.exit( result.status );