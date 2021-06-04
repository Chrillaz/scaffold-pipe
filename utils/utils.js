const args = require( 'minimist' )( process.argv.slice( 2 ) ),
      path = require( 'path' );

const scripts = [
  'start',
  'build'
];

const arguments = {
  config: { type: 'string', default: '--config=node_modules/scaffold-pipe/config/webpack.config.js' },
  // tsconfig: { type: 'string', default: '--tsconfig=node_modules/scaffold-pipe/config/tsconfig.json' }
}

const hasScript = scriptName => scripts.includes( scriptName );

const getScript = scriptName => path.join( path.dirname( __dirname ), 'scripts', `${ scriptName }.js` );

const getScriptArgs = () => {

  scriptArgs = [];

  for ( const name in arguments ) {

    args.hasOwnProperty( name ) 
      ? scriptArgs.push( `--${name}=${args[name]}` )
      : scriptArgs.push( arguments[name].default );
  }

  return scriptArgs;
}

module.exports = {
  hasScript,
  getScript,
  getScriptArgs
}