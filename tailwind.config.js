/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ["./"],
  theme: {

    fontFamily: {
      'inter': ['Inter']
  },
extend: {
  colors: {
     gray: {
       lighter: "#E5E5E6",
       light: "#E7E7E7",
       soft: "#676879",
       dark: "#808080",
       Neutral:"#FAFAFB",
       node:"#E0E1E2",
       basic:"#979797",
       bono:"#F2F2F2"
     },
    black: {
       soft: "#121212",
       dark:"#18202F"
    },
    pink: {
       soft: "#FF626A"
    },
    red: {
       soft: "#ED4D55",
       dark:"#F44A4A"
    },

    green:{
    soft:"#34B166"
    },

    blue:{
    dark:"#5137A6",
    }

  },

  
  
},


  },
  plugins: [],
}

