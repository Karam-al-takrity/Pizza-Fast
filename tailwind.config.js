/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    fontWeight: {
      normal: 'bolder',
    },
    extend: {
      height: {
        screen: '100vdh',
      },
    },
  },
  plugins: [],
};
