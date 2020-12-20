const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php'],

    theme: {
        colors: {
            white: '#FFFFFF',
            gray: {
                100: '#d4caca',
                200: '#4a3e40',
                300: '#47393a',
                400: '#49393B',
                500: '#49393B',
                600: '#49393B',
                700: '#433335',
                800: '#3e2e2f',
                900: '#2b2020'
            },
            indigo: {
                100: '#F1FAEE',
                200: '#c1ddbb',
                300: '#6d8c5d',
                400: '#F1FAEE',
                500: '#F1FAEE',
                600: '#456736',
                700: '#F1FAEE',
                800: '#F1FAEE',
                900: '#F1FAEE'
            },
            red: {
                100: '#E63946',
                200: '#E63946',
                300: '#E63946',
                400: '#E63946',
                500: '#E63946',
                600: '#E63946',
                700: '#E63946',
                800: '#E63946',
                900: '#E63946'
            },
            yellow: {
                100: '#FFD166',
                200: '#FFD166',
                300: '#FFD166',
                400: '#FFD166',
                500: '#FFD166',
                600: '#FFD166',
                700: '#FFD166',
                800: '#FFD166',
                900: '#FFD166'
            }
        },
        extend: {
            fontFamily: {
                sans: ['Roboto'],
            }
        }
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
