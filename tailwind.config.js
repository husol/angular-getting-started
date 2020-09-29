module.exports = {
  important: true,
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      },
      zIndex: {
        '9999': '9999',
      }
    },
  },
  variants: {},
  plugins: [],
}
