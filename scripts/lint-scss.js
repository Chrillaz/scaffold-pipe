const { sync: spawn } = require( 'cross-spawn' );
const { sync: resolveBin } = require( 'resolve-bin' );
 
const result = spawn(
  resolveBin( 'stylelint' ),
  [
    `--config=${path.resolve( __dirname, 'config/.stylelintrc' )}`,
    `--ignore-path=${path.resolve( __dirname, 'config/.stylelintignore' )}`
  ],
  { 
    stdio: 'inherit' 
  }
);
 
process.exit( result.status );