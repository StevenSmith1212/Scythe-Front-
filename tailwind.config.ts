import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 90% 90%, var(--tw-gradient-stops))',
      },

      animation: {
        text: 'text 5s ease-in-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': '100% 50%',
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
