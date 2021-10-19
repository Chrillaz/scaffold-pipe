#!/usr/bin/env node

const { scriptExists, getScript, cliArgs } = require( '../utils/utils' );
const spawn = require( 'cross-spawn' );

const runScript = scriptName => {

  if ( ! scriptName ) {
		
		console.log( 'Script name is missing.' );

		exit( 1 );
	}

	if ( ! scriptExists( scriptName ) ) {
		
		console.log( `Ops.. looks like "${ scriptName }" is not available.` );
		
    exit( 1 );
	}

	const { status } = spawn.sync( 'node', [ 
      getScript( scriptName ),
      ...cliArgs()
    ],
		{
			stdio: 'inherit',
		}
	);

	process.exit( status );
};

runScript( process.argv[2] )