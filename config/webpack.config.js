const path = require( 'path' ),
      { CleanWebpackPlugin } = require( 'clean-webpack-plugin' ),
      MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' ),
      RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const cleanExcludes = [
  '!js', 
  '!js/src', 
  '!js/src/**/*', 
  '!scss', 
  '!scss/**/*', 
  '!fonts', 
  '!fonts/**/*',
  '!icons',
  '!icons/**/*'
];

module.exports = (env, argv) => {
  
  const development = argv.mode === 'development';

  const context = path.resolve( process.cwd(), 'resources' );

  // config.doThemeHeaders();

  const config = {
    context,
    devtool: development ? 'inline-source-map' : 'source-map',
    entry: {
      public: './scripts/public.ts'
    },
    // externals: config.externals,
    output: {
      path: path.resolve( process.cwd(), 'assets' ),
      filename: 'js/[name].min.js',
      // publicPath: config.publicPath
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    watch: development,
    optimization: {
      removeEmptyChunks: true
    },
    module: { 
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve( 'ts-loader' ),
            options: {
              context,
              configFile: path.resolve( __dirname, 'tsconfig.json' )
            }
          }
        },
        {
          test: /\.s[c|a]ss$/,
          use: [
            MiniCSSExtractPlugin.loader, 
            require.resolve('css-loader'),
            {
              loader: require.resolve( 'postcss-loader' ),
              options: {
                postcssOptions: {
                  plugins: [
                    require( 'autoprefixer' )()
                  ]
                }
              }
            },
            require.resolve( 'sass-loader' )
          ]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: require.resolve( 'url-loader' ),
              options: {
                limit: 10000,
                name: 'fonts/[name].[ext]',
              }
            }
          ]
        }
      ] // .concat( config.rules )
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: true,
        cleanOnceBeforeBuildPatterns: ['**/*', ...cleanExcludes]
      }),
      new RemoveEmptyScriptsPlugin({ extensions:['css', 'scss', 'sass'] }),
      new MiniCSSExtractPlugin({
        filename: 'css/[name].css'
      })
    ].filter( Boolean ) // .concat( config.plugins ).filter( Boolean )
  };

  return config;
};
