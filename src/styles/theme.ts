import { css } from '@emotion/react';

const theme = {
  color: {
    primary1: '#FFC4E0',
    primary2: '#C4ACFE',
    sub1: '#2C2556',
    sub2: '#FBFBF4',
    black: '#000000',
    white: '#FFFFFF',
    gray01: '#F4F4F4',
    gray02: '#E6E6E6',
    gray03: '#BEBEBE',
    gray04: '#A1A1A1',
    gray05: '#7B7B7B',
    gray06: '#525252',
    gray07: '#363636',
  },
  font: {
    title: css`
      font-family: Pretendard;
      font-size: 96px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    `,
    head1: css`
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    `,
    body1: css`
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    `,
    body2: css`
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `,
    body3: css`
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `,
    sub1: css`
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export default theme;
