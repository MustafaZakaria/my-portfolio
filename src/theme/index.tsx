import { theme as baseTheme, extendTheme } from '@chakra-ui/react';

import { textStyles } from '@/theme/foundations/textStyles';
import { colors } from '@/theme/foundations/colors';

import { radii } from './foundations/radii';
import { zIndices } from './foundations/z-indices';
import { breakpoints } from './foundations/breakpoints';

export const theme = extendTheme({
  colors: {
    ...baseTheme.colors,
    ...colors,
  },
  radii,
  zIndices,
  textStyles,
  breakpoints,
});

type Theme = typeof theme;
export type { Theme };
