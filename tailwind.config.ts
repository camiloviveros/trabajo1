import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'caper': {
          '50': '#f8fbea',
          '100': '#eff5d2',
          '200': '#dceba2',
          '300': '#c8df77',
          '400': '#afce4d',
          '500': '#92b32f',
          '600': '#718f21',
          '700': '#566d1e',
          '800': '#46571d',
          '900': '#3c4b1c',
          '950': '#1e280b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
