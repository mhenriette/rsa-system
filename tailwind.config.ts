import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/rsa_home.jpg')",
        "donation-pattern": "url('/donate.jpg')"
      },
      boxShadow:{
        "activity-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      },
      colors:{
        theme: "#38194d",
        light:"#f2eafa"
      }
  
    },
  },
  plugins: [

  ],
}
export default config
