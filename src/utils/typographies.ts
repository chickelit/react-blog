import { CSSProperties } from "@stitches/react";

interface ITypographyStyles {
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: CSSProperties["fontSize"];
  lineHeight?: CSSProperties["lineHeight"];
}

interface TypographyAttributes {
  name: string;
  styles: ITypographyStyles;
}

class Typography implements TypographyAttributes {
  declare name: string;
  declare styles: ITypographyStyles;

  constructor(payload: TypographyAttributes) {
    this.name = payload.name;
    this.styles = payload.styles;
  }
}

const typographies = [
  new Typography({
    name: "display-lg-semibold",
    styles: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: "3.75rem",
    },
  }),
  new Typography({
    name: "display-sm-semibold",
    styles: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.375rem",
    },
  }),
  new Typography({
    name: "display-xs-semibold",
    styles: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
  }),
  new Typography({
    name: "text-xl-normal",
    styles: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "1.875rem",
    },
  }),
  new Typography({
    name: "text-md-normal",
    styles: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  }),
  new Typography({
    name: "text-md-semibold",
    styles: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  }),
  new Typography({
    name: "text-sm-normal",
    styles: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  }),
  new Typography({
    name: "text-sm-medium",
    styles: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  }),
  new Typography({
    name: "text-sm-semibold",
    styles: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  }),
];

const typographyNames = typographies.map((typography) => typography.name);

export type TypographyName = typeof typographyNames[number];

export const handler = (name: TypographyName) => {
  const typography = typographies.find(
    (typography) => typography.name === name
  ) as Typography;

  return typography.styles;
};
