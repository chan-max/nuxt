import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        purple: {
          '50': '#f3f0ff',
          '100': '#ebe4ff',
          '200': '#d8cdff',
          '300': '#bda6ff',
          '400': '#9e73ff',
          '500': '#823bff',
          '600': '#7714ff',
          '700': '#6900ff',
          '800': '#5901d6',
          '900': '#4a03af',
          '950': '#2c0077',
        }
      }
    }
  }
}
