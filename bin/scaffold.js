#!/usr/bin/env node

const { hasScript, getScript, getScriptArgs } = require( '../utils' );
const spawn = require( 'cross-spawn' );

const runScript = ( scriptName ) => {

  if ( ! scriptName ) {
		
		console.log( 'Script name is missing.' );

		exit( 1 );
	}

	if ( ! hasScript( scriptName ) ) {
		
		console.log( `Ops.. looks like "${ scriptName }" is not available.` );
    console.log( `Maybee try one of these "${ scripts.join(',') }"`)
		
    exit( 1 );
	}

	const { status } = spawn.sync( 'node', [ 
      getScript( scriptName ),
      ...getScriptArgs()
    ],
		{
			stdio: 'inherit',
		}
	);

	process.exit( status );
};

runScript( process.argv[2] )
