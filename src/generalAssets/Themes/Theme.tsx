"use client";

import * as React from "react";
import { createTheme } from "@mui/material/styles";

function customBorderTransform(value: any) {
  // Create a dynamic border string using the value from the theme
  return `${value}px solid black`;
}
const mainPalette = {
  main: "#291640",
  50: "#F8F8FF",
  100: "#44828f",
  200: "#70bdc2",
  400: "#68a3a8",
  500: "#d5eeef",
  600: "#e1f3f7",
  700: "#59a9b6",
  800: "#f2fdff",
  900: "#E1E0FF",
  A100: "#F8F8FF",
  A200: "#FFFF",
};
const secondPalette = {
  main: "#07006C",
  50: "#07006C",
  100: "#1200A9",
  200: "#2E2CC1",
  400: "#494AD9",
  500: "#6365F3",
  600: "#8083FF",
  700: "#A0A3FF",
  800: "#C1C1FF",
  900: "#E1E0FF",
  A100: "#F2EFFF",
};
const info = {
  main: "#1B1B23",
  10: "#84838A",
  20: "#ACAAB4",
  30: "#EBEAEE",
  40: "#FFFFFF",
  50: "rgba(0, 0, 0, 0.08)",
  60: "rgba(8, 20, 30, 0.38)",
};
export const theme = createTheme({
  spacing: [0, 2, 4, 8, 12, 16, 24, 32, 48, 56, 64, 96, 128, 160, 256, 296],
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,
      md: 950,
      lg: 1240,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },

  palette: {
    common: {
      black: "#08141E",
      // inputLabel: '#626782',
    },
    primary: {
      ...mainPalette,
    },
    secondary: {
      ...secondPalette,
    },
    info: {
      ...info,
    },
    error: {
      main: "#FF365E",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    action: {
      active: " rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: " rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(161, 166, 170, 0.24)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(8, 20, 30, 0.6)",
    },
  },

  typography: {
    fontFamily: "'Roboto', sans-serif",
    htmlFontSize: 16,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "46px",
      letterSpacing: "-0.5px",
    },
    h2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "46px",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800,
      fontSize: "50px",
      lineHeight: "60px",
    },
    h4: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 500,
      fontSize: "34px",
      lineHeight: "36px",
    },
    h5: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800,
      fontSize: "36px",
      lineHeight: "45px",
      letterSpacing: "0.18px",
    },
    h6: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: "22px",
      lineHeight: "46px",
      letterSpacing: "-0.5px",
    },
    subtitle1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "0.32px",
    },
    subtitle2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "0.15px",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: " 16px",
      fontWeight: 400,
      lineHeight: " 24px",
      letterSpacing: " 0px",
    },

    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.25px",
    },
    button: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "16px",
      letterSpacing: "1.25px",
      textTransform: "none",
    },
    caption: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.4px",
    },
    overline: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "2px",
      letterSpacing: "1px",
      textTransform: "initial",
    },
  },
  shape: {
    borderRadius: 8,
  },
  unstable_sxConfig: {
    border: {
      themeKey: "borders",
      transform: customBorderTransform, // Using the customBorderTransform function
    },
    borderColor: {
      themeKey: "palette",
    },
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.20)",
    "0px 4px 54px #BCC1E5",
    "6px 20px 20px 0px rgba(0, 0, 0, 0.05)",
    "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.06)",
    "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 6px 12px rgba(0, 0, 0, 0.06)",
    "0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.06)",
    "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.06)",
    "0px 12px 24px rgba(0, 0, 0, 0.1), 0px 24px 48px rgba(0, 0, 0, 0.06)",
    "0px 16px 32px rgba(0, 0, 0, 0.1), 0px 32px 64px rgba(0, 0, 0, 0.06)",
    "0px 20px 40px rgba(0, 0, 0, 0.1), 0px 40px 80px rgba(0, 0, 0, 0.06)",
    "0px 25px 50px rgba(0, 0, 0, 0.1)",
    "0px 0px 10px rgba(0, 0, 0, 0.15), 0px 5px 5px rgba(0, 0, 0, 0.12)",
    "0px 0px 20px rgba(0, 0, 0, 0.15), 0px 10px 10px rgba(0, 0, 0, 0.12)",
    "0px 0px 40px rgba(0, 0, 0, 0.2)",
    "0px 4px 54px #BCC1E5",
    "0px 6px 10px rgba(0, 0, 0, 0.08), 0px 1px 18px rgba(0, 0, 0, 0.08), 0px 3px 5px rgba(0, 0, 0, 0.12)",
    "6px 20px 20px 0px rgba(0, 0, 0, 0.05)",
    "none",
    "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    "0px 4px 54px #BCC1E5",
    "6px 20px 20px 0px rgba(0, 0, 0, 0.05)",
  ],
});

// export default function ThemeRegistry({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </NextAppDirEmotionCacheProvider>
//   );
// }
