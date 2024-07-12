/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white:"#ffffff",
      green:"#1ea475",
      red: "#c73a0f",
      rose: {
           50: "#fcf9f7",
           100: "#f4edeb",
           300: "#c9aea6",
           400: "#ad8985",
           500: "#87635a",
           900: "#260f08",
      }
    }
    
  },
  plugins: [],
}

