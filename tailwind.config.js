// tailwind.config.js
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'blink-slow': 'blink 1.5s infinite',
        'blink-fast': 'blink 1.5s infinite 0.75s',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      colors: {
        // Add custom colors here
        'font': '#271409', // Example custom color
        'back':'#ff7b00'
        // You can add more colors as needed
      },
    },
  },
  plugins: [flowbite],
}
