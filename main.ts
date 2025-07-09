import { overrideThemes } from 'markedit-theming';
import { oneDark } from '@codemirror/theme-one-dark';

overrideThemes({
  dark: {
    extension: oneDark,
    colors: {
      accentColor: '#e06c75',
      syntaxMarker: '#98c379',
    },
  },
});
