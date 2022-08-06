import { createStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      $background: "#ffffff",
      $backgroundDarker: "#f9fafb",
      $textColor: "#667085",
      $textColorLighter: "#ffffff",
      $titleColor: "#101828",
      $primaryDarker: "#6941c6",
      $primary: "#7f56d9",
      $primaryLightest: "#f9f5ff",
    },
    borderStyles: {
      base: "1px solid #f2f4f7",
      lighter: "1px solid #d0d5dd",
    },
    shadows: {
      light: "0 1px 2px rgba(16, 24, 40, 0.05)",
    },
  },
});
