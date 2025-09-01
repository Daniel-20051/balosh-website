/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['var(--font-garamond)', 'serif'],
        'gotham': ['var(--font-gotham)', 'system-ui', 'sans-serif'],
        'andhibath': ['Andhibath Demo', 'cursive', 'system-ui'],
      },
    },
  },
  plugins: [],
}
