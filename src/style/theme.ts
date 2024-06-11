import { css, DefaultTheme } from 'styled-components';

const colors = {
  primeBlue: 'rgb(0, 149, 246)',
  white: 'rgb(255, 255, 255)',
  lightGray: 'rgb(239, 239, 239)',
  darkGray: 'rgb(115, 115, 115)',
  black: 'rgb(0, 0, 0)',
};

const fonts = {
  h2: css`
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
  `,
  semibold_16: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.8rem;
  `,

  regular_16: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8rem;
  `,

  semibold_14: css`
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
  `,

  regular_14: css`
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
  `,

  semibold_12: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.4rem;
  `,

  medium_12: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
