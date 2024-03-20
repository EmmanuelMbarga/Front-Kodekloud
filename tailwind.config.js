/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter','sans-serif,'],
        Poppins:['Poppins','sans-serif']
      }
    },
    screens:{
      "petitPortable":{'min':'90px','max':'275px'},
      "portable":{'min':'120px','max':'480px'},
      'tablete':{'min':'481px','max':'991px'},
      'desktop':{"min":'991px','max':'2000px'},
      "exception1":{'max':'773px'}, 

    },
  },
  plugins: [],
}

