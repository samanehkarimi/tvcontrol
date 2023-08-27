/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [         './src/**/*.{html,js}',
 './*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '360px'
        // => @media (min-width: 640px) { ...
      },
      spacing: {
        '100': '100px',
      }
  },
  plugins: [],
}
}