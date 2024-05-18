import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  customStyle?: SerializedStyles;
  isActivated: boolean;
}

export interface ButtonContainerProps {
  customStyle?: SerializedStyles;
  $isActivated: boolean;
}

const Button = ({ label, onClick = () => {}, customStyle = css``, isActivated, ...props }: ButtonProps) => {
  return (
    <ButtonContainer
      className={`button`}
      customStyle={customStyle}
      onClick={onClick}
      {...props}
      $isActivated={isActivated}>
      {label}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 5.2rem;
  ${Generators.flexGenerator()};
  gap: 0.4rem;

  ${(props) => props.customStyle}

  ${({ $isActivated, theme: { colors } }) =>
    $isActivated
      ? `
  
      border-radius: 12px;
background: var(--primary1, #FFC4E0);

/* glassmorphism */
box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
backdrop-filter: blur(10px);
 `
      : `
      border-radius: 12px;
border: 1px solid var(--gradient, #EAEAEA);
background: var(--gray3_BEBEBE, #BEBEBE);

/* glassmorphism */
box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
backdrop-filter: blur(10px);
 `};
`;

// ${({ $isActivated, theme: { colors } }) =>
//   $isActivated
//     ? `
//  background-color: ${colors.P_06};
//  color: ${colors.white};
//  border: none;
//  outline: none;
// `
//     : `
//  background-color: ${colors.G_02};
//  color: ${colors.G_07};
//  border: none;
// `};
