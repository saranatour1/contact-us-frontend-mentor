import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "green-100":"hsl(148, 38%, 91%)", // light green
      "green-200":"hsl(169, 82%, 27%)", // green 
      "grey-100":"hsl(186, 15%, 59%)", // medium grey 
      "grey-200":"hsl(187, 24%, 22%)", // dark grey 
      "red-950":"hsl(0, 66%, 56%)",   // red
      "white":"#FFFFFFFF"
    },
    fontFamily:{
      'karla':['Karla Variable', 'sans-serif']
    },
    spacing:{
      "xs":"0.5rem",
      "s":"0.75rem",
      "m":"1rem",
      "l":"1.5rem",
      "xl":"2rem",
      "2xl":"2.5rem",
      "3xl":"8rem"
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config , theme }) {
      // Add your custom styles here
      addUtilities({
        ".heading":{
          fontFamily: theme("fontFamily.karla"),
          letterSpacing:"-0.0625rem",
          fontSize: "2rem",
          color:theme("colors.grey-200"),
          lineHeight:"2rem",
          fontWeight: 700
        },
        ".body-medium-bold":{
          fontFamily: theme("fontFamily.karla"),
          letterSpacing:"0px",
          fontSize: "1.125rem",
          color:theme("colors.grey-200"),
          lineHeight:"1.6875rem",
          fontWeight: 700,
        },
        ".body-medium-regular":{
          fontFamily: theme("fontFamily.karla"),
          letterSpacing:"0px",
          fontSize: "1.125rem",
          color:theme("colors.grey-200"),
          lineHeight:"1.6875rem",
          fontWeight: 400,
        },
        ".body-s":{
          fontFamily: theme("fontFamily.karla"),
          letterSpacing:"0px",
          fontSize: "1rem",
          color:theme("colors.grey-200"),
          lineHeight:"1.5rem",
          fontWeight: 400,
        },
        "label":{},
        "input":{},
        "radio":{},
        "check-box":{},
        "btn":{},
        "error-label":{},
        "error-input":{},

        "toast-success":{},
        "toast-error":{},
      })
    }),
  ],
}

