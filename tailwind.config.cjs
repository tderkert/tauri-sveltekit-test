/** @type {import('tailwindcss').Config}*/
const plugin = require('tailwindcss/plugin');
const { createThemes } = require('tw-colors');
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.625rem', {
          lineHeight: '0.75rem',
          letterSpacing: '0.01em',
          fontWeight: '400',
        }],
        '3xs': ['0.5rem', {
          lineHeight: '0.625rem',
          letterSpacing: '0.01em',
          fontWeight: '400',
        }],
      },
      maxWidth: {
        "2xs": "12rem",
      },
      spacing: {
        ".5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",

        "title-bar": "28px",
        "border-weight": "0.5px",
      },
      borderWidth: {
        "1": "0.5px",
      },
      boxShadow: {
        "overlay" : "0 2px 5px rgba(0, 0, 0, 0.08), 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(0, 0, 0, 0.04)",
      }
    },
  },

  plugins: [
    createThemes({
      light: {
        primary:                "hsl(224, 100%, 55%)",
        "primary-icon":         "hsl(224, 100%, 60%)",
        "primary-border":       "hsl(224, 100%, 65%)",
        "on-primary":           "hsl(0, 0%, 100%)",

        background:             "hsl(0, 0%, 100%)",
        "background-2": "hsl(0, 0%, 96%)",
        "background-3": "hsl(0, 0%, 92%)",
        "background-selection": "hsla(0, 0%, 0%, 0.06)",
        "background-selection-2": "hsla(0, 0%, 0%, 0.1)",
        "background-selection-3": "hsla(0, 0%, 0%, 0.2)",
        "background-selection-4": "hsla(0, 0%, 0%, 0.3)",

        foreground:             "black",
        "foreground-2": "hsla(0, 0%, 0%, 0.6)",
        "foreground-3":  "hsla(0, 0%, 0%, 0.4)",

        "border":               "hsla(0, 0%, 0%, 0.1)",
      },
      dark: {
        primary:                "hsl(224, 100%, 60%)",
        "primary-icon":         "hsl(224, 100%, 75%)",
        "primary-border":       "hsl(224, 100%, 60%)",
        "on-primary":           "hsl(0, 0%, 100%)",

        background:             "hsl(0, 0%, 10%)",
        "background-2": "hsl(0, 0%, 14%)",
        "background-3": "hsl(0, 0%, 18%)",
        "background-selection": "hsla(0, 0%, 100%, 0.1)",
        "background-selection-2": "hsla(0, 0%, 100%, 0.14)",
        "background-selection-3": "hsla(0, 0%, 100%, 0.2)",
        "background-selection-4": "hsla(0, 0%, 100%, 0.3)",

        foreground:             "white",
        "foreground-2": "hsla(0, 0%, 100%, 0.6)",
        "foreground-3": "hsla(0, 0%, 100%, 0.4)",

        "border":               "hsla(0, 0%, 100%, 0.14)",
      },
    }),

    // Add support for translate-z
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
  ],
};

module.exports = config;
