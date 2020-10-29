module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  install: ['react/jsx-runtime'],
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
        transformOptions: {
          // babel transform options
        },
      },
    ],
    ['@snowpack/plugin-dotenv'],
    /*  ['@snowpack/plugin-react-refresh'], */
  ],
  alias: {
    //Package Import Alias
    lodash: 'lodash-es',
    //Local Directory Import Alias (relative to cwd)
    '@app': './src',
    '@components': './src/components',
    '@pages': './src/pages',
    '@hooks': './src/hooks',
  },
};
