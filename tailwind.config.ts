import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'calendar': ['Roboto Mono', 'monospace'],
      },
      colors: {
        'primary': {
          100: '#A8A8A8',
          200: '#262626',
          300: '#525252',
          500: '#1A1A1A',
        },
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
      }
    },
  },
  plugins: [],
}

export default config
