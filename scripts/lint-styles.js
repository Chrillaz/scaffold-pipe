const path = require( 'path' ),
      { sync: spawn } = require( 'cross-spawn' ),
      { sync: resolveBin } = require( 'resolve-bin' ),
      { stylelintArgs, rootDir } = require( '../utils/utils' );

const result = spawn(
  resolveBin( 'stylelint' ),
  [
    ...stylelintArgs(),
    '--fix',
    path.resolve( rootDir(), './resources/styles/' )
  ],
  { 
    stdio: 'inherit' 
  }
);
 
process.exit( result.status );