function Config () {

  this.context = '';

  this.output = '';

  this.publicPath = './'

  this.entries = {};
    
  this.externals = {};

  this.rules = [];

  this.plugins = [];
}

Config.prototype.context = function ( context ) {

  this.context = context.trim();
}

Config.prototype.output = function ( output ) {

  this.output = output.trim();
}

Config.prototype.entry = function ( module, path ) {

  Object.assign( this.entries, { [module]: path } );

  return this;
}

Config.prototype.get = function () {

  return this;
}

exports.config = new Config();