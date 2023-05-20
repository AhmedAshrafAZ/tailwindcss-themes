/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "primary": {
          "DEFAULT": "var(--color-primary)",
          "content": "var(--color-primary-content)",
          "focus": "var(--color-primary-focus)",
        },
        "secondary": {
          "DEFAULT": "var(--color-secondary)",
          "content": "var(--color-secondary-content)",
          "focus": "var(--color-secondary-focus)",
        },
        "accent": {
          "DEFAULT": "var(--color-accent)",
          "content": "var(--color-accent-content)",
          "focus": "var(--color-accent-focus)",
        },
        "neutral": {
          "DEFAULT": "var(--color-neutral)",
          "content": "var(--color-neutral-content)",
          "focus": "var(--color-neutral-focus)",
        },
        "base": {
          "DEFAULT": "var(--color-base)",
          "content": "var(--color-base-content)",
          "darker": "var(--color-base-darker)",
          "darkest": "var(--color-base-darkest)",
        },
        "info": {
          "DEFAULT": "var(--color-info)",
          "content": "var(--color-info-content)",
        },
        "success": {
          "DEFAULT": "var(--color-success)",
          "content": "var(--color-success-content)",
        },
        "warning": {
          "DEFAULT": "var(--color-warning)",
          "content": "var(--color-warning-content)",
        },
        "error": {
          "DEFAULT": "var(--color-error)",
          "content": "var(--color-error-content)",
        },
      },
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary|accent|neutral|base|info|success|warning|error)/,
      variants: ['hover', 'focus'],
    },
  ]
}