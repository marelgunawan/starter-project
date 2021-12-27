module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }),
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
