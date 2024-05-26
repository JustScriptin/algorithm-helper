/* eslint-disable id-length */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: [ "class" ],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        darkBlue: "var(--color-dark-blue)",
        lightBlue: "var(--color-light-blue)",
        green: "var(--color-green)",
        red: "var(--color-red)",
        yellow: "var(--color-yellow)",
        lightGray: "var(--color-light-gray)",
        gray: "var(--color-gray)",
        darkGray: "var(--color-dark-gray)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primaryForeground: "hsl(var(--primary-foreground))",
        secondaryForeground: "hsl(var(--secondary-foreground))"
      },
      borderRadius: {
        lg: "var(--border-radius-lg)",
        md: "var(--border-radius-md)",
        sm: "var(--border-radius-sm)"
      },
      fontFamily: {
        sans: [ "var(--font-family-sans)" ]
      },
      fontSize: {
        h1: [
          "var(--font-size-h1)",
          { lineHeight: "var(--line-height-h1)", fontWeight: "var(--font-weight-bold)" }
        ],
        h2: [
          "var(--font-size-h2)",
          { lineHeight: "var(--line-height-h2)", fontWeight: "var(--font-weight-semibold)" }
        ],
        h3: [
          "var(--font-size-h3)",
          { lineHeight: "var(--line-height-h3)", fontWeight: "var(--font-weight-semibold)" }
        ],
        h4: [
          "var(--font-size-h4)",
          { lineHeight: "var(--line-height-h4)", fontWeight: "var(--font-weight-semibold)" }
        ],
        h5: [
          "var(--font-size-h5)",
          { lineHeight: "var(--line-height-h5)", fontWeight: "var(--font-weight-bold)" }
        ],
        h6: [
          "var(--font-size-h6)",
          { lineHeight: "var(--line-height-h6)", fontWeight: "var(--font-weight-semibold)" }
        ],
        body: [
          "var(--font-size-body)",
          { lineHeight: "var(--line-height-body)", fontWeight: "var(--font-weight-regular)" }
        ],
        small: [
          "var(--font-size-small)",
          { lineHeight: "var(--line-height-small)", fontWeight: "var(--font-weight-regular)" }
        ]
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    }
  },
  plugins: [ require("tailwindcss-animate") ]
};

export default config;