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
