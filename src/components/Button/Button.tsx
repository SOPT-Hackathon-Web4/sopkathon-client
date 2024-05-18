import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  customStyle?: SerializedStyles;
}

export interface ButtonContainerProps {
  customStyle?: SerializedStyles;
}

const Button = ({ label, onClick = () => {}, customStyle = css``, ...props }: ButtonProps) => {
  return (
    <ButtonContainer className={`button`} customStyle={customStyle} onClick={onClick} {...props}>
      {label}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  ${Generators.flexGenerator()};
  gap: 0.4rem;

  ${(props) => props.customStyle}
`;
