import 'styled-components';
import { defaultTheme } from '../styles/theme';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
