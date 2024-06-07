import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primeBlue: string;
      white: string;
      lightGray: string;
      darkGray: string;
      black: string;
    };

    fonts: {
      h2: SerializedStyles;
      semibold_16: SerializedStyles;
      regular_16: SerializedStyles;
      semibold_14: SerializedStyles;
      regular_14: SerializedStyles;
      medium_12: SerializedStyles;
    };
  }
}
