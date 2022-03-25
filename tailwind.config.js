module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '510px',
        'mdlg': '704px',
        'mdlgnav': '860px',
        'md': '768px',
        'lgxl': '1109px',
        'xl2xl': '1109px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/homepage/hero-main.PNG')",
        'aandi': "url('/src/images/homepage/android_and_ios.PNG')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
