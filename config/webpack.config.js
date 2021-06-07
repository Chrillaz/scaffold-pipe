const fs = require( 'fs' ),
      path = require( 'path' ),
      { getPackage, makeThemeHeaders } = require( '../utils/utils' ),
      { CleanWebpackPlugin } = require( 'clean-webpack-plugin' ),
      MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' ),
      RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts'),
      package = fs.readFileSync( getPackage() );

const development = process.env.NODE_ENV !== 'production';

const mode = development ? 'development' : 'production';

const context = path.resolve( process.cwd(), 'resources' );

! development && makeThemeHeaders( package );

const plugins = [
  new CleanWebpackPlugin({
    dry: true,
    cleanOnceBeforeBuildPatterns: [ '**/*', '!icons', '!icons/**/*' ]
  }),
  new RemoveEmptyScriptsPlugin({ extensions:['css', 'scss', 'sass'] }),
  new MiniCSSExtractPlugin({
    filename: 'css/[name].css'
  })
].filter( Boolean )

const config = {
  context,
  mode,
  devtool: development ? 'inline-source-map' : 'source-map',
  entry: {
    public: './scripts/public.ts'
  },
  output: {
    path: path.resolve( process.cwd(), 'public' ),
    filename: 'js/[name].min.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
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
            context: path.resolve( process.cwd(), 'resources/scripts' ),
            configFile: path.resolve( __dirname, 'tsconfig.json' )
          }
        }
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          MiniCSSExtractPlugin.loader, 
          require.resolve( 'css-loader' ),
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
    ]
  },
  plugins
};

module.exports = config;