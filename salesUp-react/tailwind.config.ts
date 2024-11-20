/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@els_xefi/x-react/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        skeleton: "hsl(var(--skeleton))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        light: "hsl(var(--light))",
        alert: {
          danger: "hsl(var(--alert-danger))",
          success: "hsl(var(--alert-success))",
        },
        text: {
          DEFAULT: "hsl(var(--text))",
          foreground: "hsl(var(--text-foreground))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          input: "hsl(var(--outline-input))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          light: "hsl(var(--card-light))",
          foreground: "hsl(var(--card-foreground))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          background: "hsl(var(--orange-background))",
        },
        green: {
          DEFAULT: "hsl(var(--green))",
          background: "hsl(var(--green-background))",
        },
        red: {
          DEFAULT: "hsl(var(--red))",
          background: "hsl(var(--red-background))",
        },
        blue: {
          DEFAULT: "hsl(var(--blue))",
          background: "hsl(var(--blue-background))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          background: "hsl(var(--grey-background))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        desktop: "1480px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(50%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "slide-down": {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "1000px", opacity: "1" },
        },
        "slide-up": {
          "0%": { maxHeight: "1000px", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-in",
        "slide-in": "slide-in 0.2s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-up": "slide-up 1s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
