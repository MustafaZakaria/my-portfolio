import type { Theme as StyledSystemTheme } from 'styled-system';
import { useMediaQuery } from 'react-responsive';

import { colors } from '@/theme/foundations/colors';
import { textStyles } from '@/theme/foundations/textStyles';

export const convertHexToRGB = (hex: string, tint?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (tint) {
    return `rgba(${r}, ${g}, ${b}, ${tint})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

export const legacyTheme = {
  colors,
  fonts: {
    anton: `Anton`,
    titillium: `Titillium`,
  },
  fontWeights: {
    fw100: 100,
    fw200: 200,
    fw300: 300,
    fw400: 400,
    fw500: 500,
    fw600: 600,
    fw700: 700,
    fw800: 800,
    fw900: 900,
  },
  fontSizes: {
    fs95: '5.9375rem',
    fs75: '4.6875rem',
    fs52: '3.25rem',
    fs48: '3rem',
    fs42: '2.625rem',
    fs40: '2.5rem',
    fs38: '2.375rem',
    fs30: '1.875rem',
    fs28: '1.75rem',
    fs26: '1.625rem',
    fs24: '1.5rem',
    fs20: '1.25rem',
    fs18: '1.125rem',
    fs16: '1rem',
    fs14: '0.875rem',
    fs12: '0.75rem',
    fs10: '0.625rem',
  },
  lineHeights: {
    lh84: '5.25rem',
    lh70: '4.375rem',
    lh54: '3.375rem',
    lh46: '2.875rem',
    lh44: '2.75rem',
    lh42: '2.625rem',
    lh36: '2.25rem',
    lh34: '2.125rem',
    lh32: '2rem',
    lh30: '1.875rem',
    lh28: '1.75rem',
    lh26: '1.625rem',
    lh24: '1.5rem',
    lh22: '1.375rem',
    lh20: '1.25rem',
    lh18: '1.125rem',
  },
  letterSpacings: {
    ls008em: '0.08em',
    ls025: '-0.025rem',
    ls02: '-0.02em',
    ls0125: '-0.0125rem',
    lsMinus0005em: '-0.005em',
    lsMinus05Percent: '-0.5%',
    lsMinus1Percent: '-1%',
  },
  typography: textStyles,
  borders: {
    none: 'none',
    borderThin1: '1px solid',
    borderDashed1: '1px dashed',
    border2: '2px solid',
    border4: '4px solid',
    border5: '5px solid',
    borderThick6: '6px solid',
  },
  breakpoints: [
    '20rem',
    '21.25rem',
    '23.125rem',
    '23.75rem',
    '30rem',
    '47.9375rem',
    '55.625rem',
    '64.0625rem',
    '76.25rem',
    '90rem',
    '120rem',
    '160rem',
  ] as unknown as Breakpoints,
  space: [] as (string | number)[] | Breakpoints<string>,
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Breakpoints = legacyTheme.breakpoints as any;
Breakpoints.mobile320 = Breakpoints[0];
Breakpoints.mobile340 = Breakpoints[1];
Breakpoints.mobile370 = Breakpoints[2];
Breakpoints.mobile380 = Breakpoints[3];
Breakpoints.tablet480 = Breakpoints[4];
Breakpoints.tablet767 = Breakpoints[5];
Breakpoints.desktop890 = Breakpoints[6];
Breakpoints.desktop1025 = Breakpoints[7];
Breakpoints.desktop1220 = Breakpoints[8];
Breakpoints.desktop1440 = Breakpoints[9];
Breakpoints.desktop1920 = Breakpoints[10];
Breakpoints.desktop2560 = Breakpoints[11];

export type LegacyTheme = typeof legacyTheme & StyledSystemTheme;
export type TypographyType = keyof typeof legacyTheme.typography;
export type Font = keyof typeof legacyTheme.fonts;
export type Colors = keyof typeof legacyTheme.colors;

interface Breakpoints<T = string> {
  _: T;
  mobile320: T;
  mobile340: T;
  mobile370: T;
  mobile380: T;
  tablet480: T;
  tablet767: T;
  desktop890: T;
  desktop1025: T;
  desktop1220: T;
  desktop1440: T;
  desktop1920: T;
  desktop2560: T;
}

export const mobile320 = `(min-width: ${Breakpoints.mobile320})`;
export const mobile340 = `(min-width: ${Breakpoints.mobile340})`;
export const mobile370 = `(min-width: ${Breakpoints.mobile370})`;
export const mobile380 = `(min-width: ${Breakpoints.mobile380})`;
export const tablet480 = `(min-width: ${Breakpoints.tablet480})`;
export const tablet767 = `(min-width: ${Breakpoints.tablet767})`;
export const desktop890 = `(min-width: ${Breakpoints.desktop890})`;
export const desktop1025 = `(min-width: ${Breakpoints.desktop1025})`;
export const desktop1220 = `(min-width: ${Breakpoints.desktop1220})`;
export const desktop1440 = `(min-width: ${Breakpoints.desktop1440})`;
export const desktop1920 = `(min-width: ${Breakpoints.desktop1920})`;
export const desktop2560 = `(min-width: ${Breakpoints.desktop2560})`;

export const useBreakpoint = () => ({
  isMobile320: useMediaQuery({ query: mobile320 }),
  isMobile340: useMediaQuery({ query: mobile340 }),
  isMobile370: useMediaQuery({ query: mobile370 }),
  isMobile380: useMediaQuery({ query: mobile380 }),
  isTablet480: useMediaQuery({ query: tablet480 }),
  isTablet767: useMediaQuery({ query: tablet767 }),
  isDesktop890: useMediaQuery({ query: desktop890 }),
  isDesktop1025: useMediaQuery({ query: desktop1025 }),
  isDesktop1220: useMediaQuery({ query: desktop1220 }),
  isDesktop1440: useMediaQuery({ query: desktop1440 }),
  isDesktop1920: useMediaQuery({ query: desktop1920 }),
  isDesktop2560: useMediaQuery({ query: desktop2560 }),
});

export type UseBreakpointReturnType = ReturnType<typeof useBreakpoint>;
