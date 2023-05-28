/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title-custom': '44px',
        'subtitle-custom': '25px',
        'desc-custom': '18px',
        'title-custom-mv' : '35px',
        'subtitle-custom-mv' : '22px',
      },
    },
    colors: {
      'primary': '#AA00FF',
      'secondary': '#49219C',
      'white': '#FFFFFF'
    }

  },
  plugins: [],
}

