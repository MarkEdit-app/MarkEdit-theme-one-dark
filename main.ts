import { overrideThemes } from 'markedit-theming';
import { oneDark } from '@codemirror/theme-one-dark';

overrideThemes({
  dark: {
    extension: oneDark,
    colors: {
      subtleEmphasis: true,
    },
  },
});
