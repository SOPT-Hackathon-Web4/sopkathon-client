import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  border: none;
  cursor: pointer;

  ${(props) => props.customStyle}

  ${({ theme }) => theme.font.body2};

  ${({ $isActivated, theme: { color } }) =>
    $isActivated
      ? `
  
      border-radius: 12px;
background:${color.primary1} ;
color:${color.gray07}

 `
      : `
      border-radius: 12px;
background: ${color.gray03};
color:${color.gray01}

 `};
`;
