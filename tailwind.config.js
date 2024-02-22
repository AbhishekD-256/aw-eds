const { tokens } = require('@adaptavant/brands/setmore');
const { createPreset } = require('@adaptavant/core/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // update this to provide the location of your templates
    './node_modules/@adaptavant/core/dist/**/*.{js,ts,jsx,tsx}', // this is the location of the React components for Earth
  ],
  presets: [createPreset(tokens)], // using the Earth preset configures Tailwind to use our custom classes
  theme: {
    extend: {},
  },
  plugins: [],
};
