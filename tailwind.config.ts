import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {

      colors: {
        lightOrange: '#FDB66A',
        lightGrey: '#8F8F8F',
        grey: '#494949',
darkGrey: '#F7F7F7',
        white: '#fff',
        black: '#000000',
        foundBlack: '#252525',
        darkOrange: '#F37022',
        transparent: '#00000000',
        transparentBlack: '#000000CC',
        lighterOrange: '#FFFBF8',
        lightestOrange: '#F8F2E0',
        aquaBlue: 'rgba(195, 227, 247, 0.9)',
        neonGreen: '#8CDA3F',
        darkNavy: '#0C172B',
        navy: '#0D172A'
      },
      screens: {
        '3xl': { max: '1535px' },
        
        '2xl': { max: '1400px' },
        xl: { max: '1279px' },
        

        lg: { max: '1023px' },
        

        md: { max: '767px' },
        

        sm: { max: '639px' },
        xs: { max: '575px' },
        '2xs': { max: '400px' },
        
    },
      extend: {},
    },

  plugins: [],
} satisfies Config

