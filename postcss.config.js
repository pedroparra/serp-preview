module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      browser: '> 0.5%, last 2 versions, Firefox ESR, not dead, not ie',
      stage: 0,
      features: {
        'custom-properties': false
      }
    }),
    require('postcss-extend')
  ]
}

// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'postcss-preset-env': {
//       stage: 0,
//       features: {
//         'custom-properties': false
//       }
//     }
//   }
// }
