module.exports = {
  content: ["./src/**/*.{html,js}", "./*.php", "./**/*.php"],
  theme: {
    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1330px',
    },
    fontFamily: {
      first: 'Barlow',
      second: 'Kelson Regular',
      third: 'Minion'
    },
    extend: {
      colors: {
        'dark-grey': '#2A2A2A',
        'light-grey': '#767676',
        'grey': '#4A5568',
      },
    },
    
  },
  plugins: [],
}