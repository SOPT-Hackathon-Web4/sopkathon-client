import { css } from '@emotion/react';

export const Generators = {
  flexGenerator: (flexDirection = 'row', justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};
