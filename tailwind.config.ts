import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'custom': {
                    '50': '#fff9eb',
                    '100': '#feedc7',
                    '200': '#fdd98a',
                    '300': '#fcc04d',
                    '400': '#fbae35',
                    '500': '#f5840b',
                    '600': '#d96006',
                    '700': '#b44009',
                    '800': '#92320e',
                    '900': '#78290f',
                    '950': '#451303',
                },
            }
        }
    }
}