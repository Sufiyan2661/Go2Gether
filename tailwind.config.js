/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        caramellatte: {
          "primary": "oklch(62% 0.265 303.9)",
          "primary-content": "oklch(97% 0.014 308.299)",
          "secondary": "oklch(58% 0.233 277.117)",
          "secondary-content": "oklch(96% 0.018 272.314)",
          "accent": "oklch(76% 0.188 70.08)",
          "accent-content": "oklch(98% 0.022 95.277)",
          "neutral": "oklch(14% 0 0)",
          "neutral-content": "oklch(98% 0 0)",
          "base-100": "oklch(14% 0 0)",
          "base-200": "oklch(20% 0 0)",
          "base-300": "oklch(26% 0 0)",
          "base-content": "oklch(97% 0 0)",
          "info": "oklch(58% 0.158 241.966)",
          "info-content": "oklch(97% 0.013 236.62)",
          "success": "oklch(60% 0.118 184.704)",
          "success-content": "oklch(98% 0.014 180.72)",
          "warning": "oklch(64% 0.222 41.116)",
          "warning-content": "oklch(98% 0.016 73.684)",
          "error": "oklch(57% 0.245 27.325)",
          "error-content": "oklch(97% 0.013 17.38)",
          "--radius-selector": "2rem",
          "--radius-field": "0.5rem",
          "--radius-box": "2rem",
          "--size-selector": "0.25rem",
          "--size-field": "0.25rem",
          "--border": "1px",
          "--depth": "0",
          "--noise": "0",
        }
      }
    ],
    darkTheme: "caramellatte" // optional
  }
};
