import { css } from '@emotion/react';

const theme = {
  color: {
    white01: '#FFFFFF',
    white02: 'rgba(255, 255, 255, 0.56)',
    gray01: '#F8F8F8',
    gray02: '#EEEEEE',
    gray03: '#E6E6E6',
    gray04: '#D5D5D3',
    gray05: '#C9C9C9',
    gray06: '#BEBEBE',
    gray07: '#A8A8A8',
    gray08: '#909090',
    gray09: '#666666',
    gray10: '#3D3D3D',
    gray11: '#2D2D2D',
    gray12: '#101010',
    mint01: 'var(--mint01, #00C6BE)',
    blue01: 'var(--blue01, #597ABE)',
  },
  font: {
    display1: css`
      font-weight: 600;
      font-size: 25px;
      font-family: 'Nanum Myeongjo', serif;
      font-style: normal;
      line-height: 125.037%; /* 93.778px */
      letter-spacing: -2.25px;
    `,
    head1: css`
      font-weight: 300;
      font-size: 35px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 47.684px */
      letter-spacing: 1.05px;
    `,
    body1: css`
      font-weight: 300;
      font-size: 15px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 168%; /* 25.2px */
      letter-spacing: -0.6px;
    `,
    detail1: css`
      font-weight: 500;
      font-size: 11px;
      font-family: 'Noto Sans', sans-serif;
      font-style: normal;
      line-height: 136.241%; /* 14.986px */
    `,
    caption1: css`
      font-weight: 400;
      font-size: 12px;
      font-family: Georgia, sans-serif;
      font-style: italic;
      line-height: 113.657%; /* 13.639px */
      letter-spacing: -0.24px;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export default theme;
