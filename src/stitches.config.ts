import { createStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      gray50: "#f9fafb",
      gray400: "#98a2b3",
      gray500: "#667085",
      gray700: "#344054",
      gray800: "#1d2939",
      gray900: "#101828",
      primary50: "#f9f5ff",
      primary600: "#7f56d9",
      primary700: "#6941c6",
    },
    borderStyles: {
      gray100: "1px solid #f2f4f7",
      gray200: "1px solid #eaecf0",
      gray300: "1px solid #d0d5dd",
    },
    shadows: {
      xs: "0 1px 2px rgba(16, 24, 40, 0.05)",
    },
  },
  media: {
    max480: "(max-width: 480px)",
    max768: "(max-width: 768px)",
    max1024: "(max-width: 1024px)",
    max1200: "(max-width: 1200px)",
    infinite: "(min-width: 1201px)",
  },
  utils: {
    typography: (label: string) => {
      switch (label) {
        case "display-lg-semibold": {
          return {
            fontWeight: 600,
            fontSize: "3rem",
            lineHeight: "3.75rem",
          };
        }

        case "display-xs-semibold": {
          return {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "2rem",
          };
        }

        case "text-x1-normal": {
          return {
            fontWeight: 400,
            fontSize: "1.25rem",
            lineHeight: "1.875rem",
          };
        }

        case "text-md-normal": {
          return {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.5rem",
          };
        }

        case "text-md-semibold": {
          return {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.5rem",
          };
        }

        case "text-sm-normal": {
          return {
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          };
        }

        case "text-sm-medium": {
          return {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          };
        }

        case "text-sm-semibold": {
          return {
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          };
        }

        default: {
          throw new Error(`Invalid typography: ${label}`);
        }
      }
    },
  },
});
