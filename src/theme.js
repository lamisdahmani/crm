import { createContext, useState, useMemo } from "react"
import { createTheme } from "@mui/material/styles"

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        primary: {
          100: "#2d3748",
          200: "#4a5568",
          300: "#718096",
          400: "#1a202c",
          500: "#1a202c", // Dark background
          600: "#2d3748",
          700: "#4a5568",
          800: "#718096",
          900: "#e2e8f0",
        },
        redAccent: {
          100: "#fed7d7",
          200: "#feb2b2",
          300: "#fc8181",
          400: "#f56565",
          500: "#e53e3e", // Main YALIDINE red
          600: "#c53030",
          700: "#9b2c2c",
          800: "#822727",
          900: "#63171b",
        },
        greenAccent: {
          100: "#f0fff4",
          200: "#c6f6d5",
          300: "#9ae6b4",
          400: "#68d391",
          500: "#48bb78",
          600: "#38a169",
          700: "#2f855a",
          800: "#276749",
          900: "#22543d",
        },
        blueAccent: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b77cb",
          800: "#2c5aa0",
          900: "#2a4365",
        },
      }
    : {
        // LIGHT MODE - Fixed colors
        grey: {
          100: "#141414",      // Darkest - for main text
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#6c757d",
          600: "#858585",
          700: "#a3a3a3",
          800: "#d4d4d4",
          900: "#f5f5f5",      // Lightest - for backgrounds
        },
        primary: {
          100: "#fafafa",      // Almost white for cards
          200: "#f5f5f5",
          300: "#e5e5e5",
          400: "#d4d4d4",
          500: "#ffffff",      // Pure white background
          600: "#fafafa",
          700: "#f5f5f5",
          800: "#e5e5e5",
          900: "#d4d4d4",
        },
        redAccent: {
          100: "#63171b",
          200: "#822727",
          300: "#9b2c2c",
          400: "#c53030",
          500: "#e53e3e",      // Main YALIDINE red
          600: "#f56565",
          700: "#fc8181",
          800: "#feb2b2",
          900: "#fed7d7",
        },
        greenAccent: {
          100: "#22543d",
          200: "#276749",
          300: "#2f855a",
          400: "#38a169",
          500: "#48bb78",
          600: "#68d391",
          700: "#9ae6b4",
          800: "#c6f6d5",
          900: "#f0fff4",
        },
        blueAccent: {
          100: "#2a4365",
          200: "#2c5aa0",
          300: "#2b77cb",
          400: "#3182ce",
          500: "#4299e1",
          600: "#63b3ed",
          700: "#90cdf4",
          800: "#bee3f8",
          900: "#ebf8ff",
        },
      }),
})

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode)
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.redAccent[500], // YALIDINE red as primary
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500], // Dark background
              paper: colors.primary[100],
            },
            text: {
              primary: colors.grey[100],
              secondary: colors.grey[300],
            },
          }
        : {
            // LIGHT MODE - Fixed palette
            primary: {
              main: colors.redAccent[500], // YALIDINE red as primary
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[300],
              main: colors.grey[500],
              light: colors.grey[700],
            },
            background: {
              default: "#f5f5f5",           // Light grey background
              paper: "#ffffff",              // White paper/cards
            },
            text: {
              primary: colors.grey[100],     // Dark text
              secondary: colors.grey[300],   // Medium dark for secondary text
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 600,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 500,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
      },
    },
  }
}

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export const useMode = () => {
  const [mode, setMode] = useState("light") 

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [],
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode]
}