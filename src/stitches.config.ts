import { createStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      $white: "#ffffff",
      $gray50: "#f9fafb",
      $gray400: "#98a2b3",
      $gray500: "#667085",
      $gray700: "#344054",
      $gray800: "#1d2939",
      $gray900: "#101828",
      $primary50: "#f9f5ff",
      $primary600: "#7f56d9",
      $primary700: "#6941c6",
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
    infinite: "(min-width: 1201px)"
  }
});
