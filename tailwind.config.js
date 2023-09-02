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
        '32': '32px',
      },
      inset: {
        '4/4': '85%',
      },
      boxShadow: {
        '3xl': '4px 8px 16px 0 rgba(0, 0, 0, 0.1)',
      }
  },
  plugins: [],
}
}