/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pryBlue: '#09364C',
        secBlue:  '#1AA1E5',
        pryGreen: '#0E6548',
        secGreen: '#B3EDDA',
        textColor: '#202020',
      },
      fontFamily: {
        'default': ['Lora', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}
